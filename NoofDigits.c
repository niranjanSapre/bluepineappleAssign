#include<stdio.h>
#include<Math.h>
void testcase(int result,int ExpectedResult);
void NumberOfDigits(int num,int ExpectedResult);
void NumberOfDigits(int num,int ExpectedResult) 
{
    int count = 0;
    if(num==0)
        count =1;
    else if(num<0)
        num = -num;
    while(num>0) 
    {
        num = num/10;
        count++;
    }
    testcase(count,ExpectedResult);
}
void main()
{
    NumberOfDigits(1234,4);
    NumberOfDigits(12345,5);
    NumberOfDigits(1234567890,10);
    NumberOfDigits(1,1);
    NumberOfDigits(-1234,4);
}
void testcase(int result,int ExpectedResult)
{
    if(result==ExpectedResult)
    {
        printf("\nTest Case Successful");
    }
    else
    {
        printf("\nTest Case not Successful");
    }
}
