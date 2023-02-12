#include<stdio.h>
void perfectNumber(int a);
void testcase(int result,int Expectedresult);
int main()
{	
    int n,i; 
	
    int a;
		perfectNumber(6);
		perfectNumber(7);
		perfectNumber(28);
		perfectNumber(23);
		perfectNumber(234235);
		perfectNumber(2341);
		perfectNumber(611);
}
void perfectNumber(int a)
{
	
    int i,j,sum=0;
		for(j=1;j<a;j++)
		{
			if((a%j)==0)
			{
				sum=sum+j;
			}
		}
		if(sum==a)
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
