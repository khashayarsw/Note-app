const chalk = require("chalk");
const fs = require("fs");

// Add note function :
const addNote = (title , body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.find((note)=>note.title === title)
    if(!duplicateNotes){
        notes.push({
            title : title,
            body: body
        })
        saveNotes(notes);
            console.log(chalk.green.inverse('New note added!'))
        }else{
            console.log(chalk.red.inverse('note title taken!'))

    }
}

//Remove note function :
const removeNote = (title) => {
    const notes = loadNotes();
    const removeNotes = notes.filter((note)=>{
       return note.title !== title
    })
    removeNotes.length - notes.length < 0 ? console.log(chalk.green.inverse('Note removed!')) : console.log(chalk.red.inverse('Note note found!'))
    saveNotes(removeNotes);
}

//List notes functions:
const listNotes = () =>{
     let myList = loadNotes();
     myList.forEach((value) => {
        console.log(chalk.blue(value.title))
     });
    }

//Read note functions :
const readNote = (title) => {
    let myReadList = loadNotes();
    let readValue = myReadList.find((val)=>{
        return val.title === title
    }) 
    if(!readValue){
        console.log(chalk.red.inverse('not such title found!'))
    }else{
        console.log("title: " + readValue.title);
        console.log("body: " + readValue.body);
    }
}

//Save note functions :
const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

//Load note function :
const loadNotes =()=>{
    try{
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON) 
    }catch(e){
        return []
    }
}
module.exports = {
    addNote: addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
}