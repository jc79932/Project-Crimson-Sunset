const Intern = require('../lib/Intern');

test('Creating an Intern object..', () => {
    const intern = new Intern('Boby', 5, 'boby5@gmail.com', 'UTSA');
    expect(intern.school).toEqual(expect.any(String));
});

//School from getSchool() 
test('Gets intern school name', () => {
    const intern = new Intern('Boby', 5, 'boby5@gmail.com', 'UTSA');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

//Role from getRole() 
test('Gets role', () => {
    const intern = new Intern('Boby', 5, 'boby5@gmail.com', 'UTSA');
    expect(intern.getRole()).toEqual('Intern');
});
