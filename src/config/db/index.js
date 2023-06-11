const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/dkon_asm_cloud', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to database successfully ');
    } catch (error) {
        console.log('Failed to connect');
    }
}

module.exports = { connect };