
    console.error('There was a problem with the fetch operation:', error);
    // Aquí puedes manejar errores de la solicitud
  });

Promise {<pending>}
VM633:22 Response: {medio: Array(10)}medio: Array(10)0: {medioId: 1, medioDsc: 'Correo electrónico'}1: {medioId: 2, medioDsc: 'Página de internet'}2: {medioId: 3, medioDsc: 'Sucursales'}3: {medioId: 4, medioDsc: 'Teléfono'}4: {medioId: 5, medioDsc: 'UNE'}5: {medioId: 10, medioDsc: 'Aplicación informática'}6: {medioId: 17, medioDsc: 'Oficinas de atención'}7: {medioId: 20, medioDsc: 'Aplicación movil'}8: {medioId: 22, medioDsc: "Api's"}9: {medioId: 23, medioDsc: 'Boots'}medioDsc: "Boots"medioId: 23[[Prototype]]: Objectlength: 10[[Prototype]]: Array(0)[[Prototype]]: Object

const url = 'https://api.condusef.gob.mx/catalogos/niveles-atencion';
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

Promise {<pending>}
VM648:22 Response: {nivelesDeAtencion: Array(4)}nivelesDeAtencion: Array(4)0: {nivelDeAtencionId: 1, nivelDeAtencionDsc: 'UNE'}1: {nivelDeAtencionId: 2, nivelDeAtencionDsc: 'Sucursal'}2: {nivelDeAtencionId: 3, nivelDeAtencionDsc: 'Centro de Atención Telefónica'}3: {nivelDeAtencionId: 4, nivelDeAtencionDsc: 'Vía Electrónica'}length: 4[[Prototype]]: Array(0)[[Prototype]]: Object