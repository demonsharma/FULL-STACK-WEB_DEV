const fs = require('fs')
fs.rename('index.txt','indexreademe.txt',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("File Renamed Successfully")
    }
})