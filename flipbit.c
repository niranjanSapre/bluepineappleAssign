#include<stdio.h>
#include<string.h>
#include<math.h>
void testcase(char expectedResult, char result);
void flipbit(char c, char new_c,int bit);
int main()
{
	flipbit('a','c',2);
	flipbit('a','A',6);
	flipbit('a','e',3);
}
void flipbit(char c,char new_c,int bit)
{
	int a[100];
	int i;
    int num = c;
    for(i=0;num>0;i++)    
	{    
		a[i]=num%2;    
		num=num/2;    
	}        
	int f=bit;
	if(a[f-1]==1)
	{
		a[f-1]=0;	
	}	
	else
	{
		a[f-1]=1;
	}
	int decimal_n=0;
	double base =2;
	for(i=0;i<7;i++)
	{
		if(a[i]==1)
		{
			decimal_n+=pow(base,i);
		}
	}
	testcase(new_c,decimal_n);
}
void testcase(char expectedResult, char result)
{
	if(expectedResult==result)
	{
		printf("\nTest case successful");
	}
	else
	{
		printf("\nTest case not successful");
	}
}
