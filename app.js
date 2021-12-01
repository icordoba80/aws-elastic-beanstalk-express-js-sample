const express = require('express');
const app = express();
const port = 8080;
app.get('/', (req, res) => res.send('Reimon es mi Irmao, y Gonzo se la come! Gil Vouyerista xD'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
