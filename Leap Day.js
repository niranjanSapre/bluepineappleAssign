   let  i,x,y,z;
   let dd=29;
   let mm=9;
   let yy=2000;
   x=isDateRight(dd,mm,yy);
   if (x==1)
   {
       console.log("Valid date");
       console.log("It is a leap year but not a leap day");
       x=leapYearCalc(yy);
       if (x == 1) 
       {
           if (mm==2 && dd==29)
           {
               let flag=1;
               testcase(flag,1);
           }
       }
       else
       {
           let flag=0;
           testcase(flag,0);
       }
   }
   else 
   {
       console.log("Invalid date");
   }
       return 0;
   function leapYearCalc(y)
   {
       let  flag;
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
   function isDateRight(a,b,c)
   {
       let  flag;
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
   
    function testcase(result,Expectedresult)
   {
       if(result==Expectedresult)
       {
           console.log("\nTest successful");
       }
       else
       {
           console.log("\nNot Successful");
       }
   }
   