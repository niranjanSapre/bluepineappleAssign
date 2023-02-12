{
	testcase('a',true);
	testcase('b',true);
	testcase('A',true);
	testcase('1',false);
	testcase('$',false);
}
function charornot(a)
{
	if((a>='a' && a<='z')||(a>='A' && a<='Z'))
	{
		return true;
	}
	else
	{
		return false;
	}
}
function testcase(result,expectedResult)
{
	if(charornot(result)===expectedResult)
	{
		console.log("\nTest case successful");
	}
	else
	{
		console.log("\n Not successful");
	}
	
}
