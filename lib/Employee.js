//Main Employee constructor
//TODO name, id, email, getName(), getId(), getEmail(), getRole()
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return 'N/A';
    }
};

module.exports = Employee;