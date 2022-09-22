const Employee = require ('./Employee');
//TODO officeNumber, getRole()
class Manager extends Employee{
    constructor (name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;