let f = require('fs');
f.readFile('a.txt',(err,content)=>{
    dict={'Arjuna':6,'for':7,'Pandavas':16};
if(err)
{
    throw err;
}
else{
    let cnt=0;
    let arr=[];
    let j=0;
    arr = content.toString().split(" ");
    for(j in dict){ 
    for(let i=0; i<arr.length;i++)
    { 
        if(arr[i]===j){
            cnt++
        }
    }
    testcase(cnt,dict[j]);
    }
}
})
function testcase(result,expectedResult)
{
    if(result==expectedResult)
    {
        console.log("Test Case Successful");
    }
    else
    {
        console.log("Test Case not Successful");
    }
}