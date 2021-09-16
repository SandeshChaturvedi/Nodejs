
const app = require("./server");
const port = process.env.PORT || 3000;
app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

app.use(function(req, res) {
	          res.status(404).send({url: req.originalUrl + ' not found'})
});
