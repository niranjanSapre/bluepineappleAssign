NumberOfDigits(1234,4);
NumberOfDigits(12345,5);
NumberOfDigits(1234567890,10);
NumberOfDigits(1,1);
NumberOfDigits(-1234,4);
function NumberOfDigits(num,ExpectedResult) 
{
    let count=0;
    if(num==0)
        count =1;
    else if(num<0)
        num = -num;
    while(num>0) 
    {
        num = Math.trunc(num/10);
        count++;
    }
    testcase(count,ExpectedResult);
}
function testcase(result,ExpectedResult)
{
    if(result===ExpectedResult)
    {
        console.log("\nTest Case Successful");
    }
    else
    {
        console.log("\nTest Case not Successful");
    }
}
