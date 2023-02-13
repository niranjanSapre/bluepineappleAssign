	let r1,r2,c1,c2;
	r1=r2=c1=c2=2;
		if(c1==r2)
	{
		let i,j;
	 	let M1 = [[1,2],[1,2]];
		let M2 = [[1,2],[1,2]];
		
		for(i=0;i<r1;i++)
		{
			for(j=0;j<c1;j++)
			{
				console.log("\t%d",M1[i][j]);
			}
			console.log("\n");
		}
		for(i=0;i<r2;i++)
		{
			for(j=0;j<c2;j++)
			{
				console.log("\t%d",M2[i][j]);
			}
			console.log("\n");
		}
		
		/*console.log("\nEnter matrix elements of matrix B\n");
		for(i=0;i<r2;i++)
		{
			for(j=0;j<c2;j++)
			{
				console.log("\nEnter element B[%d][%d] : ",i,j);
				scanf("%d",&M2[i][j]);
			}
		}*/
		matrixMultiplication(r1,c1,r2,c2,M1,M2);
	}
	else
	{
		console.log("\nMatrix multiplication not possible");
	}
function matrixMultiplication(r1,c1,r2,c2,M1,M2)
{
	if(c1==r2)
	{
		let i,j,k;
		let M3=[[],[]];
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
		let expectedResult = [[3,6],[3,6]];
		TestCase(M3,expectedResult);
	}
}

function TestCase(M3,expectedResult) 
{
	let i,j,flag=0;
	for(i=0; i<2; i++) 
	{
		for(j=0; j<2; j++)
		{
			if(M3[i][j]!=expectedResult[i][j])
			{
				flag=1;
				console.log("Test case failed");
			}
		}
	}
	if(flag==0)
		console.log("Test case successful");
}