require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const workoutRoutes=require('./routes/workouts')
const app=express()

app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log('connected to db and listening on port',process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })
app.use('/api/workouts',workoutRoutes)
