const router = require('express').Router();
const {Note} = require('../../models')
// const { readFromFile, readAndAppend,writeToFile} = require('../../helpers/fsUtils');
// const uuid = require('../../helpers/uuid');


router.get('/view',async (req,res)=>{

try {
  const noteData = await Note.findAll();

  const notes = noteData.map(note => note.get({plain:true}));

  res.render('notes', {
    notes,
    logged_in: req.session.logged_in
  });
    
} catch (error) {
  
}


});

// GET Route for retrieving all the notes
router.get('/', async (req, res) => {  
  try{
  const noteData = await Note.findAll();

  const notes = noteData.map(note => note.get({plain:true}));
 
  res.json(notes);
} catch(err) {
  res.error('Error in getting Note');
}

});

// POST Route 
router.post('/', async (req, res) => {  

  try {
    if (req.body) {
      const newNoteData = await Note.create({...req.body});
      const newNote = newNoteData.get({plain:true});
      if (newNote) {
        res.json(`Note added successfully 🚀`);
      }
    } else {
      res.error('Error in adding Note');
    }
  } catch (error) {
    res.status(500);
  }
  
});

// POST Route in Delete
router.delete('/:id', (req, res) => {    
  if (req.params.id) {
    // readFromFile('./db/db.json')
    // .then((data) => {
    //   // console.info(data);
    //   // to write json and not promise
    //   const list = JSON.parse(data);
    //   //console.info(list);
    //   for (let i = 0; i < list.length; i++) {
    //     if (list[i].id === req.params.id) {
    //       //delete this data from the array
    //       list.splice(i,1);          
    //     }        
    //   }
    //   console.info(list);
    //   return list;
    // })
  //   .then((data)=>{
  //     //to write data and not promise to file
  //     const write = data;
  //     // writeToFile('./db/db.json', write);
  //   });   
  //     res.send("success");
  }  
});

module.exports = router;
