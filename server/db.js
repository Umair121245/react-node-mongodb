const mongoose = require('mongoose');

const mongodbURI = 'mongodb+srv://umairkhann092:umairkhan@cluster0.vqovcdt.mongodb.net/';

mongoose.connect(mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
//username: umairkhann092
//password: umairkhan
