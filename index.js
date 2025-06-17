import express from 'express'

const app = express()
const PORT = 3000

app.get("/", (req,res)=>{
    res.send("This is from Node JS")
})

app.listen(PORT, ()=> {
    console.log("Hello World")
})