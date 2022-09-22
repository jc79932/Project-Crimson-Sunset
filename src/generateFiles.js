const generateManager = function (manager) {
    return `
    <div class="flex-item">
        <div class="title">
            <h2>${manager.name}</h2>
            <p><b>Manager</b></p><i class="pad material-icons">content_paste</i>
        </div>
        <div>
            <p class="pad id">ID: ${manager.id}</p>
            <p class="pad email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="pad office">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
    `;
}

const generateEngineer = function (engineer) {
    return `
    <div class="flex-item">
        <div class="title">
            <h2>${engineer.name}</h2>
            <p><b>Engineer</b></p><i class="pad material-icons">laptop_mac</i>
        </div>   

        <div>
            <p class="pad id">ID: ${engineer.id}</p>
            <p class="pad email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="pad github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
    `
}

const generateIntern = function (intern) {
    return `
    <div class="flex-item">
        <div class="title">
            <h2>${intern.name}</h2>
            <p><b>Intern</b></p><i class="pad material-icons">assignment_ind</i>
        </div>

            <div>
                <p class="pad id">ID: ${intern.id}</p>
                <p class="pad email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="pad school">School: ${intern.school}</p>
            </div>
    </div>
    `
};


generateFiles = (data) => {

    // array for cards 
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role == 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        if (role == 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        if (role == 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
        
    }

    const employeeCards = pageArray.join('')
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

// Generate html page 
const generateTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
  </head>
  <body>
      <header>
          <nav>
              <h1>Team Profile</h1>
          </nav>
      </header>
      <main>
        
        ${employeeCards}
              
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  </html>


`;
}

// export to index
module.exports = generateFiles; 