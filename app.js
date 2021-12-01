const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Este es el cambio para el pipeline, mi primer pipeline en AWS!!!!!!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
