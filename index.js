// Cargar las variables de entorno desde el archivo .env
require('dotenv').config();

const http = require('http');

// Usar el puerto del archivo .env o 3000 por defecto si no se encuentra la variable
const PORT = process.env.PORT || 3000;

// Contenido HTML con diseño bonito y responsivo
const htmlContent = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Página de Prueba - Node.js</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(to right, #4facfe, #00f2fe);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      text-align: center;
    }
    .container {
      background: rgba(0, 0, 0, 0.3);
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }
    h1 {
      margin-bottom: 10px;
      font-size: 2.5em;
    }
    p {
      margin-top: 0;
      font-size: 1.2em;
    }
    code {
      font-family: monospace;
      color: #ffeb3b;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>¡Bienvenido a tu página con Node.js!</h1>
    <p>Este contenido es servido directamente desde el archivo <code>index.js</code> en tu servidor Node.js.</p>
  </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  // Log para cada solicitud recibida
  console.log(`➡️ Petición recibida: ${req.method} ${req.url}`);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(htmlContent);
});

server.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
