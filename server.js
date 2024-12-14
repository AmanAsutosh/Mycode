// const { log } = require('console');
const express=require('express');
const app=express();
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('register.ejs');
})

app.post('/register',(req,res)=>{
    
        const newUser={fname:req.body.fName,lname:req.body.lName,email:req.body.email}
        const data={
       f:newUser.fname,l:newUser.lname,e:newUser.email
        }
        res.render('success.ejs',data);
    
});

app.listen(8080,()=>{
    console.log("server connected");
})