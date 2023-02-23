let arr=[];
function apush(n)
{
    console.log("Pushing element 5");
    arr.push(n);
    size = arr.length
    for(let i=0;i<size;i++)
{
    console.log(arr[i]);
}
}
function apop()
{
    console.log("Poping last element");
    arr.pop();
    size = arr.length
    for(let i=0;i<size;i++)
{
    console.log(arr[i]);
}
}
function apeek()
{
    size = arr.length
    let peeked_element=arr[size-1];
    console.log("Peeked element is")
    console.log(peeked_element);
}
function aisExist(n)
{
    size = arr.length
    for(let i=0;i<size;i++)
    {
        if(arr[i]==n)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
apush(5);
apush(7);
apush(7);
apush(7);
apush(7);
apop();
apop();
apeek();
console.log("Checking if element exist",aisExist(5));
console.log("Checking if element exist",aisExist(2));
