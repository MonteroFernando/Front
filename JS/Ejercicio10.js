const tabla = document.getElementById('Table');
const Url = 'https://jsonplaceholder.typicode.com/users';
fetch(Url)
  .then(response => response.json())
  .then(data => {
    // Recorrer los datos y completar la tabla
    data.forEach(user => {
      const row = tabla.insertRow();
      const nombreCell = row.insertCell(0);
      const apellidoCell = row.insertCell(1);
      const emailCell = row.insertCell(2);
      const nombreEmpresaCell = row.insertCell(3);
      const direccionCell = row.insertCell(4);

      nombreCell.textContent = user.name;
      apellidoCell.textContent = user.username;
      emailCell.textContent = user.email;
      nombreEmpresaCell.textContent = user.company.name;
      direccionCell.textContent = user.address.street + ', ' + user.address.suite + ', ' + user.address.city;
    });
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });