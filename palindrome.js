{
	let str1;
	let n,i; 	
	let p;
	chkPalindrome("mom");
	chkPalindrome("101");
	chkPalindrome("malayalam");
	chkPalindrome("asd");
	chkPalindrome("a");
}

function chkPalindrome(str1)
{
	let x,i,j;
	x = str1.length-1;
	let str2='';
	for(let i=x;i>=0;i--)
    {
        //console.log(i);
        str2+=str1[i];
    }
	if(str1===str2)
	{
		let flag=1;
		testcase(flag,1)
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
