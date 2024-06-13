const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'ユーザー名は必須です']
    },
    password: {
        type: String,
        required: [true, 'パスワードは必須です']
    }
});

module.exports = mongoose.model('User', userSchema);