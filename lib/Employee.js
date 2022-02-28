// class Employee creates a basic template for all employees by assigning name, id, and email.
class Employee {
    constructor(role, name, id, email, special) {
        this.role =role;
        this.name = name;
        this.id = id;
        this.email = email;
        this.special = special;
    }
}

module.exports = Employee;