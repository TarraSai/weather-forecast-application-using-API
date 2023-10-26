const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app=express();


//to design static page....
const staticpath=path.join(__dirname,'./public');
const templatepath=path.join(__dirname,'./template/views');
const navbarpath=path.join(__dirname,'./template/nav');

app.set('view engine','hbs');
app.set('views',templatepath);
hbs.registerPartials(navbarpath);


app.use(express.static(staticpath));  //static(we pass the path of the public file);

app.get("",(req,res)=>{
    res.render('index');
});
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
});
app.get("*",(req,res)=>{
    res.render("error");
    });


app.listen(3000,()=>{
    console.log("server is running..");
});