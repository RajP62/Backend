const express=require("express")
const app=express()
const books=require("./book")


app.get("",(req,res)=>{

    return res.send("hello")

})

app.get("/books",(req,res)=>{

    return res.send(books())

})



app.listen(2004,()=>{
    console.log("listen on port 2004")
})