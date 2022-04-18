const express=require("express")
const app=express()
const books=require("./books")
const authors=require("./author")
const library=require("./libraries")

 

app.get("/books",(req,res)=>{

    return res.send(books())

})

app.get("/authors",(req,res)=>{

    return res.send(authors())

})

app.get("/library",(req,res)=>{

    return res.send(library())

})



app.listen(2004,()=>{
    console.log("listen on port 2004")
})