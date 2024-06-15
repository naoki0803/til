const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

userSchema.statics.findAndValidate = async function (username, password) {
    const foundUser = await this.findOne({ username });
    const isValid = await bcrypt.compare(password, foundUser.password);
    return  isValid ? foundUser: false;
};

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next(); //isModifiedメソッドで、引数で指定したKeyの編集有無を確認する事ができる
    this.password = await bcrypt.hash(this.password, 12);  
});

module.exports = mongoose.model('User', userSchema);