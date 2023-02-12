#include<stdio.h>
#include<string.h>
void chkPalindrome(char str1[]);
void testcase(int result,int Expectedresult);
int main()
{
	char str1[100];
	int n,i; 	
	int p;
	chkPalindrome("mom");
	chkPalindrome("101");
	chkPalindrome("malayalam");
	chkPalindrome("asd");
	chkPalindrome("a");
}

void chkPalindrome(char str1[])
{
	int x,i,j;
	x = strlen(str1);
	char str2[x];
	strcpy(str2,str1);
	strrev(str2);
	if(strcmp(str1,str2)==0)
	{
		int flag=1;
		testcase(flag,1);
	}
	else
	{
			int flag=0;
		testcase(flag,0);
	}
	
}
void testcase(int result,int Expectedresult)
{
	if(result==Expectedresult)
	{
		printf("\nTest successful");
	}
	else
	{
		printf("\nNot Successful");
	}
}
