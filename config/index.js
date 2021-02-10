const dbuser = 'user';
const dbpassword = 'pass';
const dbname = 'books';

const MONGODB_URI = `mongodb+srv://${dbuser}:${dbpassword}@cluster0.fio22.mongodb.net/${dbname}?retryWrites=true&w=majority`;

module.exports = MONGODB_URI;