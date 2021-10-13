const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('[server] MongoDB successfully connected'))
.catch(err => console.log('[MongoDB] Connection failed\n',err));