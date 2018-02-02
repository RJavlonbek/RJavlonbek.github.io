function show()
{
	var f=document.getElementById('sign_in');
	f.style.display="block";
}

function registration()
{
	var sign_in=document.getElementById('sign_in');
	var registration=document.getElementById('registration');
	sign_in.style.display='none';
	registration.style.display='block';
}

function go()
{
	alert('correct');
}

function down()
{
	var d=document.getElementById('down');
	d.style.position='absolute';
	d.style.right='100px';
}

function back()
{
	var d=document.getElementById('down');
	d.color='red';
	d.style.position='absolute';
	d.style.top='200px';
	d.onmouseover='down()';
}