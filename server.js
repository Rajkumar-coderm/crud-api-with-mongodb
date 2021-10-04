const app=require('./app')
const mongoose=require('mongoose');

mongoose.connect(process.env.Url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Database connected......");
}).catch(()=>{
    console.log("Connection filede...... ");
})


const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`server Runiing on Port  ${PORT}`);
});