
const url = 'https://api.condusef.gob.mx/auth/users/create-super-user/';

const data = {
  key: '14181|29|29138|NO|NO',
  username: 'adminCPCR222',
  password: '1234',
  confirm_password: '1234'
};

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
};

fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Response:', data);
    // Aquí puedes manejar la respuesta de la API
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    // Aquí puedes manejar errores de la solicitud
  });


  {
    "userid": "3bc2b713-3ab1-4d24-8a3d-8b63c647a41e",
    "username": "adminCPCR222",
    "password": "$2a$10$zNw0vUEQ.FImsGzaHDMj7.Ns7Ami5ITMl/GLkRRaGaf9sDD4gk7Lu",
    "institucionid": "A8FC9265-1892-4C8B-B40F-C90CCEE7",
    "is_active": true,
    "profileid": "2",
    "date": "2024-04-03T06:00:00.000Z",
    "system": "a7f7f93d-704e-4afe-a7aa-0b56490b479e",
    "token_access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIzYmMyYjcxMy0zYWIxLTRkMjQtOGEzZC04YjYzYzY0N2E0MWUiLCJ1c2VybmFtZSI6ImFkbWluQ1BDUjIyMiIsImluc3RpdHVjaW9uaWQiOiJBOEZDOTI2NS0xODkyLTRDOEItQjQwRi1DOTBDQ0VFNyIsImluc3RpdHVjaW9uQ2xhdmUiOjQ3MjcsImRlbm9taW5hY2lvbl9zb2NpYWwiOiJDYWphIFBvcHVsYXIgQ3Jpc3RvIFJleSwgUy5DLiBkZSBBLlAuIGRlIFIuTC4gZGUgQy5WLiIsInNlY3RvcmlkIjoyMywic2VjdG9yIjoiU09DSUVEQURFUyBDT09QRVJBVElWQVMgREUgQUhPUlJPIFkgUFLDiVNUQU1PIiwic3lzdGVtIjoiUkVERUNPIiwiaWF0IjoxNzEyMTI0Njc1LCJleHAiOjE3MTI5ODg2NzV9.jrSzkA6Q71evRw7ehDMR0MExYHPFi0AJyxIO_9Wa2Bw"
}

const url = 'https://api.condusef.gob.mx/redeco/quejas/?year=2024&quarter=1 ';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIzYmMyYjcxMy0zYWIxLTRkMjQtOGEzZC04YjYzYzY0N2E0MWUiLCJ1c2VybmFtZSI6ImFkbWluQ1BDUjIyMiIsImluc3RpdHVjaW9uaWQiOiJBOEZDOTI2NS0xODkyLTRDOEItQjQwRi1DOTBDQ0VFNyIsImluc3RpdHVjaW9uQ2xhdmUiOjQ3MjcsImRlbm9taW5hY2lvbl9zb2NpYWwiOiJDYWphIFBvcHVsYXIgQ3Jpc3RvIFJleSwgUy5DLiBkZSBBLlAuIGRlIFIuTC4gZGUgQy5WLiIsInNlY3RvcmlkIjoyMywic2VjdG9yIjoiU09DSUVEQURFUyBDT09QRVJBVElWQVMgREUgQUhPUlJPIFkgUFLDiVNUQU1PIiwic3lzdGVtIjoiUkVERUNPIiwiaWF0IjoxNzEyMTI0Njc1LCJleHAiOjE3MTI5ODg2NzV9.jrSzkA6Q71evRw7ehDMR0MExYHPFi0AJyxIO_9Wa2Bw';


const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}` // Agregar el token de acceso en el encabezado Authorization
    }
  };

fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Response:', data);
    // Aquí puedes manejar la respuesta de la API
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    // Aquí puedes manejar errores de la solicitud
  });
