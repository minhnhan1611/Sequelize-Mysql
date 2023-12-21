const router = require('./routers/root.router');
const express = require('express');
const app = express();
const port = 3000;

// chuyển req, res về dạng json để tiện thao tác
app.use(express.json());

// sử dụng router
app.use(router);

// http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

// setup sequelize
const { sequelize } = require("./model/index");
sequelize.sync({ alter: true })