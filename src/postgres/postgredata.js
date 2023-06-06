const express = require('express')
const app = express()
const port = 3000
const merchants_model = require('./merchants_model')
app.use(express.json())
app.use(function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');

next();
});
app.get('/', (req, res) => {
merchants_model.getMerchants()
.then(response => {
res.status(200).send(response);
})
.catch(error => {
res.status(500).send(error);
})
})
app.post('/merchants', (req, res) => {
merchants_model.createMerchant(req.body)
.then(response => {
res.status(200).send(response);
})
.catch(error => {
res.status(500).send(error);
})
})
app.delete('/merchants/:id', (req, res) => {
merchants_model.deleteMerchant(req.params.id)
.then(response => {
res.status(200).send(response);
})
.catch(error => {
res.status(500).send(error);
})
})
app.listen(port, () => {
console.log(`App running on port ${port}.`)
})