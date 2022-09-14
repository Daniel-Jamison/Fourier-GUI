var i = 0

function AddFunction() 
{
    i = i + 1
  
	const node = document.createElement("tr");
	node.setAttribute("id", "row"+i);
	document.getElementById("myTable").appendChild(node);
  
	for (let j = 0; j<2;j++)
	{
	const node = document.createElement("td");
	node.innerHTML = '<input type="number" style="width: 3em">';
	document.getElementById("row"+i).appendChild(node);
	}
}

var layer1;
var layer2;
var ctx1;
var ctx2;

var width = document.getElementById("display").offsetWidth;
var height = document.getElementById("display").offsetHeight;

var xfo
var yfo

var Time = 0

var mag = []
var fre = []

var n = 0

const pi = Math.PI


layer1 = document.getElementById("layer1");
ctx1 = layer1.getContext("2d");
layer1.width = width;
layer1.height = height;
	
layer2 = document.getElementById("layer2");
ctx2 = layer2.getContext("2d");
layer2.width = width;
layer2.height = height;
	
Time = 0

x = width*.5;
y = height*.5;
	
var	rt = 0
	
for (let r = 0; r < n; r++)
{
	rt = rt + mag[r]
}
	
xfo = x
yfo = y + rt

		
var timer = setInterval(drawAll, 5);

function drawAll() 
{
	Lines()
}
function Lines()
{	
	
	T = Time*.005
	
	ctx1.clearRect(0, 0, width, height);
	
	ctx1.strokeStyle = "black";

	ctx2.strokeStyle = "grey";
	
	x = width*.5;
	y = height*.5;
	
	for (let i = 0; i < n; i++)
	{	
		xn = (x)+(mag[i]*Math.sin(2*pi*T*fre[i]))
		yn = (y)+(mag[i]*Math.cos(2*pi*T*fre[i]))
		
		ctx1.lineWidth = 2;
		ctx1.beginPath();
		ctx1.moveTo(x, y);
		ctx1.lineTo(xn, yn);
		ctx1.stroke();
		
		ctx1.lineWidth = .1;
		ctx1.beginPath();
		ctx1.arc(x, y, mag[i], 0, 2 * Math.PI);
		ctx1.stroke();
		
		x = xn
		y = yn
	}
	

	ctx2.beginPath();
	ctx2.moveTo(x, y);
	ctx2.lineTo(xfo, yfo);
	ctx2.stroke();

	yfo = y
	xfo = x
	
	Time = Time + 1		
	
}

function StartFunction()
{
	ctx2.clearRect(0, 0, width, height);
	
	n = i
	
	mag = []
	fre = []
	
	for (let r = 1; r < n+1; r++)
	{
	mag.push(myTable.rows[r].cells[1].children[0].value)
	fre.push(myTable.rows[r].cells[0].children[0].value)
	}
	
	x = width*.5;
	y = height*.5;
	
	var	rt = 0
	
	for (let r = 1; r < n+1; r++)
	{
		rt = rt + mag[r]
	}
	
	xfo = x
	yfo = y + rt
	
	clearInterval(timer);
	
	Time = 0
	
	timer = setInterval(drawAll, 5);
}




