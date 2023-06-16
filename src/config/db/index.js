const mongoose = require('mongoose');
const uriCluster911 = 'mongodb+srv://admin123:admin123@cluster911.japeptb.mongodb.net/'

async function connect() {
    try {
        await mongoose.connect(uriCluster911, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to database successfully ');
    } catch (error) {
        console.log('Failed to connect');
    }
}

module.exports = { connect };