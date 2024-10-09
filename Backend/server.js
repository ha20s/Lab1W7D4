const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express()

const port = 1112

const Book = require('./models/Books.js')



main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Db Connected")
}


app.get("/books", (req, res)=>{
    const user = new Book({
        name :  "book1",
        author : "ahmed@",
        editionNumber: '',
        publicDate : "2024-10-01",
        isAvailable : true, 
        price: '43',
        languages : ['d' ,'c'],
        classification : 'stories'
    })
    user.save()
    .then((result)=> {
        res.send(result)
    })
})


app.post("/books", (req, res) => {
    const newBook = new Book({
        name : req.body.name ,
        author : req.body.author,
        editionNumber: req.body.editionNumber,
        publicDate : req.body.publicDate,
        isAvailable : req.body.isAvailable, 
        price: req.body.price,
        languages : req.body.languages || [],
        classification : req.body.classification
    });  

    newBook.save()
        .then(result => res.send(result))
});




app.listen(port, () => {

console.log(`Example app listening on port ${port}`)

})

app.use(express.json());