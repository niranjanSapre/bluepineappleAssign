    flipbit('a','c',2);
	flipbit('a','A',6);
	flipbit('a','e',3);
function flipbit(c,new_c,bit)
{
	let a=[];
	let i;
    new_c=new_c.charCodeAt(0);
    let num = c.charCodeAt(0);
    for(i=0;num>0;i++)    
	{    
		a[i]=Math.trunc(num%2);    
		num=num/2;    
	}    
	let f=bit;
	if(a[f-1]==1)
	{
		a[f-1]=0;	
	}	
	else
	{
		a[f-1]=1;
	}
	let decimal_n=0;
	let base =2;
	for(i=0;i<7;i++)
	{
		if(a[i]==1)
		{
			decimal_n+=Math.pow(base,i);
		}
	}
	testcase(new_c,decimal_n);
}
function testcase(expectedResult,result)
{
	if(expectedResult==result)
	{
		console.log("\nTest case successful");
	}
	else
	{
		console.log("\nTest case not successful");
	}
}
