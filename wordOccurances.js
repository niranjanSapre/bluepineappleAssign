let f = require('fs');
f.readFile('a.txt',(err,content)=>{
if(err)
{
    throw err;
}
else{
    let cnt=0;
    let arr=[];
    arr = content.toString().split(" ");
    for(let i=0; i<arr.length;i++)
    {
        if(arr[i]==='Arjuna'){
            cnt++
        }
    }
    console.log(cnt);
}
})