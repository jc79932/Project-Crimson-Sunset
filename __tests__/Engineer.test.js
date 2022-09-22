const Engineer = require('../lib/Engineer');

test('Creating an Engineer object..', () => {
    const engineer = new Engineer('Boby', 5, 'boby5@gmail.com', 'boby5');
    expect(engineer.github).toEqual(expect.any(String));
});

//Github from getGithub() 
test('Gets engineer github name', () => {
    const engineer = new Engineer('Boby', 5, 'boby5@gmail.com', 'boby5');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

//Role from getRole() 
test('Gets role', () => {
    const engineer = new Engineer('Boby', 5, 'boby5@gmail.com', 'boby5');
    expect(engineer.getRole()).toEqual('Engineer');
});
