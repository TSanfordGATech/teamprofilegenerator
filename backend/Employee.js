// Employee class is for all of the same content so I dont have to repeate that 
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee"
    }
    // get the return for the inputted name
    getName() {
        return this.name;
    };
    // Id number 
    getId() {
        return this.id;
    };
    // email for associate
    getEmail() {
        return this.email;
    };
    // their title
    getRole() {
        return this.title;
    };
}
// export information
module.exports = Employee;