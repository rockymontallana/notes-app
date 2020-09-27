const mongoose = require('mongoose');
const URI = 'mongodb+srv://rocky:malteserZ0923@cluster0.2azs2.mongodb.net/notes?retryWrites=true&w=majority'
const connectDB = async () =>
{
const conn = await mongoose.connect(URI, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology: true
});
console.log(`MongoDB Connected: ${conn.connection.host}`)
}
module.exports = connectDB ;