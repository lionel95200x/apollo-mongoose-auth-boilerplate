const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

const DBNAME = 'DBNAME'


// Enter your mongoose bdd url
const url = `mongodb+srv://`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));


export { DBNAME }