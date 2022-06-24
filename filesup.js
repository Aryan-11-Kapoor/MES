//npm install express-fileupload

var express=require("express")

var app= express()
var fileupload= require("express-fileupload")
app.use(fileupload());
app.post('/upload',function(req,res){
    if(!req.files||req.files.length==0)
    return res.status(400).send("No file to upload")
    var sampleFile= req.files.sampleFile;
    sampleFile.mv("./files/"+sampleFile.name,function(err){
        if(err)
        return req.statusCode(500).send(err)
        res.send("File"+sampleFile.name+"Uploaded")
    })
})
app.get("/",function(req,res){
    
    res.sendFile(__dirname+'/index.html')
    })
app.listen(3000,function(){
    console.log("Server is up and running")
})