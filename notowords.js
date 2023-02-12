        //let n = 12345;
        notowords(12345);
        notowords(0);
        notowords(9029345);
        notowords(123906789);
        notowords(98765432);
        function notowords(n)
        {
        let arrofDigits=[];
        let i=0;
        let cntofDigits = 0;
        let j=0;
        if(n==0)
            console.log("zero"); 
        while(n>0)
        {
            arrofDigits[i++] = Math.trunc(n%10);
            n = Math.trunc(n/10);
            cntofDigits++;
        }
        for(j=i-1; j>=0; j--)
        {
            let ch;
            if((cntofDigits==2 && arrofDigits[j]==1) || (cntofDigits==5 && arrofDigits[j]==1) || (cntofDigits==7 && arrofDigits[j]==1) || (cntofDigits==9 && arrofDigits[j]==1))
            {
                ch = Math.trunc(arrofDigits[j]*10)+Math.trunc(arrofDigits[j-1]); 
                switch(ch)
                {
                    case 10:
                        console.log("ten ");
                        break;
                    case 11:
                        console.log("eleven ");
                        break;
                    case 12:
                        console.log("twelve ");
                        break;
                    case 13:
                        console.log("thirteen ");
                        break;
                    case 14:
                        console.log("fourteen ");
                        break;
                    case 15:
                        console.log("fifteen ");
                        break;
                    case 16:
                        console.log("sixteen ");
                        break;
                    case 17:
                        console.log("seventeen ");
                        break;
                    case 18:
                        console.log("eighteen ");
                        break;
                    case 19:
                        console.log("nineteen ");
                        break;
                }
                if(cntofDigits==5)
                {
                    console.log("thousand ");
                    cntofDigits=cntofDigits-2;
                    j--;
                    continue;
                }
                else if(cntofDigits==7)
                {
                    console.log("lakh ");
                    cntofDigits=cntofDigits-2;
                    j--;
                    continue;
                }
                else if(cntofDigits==9)
                {
                    console.log("crore ");
                    cntofDigits=cntofDigits-2;
                    j--;
                    continue;
                }
                else
                    break; 
            }
            else
            {
                ch = arrofDigits[j];
            }
            switch(cntofDigits)
            {
                case 10:
                    switch(ch)
                    {
                        case 1:
                            console.log("one arab ");
                            break;
                        case 2:
                            console.log("two arab ");
                            break;
                        case 3:
                            console.log("three arab ");
                            break;
                        case 4:
                            console.log("four arab ");
                            break;
                        case 5:
                            console.log("five arab ");
                            break;
                        case 6:
                            console.log("six arab ");
                            break;
                        case 7:
                            console.log("seven arab ");
                            break;
                        case 8:
                            console.log("eight arab ");
                            break;
                        case 9:
                            console.log("nine arab ");
                            break;
                    }
                    cntofDigits--;
                    break;
    
                case 9:
                    switch(ch)
                    {
                        case 2:
                            console.log("twenty ");
                            break;
                        case 3:
                            console.log("thirty ");
                            break;
                        case 4:
                            console.log("fourty ");
                            break;
                        case 5:
                            console.log("fifty ");
                            break;
                        case 6:
                            console.log("sixty ");
                            break;
                        case 7:
                            console.log("seventy ");
                            break;
                        case 8:
                            console.log("eighty ");
                            break;
                        case 9:
                            console.log("ninety ");
                            break;
                    }
                    if(arrofDigits[j]!=0 && arrofDigits[j-1]==0)
                        console.log("crore ");
                    cntofDigits--;
                    break;
    
                case 8:
                    switch(ch)
                    {
                        case 1:
                            console.log("one crore ");
                            break;
                        case 2:
                            console.log("two crore ");
                            break;
                        case 3:
                            console.log("three crore ");
                            break;
                        case 4:
                            console.log("four crore ");
                            break;
                        case 5:
                            console.log("five crore ");
                            break;
                        case 6:
                            console.log("six crore ");
                            break;
                        case 7:
                            console.log("seven crore ");
                            break;
                        case 8:
                            console.log("eight crore ");
                            break;
                        case 9:
                            console.log("nine crore ");
                            break;
                    }
                    cntofDigits--;
                    break;
                
                case 7:
                    switch(ch)
                    {
                        case 2:
                            console.log("twenty ");
                            break;
                        case 3:
                            console.log("thirty ");
                            break;
                        case 4:
                            console.log("fourty ");
                            break;
                        case 5:
                            console.log("fifty ");
                            break;
                        case 6:
                            console.log("sixty ");
                            break;
                        case 7:
                            console.log("seventy ");
                            break;
                        case 8:
                            console.log("eighty ");
                            break;
                        case 9:
                            console.log("ninety ");
                            break;
                    }
                    if(arrofDigits[j]!=0 && arrofDigits[j-1]==0)
                        console.log("lakh ");
                    cntofDigits--;
                    break;
    
                case 6:
                    switch(ch)
                    {
                        case 1:
                            console.log("one lakh ");
                            break;
                        case 2:
                            console.log("two lakh ");
                            break;
                        case 3:
                            console.log("three lakh ");
                            break;
                        case 4:
                            console.log("four lakh ");
                            break;
                        case 5:
                            console.log("five lakh ");
                            break;
                        case 6:
                            console.log("six lakh ");
                            break;
                        case 7:
                            console.log("seven lakh ");
                            break;
                        case 8:
                            console.log("eight lakh ");
                            break;
                        case 9:
                            console.log("nine lakh ");
                            break;
                    }
                    cntofDigits--;
                    break;
    
                case 5:
                    switch(ch)
                    {
                        case 2:
                            console.log("twenty ");
                            break;
                        case 3:
                            console.log("thirty ");
                            break;
                        case 4:
                            console.log("fourty ");
                            break;
                        case 5:
                            console.log("fifty ");
                            break;
                        case 6:
                            console.log("sixty ");
                            break;
                        case 7:
                            console.log("seventy ");
                            break;
                        case 8:
                            console.log("eighty ");
                            break;
                        case 9:
                            console.log("ninety ");
                            break;
                    }
                    if(arrofDigits[j]!=0 && arrofDigits[j-1]==0)
                        console.log("thousand ");
                    cntofDigits--;
                    break;
    
                case 4:
                    switch(ch)
                    {
                        case 1:
                            console.log("one thousand ");
                            break;
                        case 2:
                            console.log("two thousand ");
                            break;
                        case 3:
                            console.log("three thousand ");
                            break;
                        case 4:
                            console.log("four thousand ");
                            break;
                        case 5:
                            console.log("five thousand ");
                            break;
                        case 6:
                            console.log("six thousand ");
                            break;
                        case 7:
                            console.log("seven thousand ");
                            break;
                        case 8:
                            console.log("eight thousand ");
                            break;
                        case 9:
                            console.log("nine thousand ");
                            break;
                    }
                    cntofDigits--;
                    break;
    
                case 3:
                    switch(ch)
                    {
                        case 1:
                            console.log("one hundred ");
                            break;
                        case 2:
                            console.log("two hundred ");
                            break;
                        case 3:
                            console.log("three hundred ");
                            break;
                        case 4:
                            console.log("four hundred ");
                            break;
                        case 5:
                            console.log("five hundred ");
                            break;
                        case 6:
                            console.log("six hundred ");
                            break;
                        case 7:
                            console.log("seven hundred ");
                            break;
                        case 8:
                            console.log("eight hundred ");
                            break;
                        case 9:
                            console.log("nine hundred ");
                            break;
                    }
                    if(arrofDigits[j-1]!=0 || arrofDigits[j-2]!=0)
                        console.log("and ");
                    cntofDigits--;
                    break;
    
                case 2:
                    switch(ch)
                    {
                        case 2:
                            console.log("twenty ");
                            break;
                        case 3:
                            console.log("thirty ");
                            break;
                        case 4:
                            console.log("fourty ");
                            break;
                        case 5:
                            console.log("fifty ");
                            break;
                        case 6:
                            console.log("sixty ");
                            break;
                        case 7:
                            console.log("seventy ");
                            break;
                        case 8:
                            console.log("eighty ");
                            break;
                        case 9:
                            console.log("ninety ");
                            break;
                    }
                    cntofDigits--;
                    break;
    
                case 1:
                    switch(ch)
                    {
                        case 1:
                            console.log("one");
                            break;
                        case 2:
                            console.log("two");
                            break;
                        case 3:
                            console.log("three");
                            break;
                        case 4:
                            console.log("four");
                            break;
                        case 5:
                            console.log("five");
                            break;
                        case 6:
                            console.log("six");
                            break;
                        case 7:
                            console.log("seven");
                            break;
                        case 8:
                            console.log("eight");
                            break;
                        case 9:
                            console.log("nine");
                            break;
                    }
            }
        } 
    } 