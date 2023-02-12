#include<stdio.h>

int main()
{
    long long int n;
    printf("\nEnter number to convert : ");
    scanf("%lld",&n);
    int arrofDigits[15];
    int i = 0;
    int cntofDigits = 0;
    int j;
    if(n==0)
        printf("zero");
    while(n>0)
    {
        arrofDigits[i++] = n%10;
        n = n/10;
        cntofDigits++;
    }
    for(j=i-1; j>=0; j--)
    {
        int ch;
        if((cntofDigits==2 && arrofDigits[j]==1) || (cntofDigits==5 && arrofDigits[j]==1) || (cntofDigits==7 && arrofDigits[j]==1) || (cntofDigits==9 && arrofDigits[j]==1))
        {
            ch = arrofDigits[j]*10+arrofDigits[j-1];  
            switch(ch)
            {
                case 10:
                    printf("ten ");
                    break;
                case 11:
                    printf("eleven ");
                    break;
                case 12:
                    printf("twelve ");
                    break;
                case 13:
                    printf("thirteen ");
                    break;
                case 14:
                    printf("fourteen ");
                    break;
                case 15:
                    printf("fifteen ");
                    break;
                case 16:
                    printf("sixteen ");
                    break;
                case 17:
                    printf("seventeen ");
                    break;
                case 18:
                    printf("eighteen ");
                    break;
                case 19:
                    printf("nineteen ");
                    break;
            }
            if(cntofDigits==5)
            {
                printf("thousand ");
                cntofDigits=cntofDigits-2;
                j--;
                continue;
            }
            else if(cntofDigits==7)
            {
                printf("lakh ");
                cntofDigits=cntofDigits-2;
                j--;
                continue;
            }
            else if(cntofDigits==9)
            {
                printf("crore ");
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
                        printf("one arab ");
                        break;
                    case 2:
                        printf("two arab ");
                        break;
                    case 3:
                        printf("three arab ");
                        break;
                    case 4:
                        printf("four arab ");
                        break;
                    case 5:
                        printf("five arab ");
                        break;
                    case 6:
                        printf("six arab ");
                        break;
                    case 7:
                        printf("seven arab ");
                        break;
                    case 8:
                        printf("eight arab ");
                        break;
                    case 9:
                        printf("nine arab ");
                        break;
                }
                cntofDigits--;
                break;

            case 9:
                switch(ch)
                {
                    case 2:
                        printf("twenty ");
                        break;
                    case 3:
                        printf("thirty ");
                        break;
                    case 4:
                        printf("fourty ");
                        break;
                    case 5:
                        printf("fifty ");
                        break;
                    case 6:
                        printf("sixty ");
                        break;
                    case 7:
                        printf("seventy ");
                        break;
                    case 8:
                        printf("eighty ");
                        break;
                    case 9:
                        printf("ninety ");
                        break;
                }
                if(arrofDigits[j]!=0 && arrofDigits[j-1]==0)
                    printf("crore ");
                cntofDigits--;
                break;

            case 8:
                switch(ch)
                {
                    case 1:
                        printf("one crore ");
                        break;
                    case 2:
                        printf("two crore ");
                        break;
                    case 3:
                        printf("three crore ");
                        break;
                    case 4:
                        printf("four crore ");
                        break;
                    case 5:
                        printf("five crore ");
                        break;
                    case 6:
                        printf("six crore ");
                        break;
                    case 7:
                        printf("seven crore ");
                        break;
                    case 8:
                        printf("eight crore ");
                        break;
                    case 9:
                        printf("nine crore ");
                        break;
                }
                cntofDigits--;
                break;
            
            case 7:
                switch(ch)
                {
                    case 2:
                        printf("twenty ");
                        break;
                    case 3:
                        printf("thirty ");
                        break;
                    case 4:
                        printf("fourty ");
                        break;
                    case 5:
                        printf("fifty ");
                        break;
                    case 6:
                        printf("sixty ");
                        break;
                    case 7:
                        printf("seventy ");
                        break;
                    case 8:
                        printf("eighty ");
                        break;
                    case 9:
                        printf("ninety ");
                        break;
                }
                if(arrofDigits[j]!=0 && arrofDigits[j-1]==0)
                    printf("lakh ");
                cntofDigits--;
                break;

            case 6:
                switch(ch)
                {
                    case 1:
                        printf("one lakh ");
                        break;
                    case 2:
                        printf("two lakh ");
                        break;
                    case 3:
                        printf("three lakh ");
                        break;
                    case 4:
                        printf("four lakh ");
                        break;
                    case 5:
                        printf("five lakh ");
                        break;
                    case 6:
                        printf("six lakh ");
                        break;
                    case 7:
                        printf("seven lakh ");
                        break;
                    case 8:
                        printf("eight lakh ");
                        break;
                    case 9:
                        printf("nine lakh ");
                        break;
                }
                cntofDigits--;
                break;

            case 5:
                switch(ch)
                {
                    case 2:
                        printf("twenty ");
                        break;
                    case 3:
                        printf("thirty ");
                        break;
                    case 4:
                        printf("fourty ");
                        break;
                    case 5:
                        printf("fifty ");
                        break;
                    case 6:
                        printf("sixty ");
                        break;
                    case 7:
                        printf("seventy ");
                        break;
                    case 8:
                        printf("eighty ");
                        break;
                    case 9:
                        printf("ninety ");
                        break;
                }
                if(arrofDigits[j]!=0 && arrofDigits[j-1]==0)
                    printf("thousand ");
                cntofDigits--;
                break;

            case 4:
                switch(ch)
                {
                    case 1:
                        printf("one thousand ");
                        break;
                    case 2:
                        printf("two thousand ");
                        break;
                    case 3:
                        printf("three thousand ");
                        break;
                    case 4:
                        printf("four thousand ");
                        break;
                    case 5:
                        printf("five thousand ");
                        break;
                    case 6:
                        printf("six thousand ");
                        break;
                    case 7:
                        printf("seven thousand ");
                        break;
                    case 8:
                        printf("eight thousand ");
                        break;
                    case 9:
                        printf("nine thousand ");
                        break;
                }
                cntofDigits--;
                break;

            case 3:
                switch(ch)
                {
                    case 1:
                        printf("one hundred ");
                        break;
                    case 2:
                        printf("two hundred ");
                        break;
                    case 3:
                        printf("three hundred ");
                        break;
                    case 4:
                        printf("four hundred ");
                        break;
                    case 5:
                        printf("five hundred ");
                        break;
                    case 6:
                        printf("six hundred ");
                        break;
                    case 7:
                        printf("seven hundred ");
                        break;
                    case 8:
                        printf("eight hundred ");
                        break;
                    case 9:
                        printf("nine hundred ");
                        break;
                }
                if(arrofDigits[j-1]!=0 || arrofDigits[j-2]!=0)
                    printf("and ");
                cntofDigits--;
                break;

            case 2:
                switch(ch)
                {
                    case 2:
                        printf("twenty ");
                        break;
                    case 3:
                        printf("thirty ");
                        break;
                    case 4:
                        printf("fourty ");
                        break;
                    case 5:
                        printf("fifty ");
                        break;
                    case 6:
                        printf("sixty ");
                        break;
                    case 7:
                        printf("seventy ");
                        break;
                    case 8:
                        printf("eighty ");
                        break;
                    case 9:
                        printf("ninety ");
                        break;
                }
                cntofDigits--;
                break;

            case 1:
                switch(ch)
                {
                    case 1:
                        printf("one");
                        break;
                    case 2:
                        printf("two");
                        break;
                    case 3:
                        printf("three");
                        break;
                    case 4:
                        printf("four");
                        break;
                    case 5:
                        printf("five");
                        break;
                    case 6:
                        printf("six");
                        break;
                    case 7:
                        printf("seven");
                        break;
                    case 8:
                        printf("eight");
                        break;
                    case 9:
                        printf("nine");
                        break;
                }
        }
    }  
}
