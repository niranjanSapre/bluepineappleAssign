#include<stdio.h>
 void testcase(int result,int Expectedresult);
int leapYearCalc(int y);
int isDateRight(int a,int b,int c);
int main()
{
int  i,x,y,z;
int dd=29;
int mm=9;
int yy=2000;
x=isDateRight(dd,mm,yy);
if (x==1)
{
	printf("Valid date");
	printf("It is a leap year but not a leap day");
    x=leapYearCalc(yy);
    if (x == 1) 
    {
        if (mm==2 && dd==29)
        {
            int flag=1;
            testcase(flag,1);
        }
    }
    else
    {
        int flag=0;
        testcase(flag,0);
    }
}
else 
{
    printf("Invalid date");
}
    return 0;
}
int leapYearCalc(int y)
{
    int  flag;
    if ((y % 4 == 0) && ((y % 400 == 0) || (y%100 != 0)))
    {
      flag = 1;
    }
    else 
    {
      flag = 0;
    }
   return flag;
}
int isDateRight(int a,int b,int c)
{
	int  flag;
 if(b==2)
 {
  if(a>=1 && a<=29)
  {
      flag = 1;
  }
  else
  {
      flag = 0;
  }
 }
 else if ((b==1)||(b==3)||(b==5)||(b==7)||(b==8)||(b==10)||(b==12))
 {
  if(a>=1 && a<=31)
  {
      flag = 1;
  }
  else
  {
      flag = 0;
  } 
 }
  else
 {
  if(a>=1 && a<=30)
  {
      flag = 1;
  }
  else
  {
      flag = 0;
  } 
 }
 return flag;
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
