const notes = require('express').Router();
const { readFromFile, readAndAppend,writeToFile} = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the notes
notes.get('/notes', (req, res) => {  
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));  
});

// POST Route 
notes.post('/notes', (req, res) => {  
  if (req.body) {
    const newNote = {
      title,
      text      
    } = req.body;
    //give note an id to handle show note method
    newNote.id = uuid();
    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding Note');
  }
});

// POST Route in Delete
notes.delete('/notes/:id', (req, res) => {    
  if (req.params.id) {
    readFromFile('./db/db.json')
    .then((data) => {
      // console.info(data);
      // to write json and not promise
      const list = JSON.parse(data);
      //console.info(list);
      for (let i = 0; i < list.length; i++) {
        if (list[i].id === req.params.id) {
          //delete this data from the array
          list.splice(i,1);          
        }        
      }
      console.info(list);
      return list;
    })
    .then((data)=>{
      //to write data and not promise to file
      const write = data;
      writeToFile('./db/db.json', write);
    });   
      res.send("success");
  }  
});

module.exports = notes;
