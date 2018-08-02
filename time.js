function printTime(){
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth();
	var date = d.getDate();
	var hours = d.getHours();
	var mins = d.getMinutes();
	var secs = d.getSeconds();
	var milisecs = d.getMilliseconds();

	switch(month) {
    case 0:
        var month = "Enero";
        break;
    case 1:
        var month = "Febrero";
        break;
   	case 2:
        var month = "Marzo";
        break;
    case 3:
        var month = "Abril";
        break;
    case 4:
        var month = "Mayo";
        break;
    case 5:
        var month = "Junio";
        break;
    case 6:
        var month = "Julio";
        break;
    case 7:
        var month = "Agosto";
        break;
    case 8:
        var month = "Setiembre";
        break;
    case 9:
        var month = "Octubre";
        break;
    case 10:
        var month = "Noviembre";
        break;
    default:
        var month = "Diciembre";
	}

	document.getElementById("hours").innerHTML = hours;
	document.getElementById("mins").innerHTML = mins;
	document.getElementById("secs").innerHTML = secs;

	document.getElementById("year").innerHTML = year;
	document.getElementById("month").innerHTML = month;
	document.getElementById("date").innerHTML = date;
	;
}
setInterval(printTime, 1000);