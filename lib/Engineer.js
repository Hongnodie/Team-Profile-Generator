const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, githubname) {
        super(name, id, email);
        this.githubname = githubname;
    }
}

module.exports = Engineer;