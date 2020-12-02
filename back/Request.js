const { v4: uuidv4 } = require('uuid');
const moment = require('moment')
const fs = require('fs');
const path = require('path');

class Request {
    constructor(startDate, endDate, comment, select, range) {
        this.id = uuidv4();
        this.startDate = moment(startDate).format('D MMM yyyy');
        this.endDate = moment(endDate).format('D MMM yyyy');
        this.comment = comment;
        this.range = range;
        this.select = select;
        this.created = moment().format('D MMM yyyy');
        this.status = 'approved';
        this.alredyApproved =['John Smith', 'Seth Smith'];
        this.currentApprovers = ['Will McConnel'];
        this.nextApprover =['John Smith', 'Mike Smith'];
        this.register = 'Katrin Brown';
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, 'public', 'data.json'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        reject(err)
                    }else{
                        resolve(JSON.parse(content))
                    }
                }
            )
        })
    }

    toJSON() {
        return {
            startDate: this.startDate,
            endDate: this.endDate,
            comment: this.comment,
            select: this.select,
            range: this.range,
            created: this.created,
            id: this.id,
            status: this.status,
            alredyApproved: this.alredyApproved,
            currentApprovers: this.currentApprovers,
            nextApprover: this.nextApprover,
            register: this.register,
        }
    }

    static async getById(id) {
        const requests = await Request.getAll();
        return requests.find(elem => elem.id === id)
    }

    async save() {
        const requests = await Request.getAll();
        requests.push(this.toJSON());
        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, 'public', 'data.json'),
                JSON.stringify(requests),
                err => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
            )
        })

    }


}

module.exports = Request;
