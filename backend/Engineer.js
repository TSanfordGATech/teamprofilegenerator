// will inherit items from employee
var Employee = require("./Employee")
// pull in the inherited items
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.title = "Engineer";
        this.github = github;
    }
    // add in the special item for the engineers
    getGithub() {
        return this.github;
    };
}
// export the information
module.exports = Engineer;