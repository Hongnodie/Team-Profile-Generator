// class Employee creates a basic template for all employees by assigning name, id, and email.
class Employee {
    constructor(name, id, email, special) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.special = special;
    }
}

module.exports = Employee;