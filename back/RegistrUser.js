const fs = require('fs');
const path = require('path');

class RegistrUser {
    constructor(name, password, role) {
        this.name = name;
        this.password = password;
        this.role = role;
    }


    static getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, 'public', 'registration.json'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(JSON.parse(content))
                    }
                }
            )
        })
    }

    toJSON() {
        return {
            name: this.name,
            password: this.password,
            role: this.role,
        }
    }

    static async getByName(name) {
        const users = await RegistrUser.getAll();
        return users.find(elem => elem.name.toLowerCase() === name)
    }

    static async find(param) {
        const users = await RegistrUser.getAll();
        const spliter = param.split(' ');
        return users.map(e => {
            const newObj = new Object();
            spliter.forEach(elem => {
                newObj[`${elem}`] = e[elem]
            })
            return newObj
        })
    }

    static async update(user){
        const users = await RegistrUser.getAll();
        const idx = users.findIndex(elem => elem.name.toLowerCase() === user.name.trim().toLowerCase());
        users[idx].role = user.role;

        return  new Promise((resolve, reject) =>{
            fs.writeFile(
                path.join(__dirname, 'public', 'registration.json'),
                JSON.stringify(users),
                err => {
                    if(err){
                        reject(err)
                    }else{
                        resolve()
                    }
                }
            )
        })
    }

    async save() {
        const users = await RegistrUser.getAll();
        users.push(this.toJSON());
        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, 'public', 'registration.json'),
                JSON.stringify(users),
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

module.exports = RegistrUser;
