var a=1;
var n=parseInt(prompt("Enter the multiplication table"));
var c=parseInt(prompt("Enter the limit of table"));
var b;
while(a<=c){
	b=a*n;
	document.write(a + "*" + n + "=" + b);
	document.write("<br>");
	a++;
	}