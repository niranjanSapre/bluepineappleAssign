	let n,i; 
	let a;
		perfectNumber(6);
		perfectNumber(7);
		perfectNumber(28);
		perfectNumber(23);
		perfectNumber(234235);
		perfectNumber(2341);
		perfectNumber(611);
function perfectNumber(a)
{
	let i,j,sum=0;
		for(j=1;j<a;j++)
		{
			if((a%j)==0)
			{
				sum=sum+j;
			}
		}
		if(sum==a)
		{
			let flag=1;
			testcase(flag,1);
		}
		else
		{
			let flag=0;
			testcase(flag,0);
		}
 	
}
function testcase(result,Expectedresult)
{
	if(result==Expectedresult)
	{
		console.log("Test successful");
	}
	else
	{
		console.log("Not Successful");
	}
}