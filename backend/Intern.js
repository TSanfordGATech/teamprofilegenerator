// will inherit items from employee
var Employee = require("./Employee")
// pull in the inherited items
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.title = "Intern";
    }
    // Special item to intern
    getSchool() {
        return this.school
    }
}
module.exports = Intern;