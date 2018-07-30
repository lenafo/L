function printTime(){
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth();
	var date = d.getDate();
	var hours = d.getHours();
	var mins = d.getMinutes();
	var secs = d.getSeconds();
	var milisecs = d.getMilliseconds();
	document.getElementById("time").innerHTML = 
	date+" / "+month+" / "+year+"<br>"+hours+" : "+mins+" : "+secs
	;
}
setInterval(printTime, 1000);