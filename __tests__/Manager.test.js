const Manager = require('../lib/Manager');

test('Creating an Manager object..', () => {
    const manager = new Manager('Boby', 5, 'boby5@gmail.com', 10);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

//Role from getRole() 
test('Gets role', () => {
    const manager = new Manager('Boby', 5, 'boby5@gmail.com', 10);
    expect(manager.getRole()).toEqual('Manager');
});
