#include<stdio.h>
void testcase(int actual_hrs,int actual_minutes, int result_hrs,int result_mins);
void faultyClock(int hh,int mm, int y, int result_hrs,int result_mins);
int main()
{ 
	faultyClock(2,40,40,1,20);
}
void faultyClock(int hh,int mm, int y, int result_hrs,int result_mins)
{
	int actual_minutes=0,total_minutes,actual_hrs=0,hhh;
	y=y*hh;
	hhh=hh*60;
	total_minutes = hhh+mm;
	actual_minutes = total_minutes-y;
	while(actual_minutes<60);
	{
		actual_minutes=actual_minutes%60;
		actual_hrs++;
	}
	testcase(actual_hrs,actual_minutes,result_hrs,result_mins);
}
void testcase(int actual_hrs,int actual_minutes, int result_hrs,int result_mins)
{
	if((result_hrs==actual_hrs)&&(result_mins==actual_minutes))
	{
		printf("\nTest Case Successful");
	}
	else
	{
		printf("\nTest Case not Successful");
	}
}
