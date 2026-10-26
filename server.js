
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Welcome to BDF Lab 1!');
});

app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'Chada Varshini',
        section: 'S-15'
    });
});

app.get('/time', (req, res) => {
    res.status(200).send(new Date().toString());
});

app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
