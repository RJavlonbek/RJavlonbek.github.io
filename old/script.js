var colors=["red","blue","yellow","green","purple","white","black"];
var selected_id;
var selected_color;
var sq;
var score=0;

window.onload=function()
{
    var area=document.getElementById('mainArea');
    for (var i=0;i<81;i++)
    {
    	var square=document.createElement("img");
    	square.src="default.png";
    	square.className="square";
    	square.id=i;
    	area.appendChild(square);
    }

    sq=document.querySelectorAll("#mainArea img");


    for(var i=0;i<5;i++)
    {
    	addColor();
    }
}

function addColor()
{
	for(var j=0;j<81;j++)
	{
		if(sq[j].id==j)
		{
	        for(var i=0;i<1;i)
	        {
		        var random_id=parseInt(Math.random()*81);
                var random_color=colors[parseInt(Math.random()* colors.length)];
                if(document.getElementById(random_id))
                {
                    var space=document.getElementById(random_id);
                    space.src= random_color+".png";
                    space.onclick=select;
                    space.id=random_id+random_color;
                    i++;
                    return;
                }
	        } 
	    }
	}
	gameOver();
}

function select()
{
	if(document.getElementById(selected_id+selected_color))
	{
	    document.getElementById(selected_id+selected_color).className="square";
	}
    this.className="selected";
	selected_id=parseInt(this.id);
	selected_color=getColor(this.id);

	if(selected_id>8)
    {
	    var top_id=sq[selected_id-9].id;
	    document.getElementById(top_id).onclick=swap;    
    }

    if(selected_id<72)
    {
	    var bottom_id=sq[selected_id+9].id;
	    document.getElementById(bottom_id).onclick=swap;
	}

	if(selected_id%9!=0)
	{
	    var left_id=sq[selected_id-1].id;
	    document.getElementById(left_id).onclick=swap;
	}

	if((selected_id-8)%9!=0)
	{
	    var right_id=sq[selected_id+1].id;
	    document.getElementById(right_id).onclick=swap;
	}
}

function swap()
{
	var last=document.getElementById(selected_id+selected_color);
	last.className="square";
	var des_id=parseInt(this.id);
	var des_color=getColor(this.id);

	var temp_src=last.src;
	last.src=this.src;
	this.src=temp_src;

    this.id=des_id+selected_color;
    last.id=selected_id+des_color;

	selected_id="undefined";
	selected_color="undefined";

	test(this.id);
	test(last.id);

	for(var i=0;i<81;i++)
	{
        if(sq[i].id==i)
        {
        	sq[i].onclick=NaN;
        }
        else
        {
        	sq[i].onclick=select;
        }
	}

	addColor();
	addColor();
	addColor();
}

function test(a)
{
	var a_id=parseInt(a);
	var a_color=getColor(a);
	var next_id,count=0,left,right,top,bottom,top_right,top_left,bottom_right,bottom_left;
    
    //right
    if((a_id-8)%9!=0)
    {
    	next_id=sq[a_id+1].id;
    	for(var i=0;i<1;i)
        {
        	if(getColor(next_id)==a_color&&a_color)
            {
       		    count++;
       		    if((parseInt(next_id)-8)%9!=0)
        	    {
       		        next_id=sq[parseInt(next_id)+1].id;
        	    }
        	    else
        	    {
        	    	i++;
        	    }
       	    }
            else
            {
            	i++;
            }
        }
    }
    right=count;
    count=0;

    //left
    if(a_id%9!=0)
    {
    	next_id=sq[a_id-1].id;
    	for(var i=0;i<1;i)
    	{
    		if(getColor(next_id)==a_color&&a_color)
            {
       		    count++;
       		    if(parseInt(next_id)%9!=0)
        	    {
       		        next_id=sq[parseInt(next_id)-1].id;
        	    }
        	    else
        	    {
        	    	i++;
        	    }
       	    }
            else
            {
            	i++;
            }
    	}
    }
    left=count;
    count=0;

    //top
    if(a_id>8)
    {
    	next_id=sq[a_id-9].id;
    	for(var i=0;i<1;i)
    	{
    		if(getColor(next_id)==a_color&&a_color)
            {
       		    count++;
       		    if(parseInt(next_id)>8)
        	    {
       		        next_id=sq[parseInt(next_id)-9].id;
        	    }
        	    else
        	    {
        	    	i++;
        	    }
       	    }
            else
            {
            	i++;
            }
    	}
    }
    top=count;
    count=0;

    //bottom
    if(a_id<72)
    {
    	next_id=sq[a_id+9].id;
    	for(var i=0;i<1;i)
    	{
    		if(getColor(next_id)==a_color&&a_color)
            {
       		    count++;
       		    if(parseInt(next_id)<72)
        	    {
       		        next_id=sq[parseInt(next_id)+9].id;
        	    }
        	    else
        	    {
        	    	i++;
        	    }
       	    }
            else
            {
            	i++;
            }
    	}
    }
    bottom=count;
    count=0;

    //top-right
    if((a_id-8)%9!=0  &&  a_id>8)
    {
    	next_id=sq[a_id-8].id;
    	for(var i=0;i<1;i)
    	{
    		if(getColor(next_id)==a_color && a_color)
            {
       		    count++;
       		    if((parseInt(next_id)-8)%9!=0  &&  parseInt(next_id)>8)
        	    {
       		        next_id=sq[parseInt(next_id)-8].id;
        	    }
        	    else
        	    {
        	    	i++;
        	    }
       	    }
            else
            {
            	i++;
            }
    	}
    }
    top_right=count;
    count=0;

    //top-left
    if(a_id%9!=0  &&  a_id>8)
    {
    	next_id=sq[a_id-10].id;
    	for(var i=0;i<1;i)
    	{
    		if(getColor(next_id)==a_color && a_color)
            {
       		    count++;
       		    if(parseInt(next_id)%9!=0  && parseInt(next_id)>8)
        	    {
       		        next_id=sq[parseInt(next_id)-10].id;
        	    }
        	    else
        	    {
        	    	i++;
        	    }
       	    }
            else
            {
            	i++;
            }
    	}
    }
    top_left=count;
    count=0;

    //bottom-right
    if( (a_id-8)%9!=0  &&  a_id<72)
    {
    	next_id=sq[a_id+10].id;
    	for(var i=0;i<1;i)
    	{
    		if(getColor(next_id)==a_color && a_color)
            {
       		    count++;
       		    if((parseInt(next_id)-8)%9!=0  &&  parseInt(next_id)<72)
        	    {
       		        next_id=sq[parseInt(next_id)+10].id;
        	    }
        	    else
        	    {
        	    	i++;
        	    }
       	    }
            else
            {
            	i++;
            }
    	}
    }
    bottom_right=count;
    count=0;

    //bottom-left
    if(a_id%9!=0  &&  a_id<72)
    {
    	next_id=sq[a_id+8].id;
    	for(var i=0;i<1;i)
    	{
    		if(getColor(next_id)==a_color && a_color)
            {
       		    count++;
       		    if(parseInt(next_id)%9!=0  &&  parseInt(next_id)<72)
        	    {
       		        next_id=sq[parseInt(next_id)+8].id;
        	    }
        	    else
        	    {
        	    	i++;
        	    }
       	    }
            else
            {
            	i++;
            }
    	}
    }
    bottom_left=count;
    count=0;

    if(left || right)
    {
    	if(left+right+1>=3)
    	{
    		for(var i=a_id-left;i<=a_id+right;i++)
    		{
                sq[i].id=i;
                sq[i].src="default.png";
    		}
    		score+=Math.floor((left+right+1)*1.5)-1;
    	}
    }

    if(top+bottom+1>=3)
    {
    	for(var i=a_id-top*9;i<=a_id+bottom*9;i=i+9)
    	{
    		sq[i].id=i;
    		sq[i].src="default.png";
    	}
    	score=score+Math.floor((top+bottom+1)*1.5)-1;
    }

    if(top_right+bottom_left+1>=3)
    {
    	for(var i=a_id-top_right*8;i<=a_id+bottom_left*8;i=i+8)
    	{
    		sq[i].id=i;
    		sq[i].src="default.png";
    	}
    	score+=Math.round((top_right+bottom_left+1)*1.51);
    }

    if(top_left+bottom_right+1>=3)
    {
    	for(var i=a_id-top_left*10;i<=a_id+bottom_right*10;i=i+10)
    	{
    		sq[i].id=i;
    		sq[i].src="default.png";
    	}
    	score+=Math.round((top_left+bottom_right+1)*1.51);
    }
    var scoreArea=document.getElementById("score");
    if(score)
    {
        scoreArea.innerHTML=score;
    }
}

function getColor(a)
{
	var i=parseInt(a);
	if(i>9)
	{
		return a.substring(2);
	}
	else
	{
		return a.substring(1);
	}
}

function gameOver()
{
	var w=document.getElementById("gameOver");
	w.id="GO";
}