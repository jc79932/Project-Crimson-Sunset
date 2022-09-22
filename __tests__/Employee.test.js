const Employee = require('../lib/Employee');

test('Creating an employee object..', () => {
    const employee = new Employee('Boby', 5, 'boby5@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//Name from getName() 
test('Gets employee name', () => {
    const employee = new Employee('Boby', 5, 'boby5@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

//Id from getId() 
test('Gets employee ID', () => {
    const employee = new Employee('Nicole', 90, 'nicole.elisaw@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

//Email from getEmail()
test('Gets employee email', () => {
    const employee = new Employee('Boby', 5, 'boby5@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//Role from getRole()
test('Gets role of employee', () => {
    const employee = new Employee('Boby', 5, 'boby5@gmail.com');
    expect(employee.getRole()).toEqual("Employee");
}); 