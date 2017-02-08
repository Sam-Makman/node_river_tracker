const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient
var fileUpload = require('express-fileupload');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(fileUpload());
var db

MongoClient.connect('mongodb://dbuser:dbpassword@ds011495.mlab.com:11495/star-wars-quotes', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3001, () => {
    console.log('listening on 3001')
  })
})


app.get('/api/rivers', (req, res) => {
  db.collection('rivers').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.json(result);
  })
})

app.post('/api/rivers', (req, res) => {
  console.log("post rivers");
  var img;

  if(!req.files.file){
    console.log("files not found");
    res.send("No files uploaded");
    return;
  }

  console.log("files found");
  img = req.files.file;
  var imgPath = '/assets/' + img.name;
  let data = req.body;
  data.path = imgPath;
  
  img.mv('./public' + imgPath, (err) => {
    if(err){
      res.status(500);
    }else{
      res.append('file', "File Uploaded");
    }
  });


  console.log(data);
  db.collection('rivers').save(data, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })


})

app.put('/api/rivers', (req, res) => {
  db.collection('rivers')
  .findOneAndUpdate({name: 'Yoda'}, {
    $set: {
      name: req.body.name,
      section: req.body.section,
      details: req.body.details
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.json(result)
  })
})

app.delete('/api/rivers', (req, res) => {
  db.collection('rivers').findOneAndDelete({name: req.body.name},
  (err, result) => {
    if (err) return res.send(500, err)
    res.send('A river got deleted')
  })
})

app.post('/api/upload', (req, res) => {

})
