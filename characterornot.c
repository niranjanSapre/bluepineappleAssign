#include<stdio.h>
#include<string.h>
void testcase(int result,int expectedResult);
int charornot(int a);
int main()
{
	testcase('a',1);
	testcase('b',1);
	testcase('A',1);
	testcase('1',0);
	testcase('$',0);
}
int charornot(int a)
{
	if((a>=65 && a<=90)||(a>=97 && a<=122))
	{
		return 1;
	}
	else
	{
		return 0;
	}
}
void testcase(int result,int expectedResult)
{
	if(charornot(result)==expectedResult)
	{
		printf("\nTest case successful");
	}
	else
	{
		printf("\n Not successful");
	}
	
}
