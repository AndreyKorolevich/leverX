const http = require('http');
const path = require('path');
const Request = require('./Request');
const Koa = require('koa');
const koaBody = require('koa-body');
const koaStatic = require('koa-static');
const app = new Koa();

const public = path.join(__dirname, '/public')
app.use(koaStatic(public));

app.use(async (ctx, next) => {
    const origin = ctx.request.get('Origin');
    if (!origin) {
        return await next();
    }

    const headers = {'Access-Control-Allow-Origin': '*',};

    if (ctx.request.method !== 'OPTIONS') {
        ctx.response.set({...headers});
        try {
            return await next();
        } catch (e) {
            e.headers = {...e.headers, ...headers};
            throw e;
        }
    }

    if (ctx.request.get('Access-Control-Request-Method')) {
        ctx.response.set({
            ...headers,
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
        });

        if (ctx.request.get('Access-Control-Request-Headers')) {
            ctx.response.set('Access-Control-Allow-Headers', ctx.request.get('Access-Control-Request-Headers'));
        }

        ctx.response.status = 204;
    }
});

app.use(koaBody({
    text: true,
    urlencoded: true,
    multipart: true,
    json: true,
}));


app.use(async ctx => {
    const {method} = ctx.request;
    switch (method) {
        case 'GET':
            if (ctx.request.query.param === 'getAllRequests') {
                ctx.response.body = await Request.getAll();;
            }
            break;
        case 'POST':
            if (ctx.request.query.param === 'createRequest') {
                const body = JSON.parse(ctx.request.body);
                const {startDate, endDate, comment, select} = body;
                const range = Math.round((new Date(endDate) - new Date(startDate)) / (60 * 60 * 24 * 1000) + 1);
                const request = new Request(startDate, endDate, comment, select, range);
                await request.save();
                const allRequests = await Request.getAll();
                ctx.response.body = {type: 'create', data: allRequests}
            }
            break
        case 'PUT':
            if (ctx.request.query.param === 'changeRole') {
                await RegistrUser.update(JSON.parse(ctx.request.body));
                ctx.response.body = await RegistrUser.getByName(JSON.parse(ctx.request.body).name.toLowerCase());
            }
            break
        default:
            ctx.response.status = 404;
            return;
    }
    ctx.response.status = 200;
});


const port = process.env.PORT || 7070;
http.createServer(app.callback()).listen(port);
