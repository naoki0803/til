const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shellters');
const dogsRoutes = require('./routes/dogs');

app.use('/aaa', shelterRoutes);
app.use('/dogs', dogsRoutes);

app.listen(3000, () => {
	console.log('Serverに接続しました');
});