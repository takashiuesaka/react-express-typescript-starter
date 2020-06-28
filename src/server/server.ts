import express from 'express';
import path from 'path';

import sample from './mod-a/sample';

const app = express();

app.use(express.static(path.join('./', 'dist')));

app.get('/api', (req, res) => {
    let value = sample();
    res.send({ api: 'test', test: value });
})

app.get('*', function (req, res) {
    res.sendFile(path.join('./', 'dist', 'index.html'))
})

app.listen(3000, () => {
    console.log('server running');
})