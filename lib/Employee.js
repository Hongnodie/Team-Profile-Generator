// function Employee creates a basic template for all employees by assigning name, id, and email.
function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}

module.exports = Employee;