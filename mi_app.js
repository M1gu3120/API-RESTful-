const express = require('express');
const routerApi = require('./routes/index');
const app = express();
const port = 4000;
const { logErrors, errorHandler , boomerrorHandler} = require('./middlewares/errorHandler')
app.use(express.json());

app.get('/' , (req , res) =>{
  res.send('El server esta corriendo exitosamente es http://localhost:4000')

});

routerApi(app);

app.use(logErrors);
app.use(boomerrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('Mi port' + port);


});




