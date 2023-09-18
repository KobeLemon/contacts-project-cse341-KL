const mongodb = require('./data/database');

const express = require('express');
const app = express();

const port3000 = process.env.PORT || 3000;

app.use('/', require('./routes'))

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port3000, () => console.log(`Database is listening & Node is running on port ${port3000}`));
    }
})

