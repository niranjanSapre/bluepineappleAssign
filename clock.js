faultyClock(2,40,40,1,20);
function faultyClock(hh,mm,y,result_hrs,result_mins)
{
	let actual_minutes=0,total_minutes,actual_hrs=0,hhh;
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
function testcase(actual_hrs,actual_minutes,result_hrs,result_mins)
{
	if((result_hrs==actual_hrs)&&(result_mins==actual_minutes))
	{
		console.log("\nTest Case Successful");
	}
	else
	{
		console.log("\nTest Case not Successful");
	}
}
