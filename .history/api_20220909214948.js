// api url
const api_url = "https://michegwwe.herokuapp.com/employee";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  lrt data = await response.json();
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
          <th>employee_no</th>
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
