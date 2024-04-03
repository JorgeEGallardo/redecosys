
const url = 'https://api-reune-pruebas.condusef.gob.mx/auth/users/create-super-user/';

const data = {
  key: '14181|29|29138|SI|NO',
  username: 'adminCPCR22',
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


  const defaultVal = {
    "message": "El usuario ha sido creado exitosamente!",
    "data": {
        "userid": "302557ba-5906-4d2b-bfdf-64eaba36adbb",
        "username": "adminCPCR22",
        "password": "$2a$10$lottvlUDyphMSBYJwrN5r.FEHGqhXkIQprbMM32kTIym8VMw1WGUm",
        "institucionid": "A8FC9265-1892-4C8B-B40F-C90CCEE7",
        "is_active": true,
        "profileid": "2",
        "date": "2024-04-02T06:00:00.000Z",
        "system": "8b2d9355-84de-470f-99b4-69dd3b39a03e",
        "token_access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIzMDI1NTdiYS01OTA2LTRkMmItYmZkZi02NGVhYmEzNmFkYmIiLCJ1c2VybmFtZSI6ImFkbWluQ1BDUjIyIiwiaW5zdGl0dWNpb25pZCI6IkE4RkM5MjY1LTE4OTItNEM4Qi1CNDBGLUM5MENDRUU3IiwiaW5zdGl0dWNpb25DbGF2ZSI6NDcyNywiZGVub21pbmFjaW9uX3NvY2lhbCI6IkNhamEgUG9wdWxhciBDcmlzdG8gUmV5LCBTLkMuIGRlIEEuUC4gZGUgUi5MLiBkZSBDLlYuIiwic2VjdG9yaWQiOjIzLCJzZWN0b3IiOiJTT0NJRURBREVTIENPT1BFUkFUSVZBUyBERSBBSE9SUk8gWSBQUsOJU1RBTU8iLCJzeXN0ZW0iOiJSRVVORSIsImlhdCI6MTcxMjEyMzI1NywiZXhwIjoxNzEyOTg3MjU3fQ.xToqfYMxtHNv9i-W5ewoEYiUKg9xctdbuq66Xe4ToJM"
    }
}

14181|29|29138|NO|NO
const url = 'https://api-reune-pruebas.condusef.gob.mx/reune/consultas/general';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIzMDI1NTdiYS01OTA2LTRkMmItYmZkZi02NGVhYmEzNmFkYmIiLCJ1c2VybmFtZSI6ImFkbWluQ1BDUjIyIiwiaW5zdGl0dWNpb25pZCI6IkE4RkM5MjY1LTE4OTItNEM4Qi1CNDBGLUM5MENDRUU3IiwiaW5zdGl0dWNpb25DbGF2ZSI6NDcyNywiZGVub21pbmFjaW9uX3NvY2lhbCI6IkNhamEgUG9wdWxhciBDcmlzdG8gUmV5LCBTLkMuIGRlIEEuUC4gZGUgUi5MLiBkZSBDLlYuIiwic2VjdG9yaWQiOjIzLCJzZWN0b3IiOiJTT0NJRURBREVTIENPT1BFUkFUSVZBUyBERSBBSE9SUk8gWSBQUsOJU1RBTU8iLCJzeXN0ZW0iOiJSRVVORSIsImlhdCI6MTcxMjEyMzI1NywiZXhwIjoxNzEyOTg3MjU3fQ.xToqfYMxtHNv9i-W5ewoEYiUKg9xctdbuq66Xe4ToJM';
const data = {
  key: '14181|29|29138|SI|NO',
  username: 'adminCPCR22',
  password: '1234',
  confirm_password: '1234'
};

const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Agregar el token de acceso en el encabezado Authorization
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
