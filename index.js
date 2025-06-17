
import mongoose from 'mongoose';
const app = express()
const PORT = 3000

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));


app.get("/", (req,res)=>{
    res.send("This is from Node JS but with Nodemon")
})

app.listen(PORT, ()=> {
    console.log("Hello Ladies")
})

// pyaephyo
// 8yvy92oOtU9zp2fO