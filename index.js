import express from 'express';
import axios from 'axios';
const app=express();
const port=3000;
app.use(express.static("public"));
app.get("/",async (req,res)=>
{
    try
    {
        const result=await axios.get("https://secrets-api.appbrewery.com/random");
        res.render("index.ejs",
            {
                secret:result.data.secret,
                user:"Ashish",
            });
    }
    catch(error)
    {
        console.log(error);
    }
})

app.listen(port,()=>
{
    console.log("server running");
})
