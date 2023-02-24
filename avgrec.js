let arr=[1,2,3,4,5]
function arrsum(arr1,l)
{
    if(l==0)
    {
        return arr1[0];
    }
    else
    {
        return arr1[l]+arrsum(arr1,l=l-1);
    }
}
let sum = arrsum(arr,arr.length-1);
console.log("Sum is "+sum)
console.log("Average is "+sum/arr.length);
