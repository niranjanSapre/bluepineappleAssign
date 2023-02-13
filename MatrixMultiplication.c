#include<stdio.h>
#include<string.h>
void matrixMultiplication(int r1,int c1,int r2,int c2,int M1[r1][c1],int M2[r2][c2]);
void TestCase(int M3[][2], int expectedResult[][2]); 
int main()
{
	int r1,r2,c1,c2;
	r1=r2=c1=c2=2;
		if(c1==r2)
	{
		int i,j;
	 	int M1[2][2] = {{1,2},{1,2}};
		int M2[2][2] = {{1,2},{1,2}};
		
		for(i=0;i<r1;i++)
		{
			for(j=0;j<c1;j++)
			{
				printf("\t%d",M1[i][j]);
			}
			printf("\n");
		}
		for(i=0;i<r2;i++)
		{
			for(j=0;j<c2;j++)
			{
				printf("\t%d",M2[i][j]);
			}
			printf("\n");
		}
		
		/*printf("\nEnter matrix elements of matrix B\n");
		for(i=0;i<r2;i++)
		{
			for(j=0;j<c2;j++)
			{
				printf("\nEnter element B[%d][%d] : ",i,j);
				scanf("%d",&M2[i][j]);
			}
		}*/
		matrixMultiplication(r1,c1,r2,c2,M1,M2);
	}
	else
	{
		printf("\nMatrix multiplication not possible");
	}
}
void matrixMultiplication(int r1,int c1,int r2,int c2,int M1[r1][c1],int M2[r2][c2])
{
	if(c1==r2)
	{
		int i,j,k;
		int M3[r1][c2];
		for(i=0;i<r1;i++)
		{
			for(j=0;j<c1;j++)
			{
				M3[i][j]=0;
				for(k=0;k<c2;k++)
				{
					M3[i][j]+=M1[i][k]*M2[k][j];
				}
			}
		}
		int expectedResult[2][2] = {{3,6},{3,6}};
		TestCase(M3,expectedResult);
	}
}

void TestCase(int M3[][2], int expectedResult[][2]) 
{
	int i,j,flag=0;
	for(i=0; i<2; i++) 
	{
		for(j=0; j<2; j++)
		{
			if(M3[i][j]!=expectedResult[i][j])
			{
				flag=1;
				printf("Test case failed");
			}
		}
	}
	if(flag==0)
		printf("Test case successful");
}
