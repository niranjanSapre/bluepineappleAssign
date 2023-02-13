calculation(29,09,2000,30,09,2000,1);
calculation(12,02,2023,14,02,2024,367);
calculation(12,02,2023,14,02,2024,360);
function calculation(dd1,mm1,yy1,dd2,mm2,yy2,expectedResult)
{
        if(yy1>yy2)
        {
            console.log("Enter a date in which end year is greater than start year");
        }
        let startDays = sumDaysStartYear(dd1,mm1,yy1);
        let endDays = sumDaysEndYear(dd1,mm1,yy1,dd2,mm2,yy2);
        let daysBetweenYears = yearCount(yy1,yy2);
        let totalNoOfDays = (startDays+endDays+daysBetweenYears);
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
            testcase((totalNoOfDays),expectedResult);
        }
    }
    function isDateRight(a,b,c)
        {
	        let flag;
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

    function sumDaysStartYear(a,b, c)
        {
	        let sum=0;
            let currentDay=a;
            let currentMonth=b;
            if ((c % 4 == 0) && ((c % 400 == 0) || (c%100 != 0)))
            {
                for(let i=currentMonth;i<=12;i++)
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
                for(let i=currentMonth;i<=12;i++)
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
    function sumDaysEndYear(a,b,c,f,g,h)
    {
        let endYearDays = f;
        let sum=endYearDays;
        if ((h % 4 == 0) && ((h % 400 == 0) || (h%100 != 0)))
            {
                for(let i=1;i<g;i++)
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
                for(let i=1;i<g;i++)
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
    function yearCount(o, p)
    {
        let sum=0;
        for(let i=(o+1);i<p;i++)
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
    function testcase(result,expectedResult)
    {
        if(result==expectedResult)
        {
            console.log("Test Case Successful");
        }
        else
        {
            console.log("Test Case not Successful");
        }
    }