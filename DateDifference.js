class DateDifference
{
        let dd1, mm1, yy1, dd2, mm2, yy2;
        while(true)
        {
            console.log("Enter start day : ");
            dd1=Integer.parseInt(br.readLine());
            console.log("Enter start month : ");
            mm1=Integer.parseInt(br.readLine());
            console.log("Enter start year : ");
            yy1=Integer.parseInt(br.readLine());
            let x = dc.isDateRight(dd1,mm1,yy1);
            if(x==1)
            {
                break;
            }    
            else
            {
                console.log("Enter valid Date!!!");
            }
        }
        while(true)
        {
            console.log("Enter end day : ");
            dd2=Integer.parseInt(br.readLine());
            console.log("Enter end month : ");
            mm2=Integer.parseInt(br.readLine());
            console.log("Enter end year : ");
            yy2=Integer.parseInt(br.readLine());
            let y = dc.isDateRight(dd1,mm1,yy1);
            if(y==1)
            {
                break;
            }    
            else
            {
                console.log("Enter valid Date!!!");
            }    
        }
        if(yy1>yy2)
        {
            console.log("Enter a date in which end year is greater than start year");
        }
        daysCalculator dcal = new daysCalculator();
        let startDays = dcal.sumDaysStartYear(dd1,mm1,yy1);
        let endDays = dcal.sumDaysEndYear(dd1,mm1,yy1,dd2,mm2,yy2);
        let daysBetweenYears = dcal.yearCount(yy1,yy2);
        let totalNoOfDays = (startDays+endDays+daysBetweenYears);
        if(yy1==yy2)
        {
            if(((yy1 % 4 == 0) && ((yy1 % 400 == 0) || (yy1%100 != 0))))
            {
                console.log(`Total Number of days between ${dd1}-${mm1}-${yy1} and ${dd2}-${mm2}-${yy2} are ${totalNoOfDays-366}`);
            }
            else
            {
                console.log(`Total Number of days between ${dd1}-${mm1}-${yy1} and ${dd2}-${mm2}-${yy2} are ${totalNoOfDays-365}`);
            }        
        }
        else
        {
            console.log(`Total Number of days between ${dd1}-${mm1}-${yy1} and ${dd2}-${mm2}-${yy2} are ${totalNoOfDays}`);
        }
    }
}
class dateChecker
{
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
}
class daysCalculator
{
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
    sumDaysEndYear(a,b,c,f,g,h)
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
    yearCount(o, p)
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