const express = require('express');
const app = express();
const { connect } = require('./db')

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

async function main() {
    await connect();
}
main();

app.listen(app.get('port'), () => console.log(`server on port ${app.get('port')}`));