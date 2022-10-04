// api url
const api_url = "https://michegwwe.herokuapp.com/employees";
const api_url1 = "https://michegwwe.herokuapp.com/students";
// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  let data = await response.json();
  console.log(data);
  if (response) {
    hideloader();
  }
  show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
  document.getElementById("loading").style.display = "none";
}
// Function to define innerHTML for HTML table
function show(data) {
  let tab = `<tr>
          <th>id</th>
          <th>employee_no</th>
          <th>id_number</th>
          <th>full_names</th>
          <th>role</th>
          <th>Salary</th>
         </tr>`;

  // Loop to access all rows
  for (let r of data) {
    tab += `<tr> 
    <td>${r.id} </td>
    <td>${r.employee_no} </td>
    <td>${r.id_number} </td>
    <td>${r.full_names}</td>
    <td>${r.role}</td> 
    <td>${r.salary}</td>          
</tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById("employees").innerHTML = tab;
}

function show1(data) {
  let tab = `<tr>
          <th>id</th>
          <th>Full_names</th>
          <th>admision_number</th>

          <th>date_of_birth</th>
          <th>updated_at</th>
         </tr>`;

  // Loop to access all rows
  for (let r of data) {
    tab += `<tr> 
    <td>${r.id} </td>
    <td>${r.Full_names} </td>
    <td>${r.admision_number} </td>
    <td>${r.date_of_birth}</td> 
    <td>${r.updated_at}</td>          
</tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById("students").innerHTML = tab;
}
getapi(api_url1);