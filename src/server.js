require('@babel/register')();

const express = require('express');
const app = express();
const render = require('./render').default;

app.get('/', (req, res) => {
    res.send(
        `<!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8" />
                    <title>Bookstore</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
                </head>
                <body>
                    <div id="root">${render()}</div>
                </body>
            </html>`
    )
})

app.listen(3000, () => console.log('Server is ready on 3000'));