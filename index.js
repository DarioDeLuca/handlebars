const express = require('express');
const app = express();
const port = 8080;
//Loads the handlebars module
const handlebars = require('express-handlebars');
//Sets our app to use the handlebars engine
app.set('view engine', 'hbs');


app.use(express.static('public'))
  

app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'planB',
    //new configuration parameter (dirname è una costante di node che fa riferimento al percorso assoluto del file di node -> cambia in base a dove è allocato nel compurter di chi lo apre)
    partialsDir: __dirname + '/views/partials/'
    }));
    
    

fakeApi = () => {
    return [
      {
        name: 'Katarina',
        lane: 'midlaner'
      },
      {
        name: 'Jayce',
        lane: 'toplaner'
      },
      {
        name: 'Heimerdinger',
        lane: 'toplaner'
      },
      {
        name: 'Zed',
        lane: 'midlaner'
      },
      {
        name: 'Azir',
        lane: 'midlaner'
      }
    ];
  }

  app.get('/', (req, res) => {
  res.render('main', {layout: 'index', suggestedChamps: fakeApi(), listExists: true});
  });


app.listen(port, () => console.log(`App listening to port ${port}`));