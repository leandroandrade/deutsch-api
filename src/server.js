require('dotenv-safe/config');

const MongoDB = require('./databases/mongodb');
const app = require('./app');

MongoDB.connect()
    .then(() => console.log('> mongodb connected successful'))
    .catch(err => console.error(err));

const { PORT } = process.env;

app.listen(PORT, () => console.log(`> deutsch-api start on port ${PORT}`));
