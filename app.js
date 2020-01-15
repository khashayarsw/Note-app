const chalk = require("chalk");
const yargs = require("yargs");
const getNote = require("./functions.js");

//Customize yargs version:
 yargs.version("1.0.0");

 //Create add command:
 yargs.command({
     command: "add",
     describe: "Add a new note",
     builder:{
         title:{
             describe: "Note title",
             demandOption:true,
             type: "string"
              },
        body:{
            describe: "Your text",
            demandOption:true,
            type: "string"
        }
     },
     handler:(argv)=>{
        getNote.addNote(argv.title,argv.body)
     }
 })
 //Create remove command :
 yargs.command({
     command: "remove",
     describe:"Remove a note",
     builder:{
        title:{
            describe: "Note title",
            demandOption:true,
            type: "string"
             }
    },
     handler:(argv)=>{
         getNote.removeNote(argv.title);
     }
 })
 //List command:
 yargs.command({
    command: "list",
    describe:"List a note",
    handler:()=>{
       getNote.listNotes();
    }
})
//Read command:
yargs.command({
    command: "read",
    describe:"Read a note",
    builder:{
        title:{
            describe: "Note title",
            demandOption:true,
            type: "string"
             }
    },
    handler:(argv)=>{
        getNote.readNote(argv.title);
    }
})
yargs.parse();

