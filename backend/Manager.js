// also inherits items from employee
var Employee = require("./Employee")
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.title = "Manager"
        this.officeNumber = officeNumber;
    };
    // unique manager item
    getOfficeNumber() {
        return this.officeNumber
    };
}
module.exports = Manager