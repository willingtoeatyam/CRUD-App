const mongoose= require('mongoose');
require('dotenv').config();

const { connectionUri } = process.env;

module.exports = () => {
    mongoose.connect(connectionUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }, (err) =>{
        if (err){
            console.log(err);
        } else{
            console.log('Mongoose is connected')
        }
    });   
}