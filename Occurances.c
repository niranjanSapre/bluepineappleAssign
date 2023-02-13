#include<stdio.h>
#include<string.h>
void chkOccurance(char str[],int expected[]);
void testCase(int a[],int expected[]);
int main()
{
	char str[100];
	int expected1[]={1,1,1,1,1,1,1,1,1,1};
	chkOccurance("1234567890",expected1);
	int expected2[]={0,1,0,0,0,0,0,0,0,0};
	chkOccurance("1",expected2);
	int expected3[]={0,0,0,0,1,1,1,1,0,0};
	chkOccurance("7654",expected3);
}
void chkOccurance(char str[],int expected[])
{
	char x;
	int i,a[10]={0};
	for (i=0;i<strlen(str);i++)
	{
		x=str[i];
		if(x=='0')
		{
			a[0]++;
		}
		else if(x=='1')
		{
			a[1]++;
		}
		else if(x=='2')
		{
			a[2]++;
		}
		else if(x=='3')
		{
			a[3]++;
		}
		else if(x=='4')
		{
			a[4]++;
		}
		else if(x=='5')
		{
			a[5]++;
		}
		else if(x=='6')
		{
			a[6]++;
		}
		else if(x=='7')
		{
			a[7]++;
		}
		else if(x=='8')
		{
			a[8]++;
		}
		else if(x=='9')
		{
			a[9]++;
		}
		else 
		{
			printf("Invalid input");
		}
	}
	testCase(a,expected);
}
void testCase(int a[],int expected[])
{
	int i,flag=0;
	for(i=0; i<9; i++) 
	{
		if(a[i]!=expected[i])
		{
				flag=1;
				printf("\nTest case failed");
		}
	}
	if(flag==0)
		printf("\nTest case successful");
}
