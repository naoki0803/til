const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shellters');
const dogsRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin');

app.use('/shelters', shelterRoutes);
app.use('/dogs', dogsRoutes);
app.use('/admin', adminRoutes);

app.listen(3000, () => {
	console.log('Serverに接続しました');
});