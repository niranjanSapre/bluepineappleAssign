import java.io.*;
import java.util.*;
import java.util.Date;
import java.text.SimpleDateFormat;

class DateDifference
{
    public static void main(String args[]) throws Exception
    {
        calculation(29,9,2000,30,9,2000,1);
        calculation(12,2,2023,14,2,2024,367);
        calculation(12,2,2023,14,2,2024,360);
    }
    public static void calculation(int dd1,int mm1,int yy1,int dd2,int mm2,int yy2,int expectedResult)
    {
        if(yy1>yy2)
        {
            System.out.println("Enter a date in which end year is greater than start year");
        }
        daysCalculator dcal = new daysCalculator();
        int startDays = dcal.sumDaysStartYear(dd1,mm1,yy1);
        int endDays = dcal.sumDaysEndYear(dd1,mm1,yy1,dd2,mm2,yy2);
        int daysBetweenYears = dcal.yearCount(yy1,yy2);
        int totalNoOfDays = (startDays+endDays+daysBetweenYears);
        if(yy1==yy2)
        {
            if(((yy1 % 4 == 0) && ((yy1 % 400 == 0) || (yy1%100 != 0))))
            {
                testcase((totalNoOfDays-366),expectedResult);
            }
            else
            {
                testcase((totalNoOfDays-365),expectedResult);
            }          
        }
        else
        {
            testcase(totalNoOfDays,expectedResult);
        }
    }
    public static void testcase(int result,int expectedResult)
    {
        if(result==expectedResult)
        {
            System.out.println("Test Case Successful");
        }
        else
        {
            System.out.println("Test Case not Successful");
        }
    }
}
class dateChecker
{
    public int isDateRight(int a,int b, int c)
        {
	        int flag;
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
}
class daysCalculator
{
    public int sumDaysStartYear(int a,int b, int c)
        {
	        int sum=0;
            int currentDay=a;
            int currentMonth=b;
            if ((c % 4 == 0) && ((c % 400 == 0) || (c%100 != 0)))
            {
                for(int i=currentMonth;i<=12;i++)
                {
                    if (i==2)
                    {
                        if(i==currentMonth)
                        {
                            sum = 29 - currentDay;
                        }
                        else
                        {
                            sum+=29;
                        }
                    }
                    else if ((i==1)||(i==3)||(i==5)||(i==7)||(i==8)||(i==10)||(i==12))
                    {
                        if(i==currentMonth)
                        {
                            sum = 31 - currentDay;
                        }
                        else
                        {
                            sum+=31;
                        }       
                    }
                    else
                    {
                        if(i==currentMonth)
                        {
                            sum = 30 - currentDay;
                        }
                        else
                        {
                            sum+=30;
                        }
                    }
                }
            }
            else
            {
                for(int i=currentMonth;i<=12;i++)
                {
                    if(i==2)
                    {
                        if(i==currentMonth)
                        {
                            sum = 28 - currentDay;
                        }
                        else
                        {
                            sum+=28;
                        }
                    }
                    else if ((i==1)||(i==3)||(i==5)||(i==7)||(i==8)||(i==10)||(i==12))
                    {
                        if(i==currentMonth)
                        {
                            sum = 31 - currentDay;
                        }
                        else
                        {
                            sum+=31;
                        }       
                    }
                    else
                    {
                        if(i==currentMonth)
                        {
                            sum = 30 - currentDay;
                        }
                        else
                        {
                            sum+=30;
                        } 
                    }
                }
            }
            return sum;
        }
    public int sumDaysEndYear(int a,int b, int c,int f, int g, int h)
    {
        int endYearDays = f;
        int sum=endYearDays;
        if ((h % 4 == 0) && ((h % 400 == 0) || (h%100 != 0)))
            {
                for(int i=1;i<g;i++)
                {
                    if (i==2)
                    {
                        sum += 29;
                    }
                    else if ((i==1)||(i==3)||(i==5)||(i==7)||(i==8)||(i==10)||(i==12))
                    {
                        sum += 31;       
                    }
                    else
                    {
                            sum += 30;
                    }
                }
            }
            else
            {
                for(int i=1;i<g;i++)
                {
                    if(i==2)
                    {
                        sum+=28;
                    }
                    else if ((i==1)||(i==3)||(i==5)||(i==7)||(i==8)||(i==10)||(i==12))
                    {
                        
                        sum+=31;       
                    }
                    else
                    {
                        sum+=30; 
                    }
                }
            }
            return sum;
    }
    public int yearCount(int o, int p)
    {
        int sum=0;
        for(int i=(o+1);i<p;i++)
        {
            if ((i % 4 == 0) && ((i % 400 == 0) || (i%100 != 0)))
            {
                sum+=366;
            }
            else
            {
                sum+=365;
            }
        }
        return sum;
    }
}   