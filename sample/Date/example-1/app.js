var date=new Date();
document.write(date);
document.write("<br/><br/>");
document.write("when you call new Date() it return a date "+typeof date);
document.write("<br/><br/>");
var date2=Date();
document.write(date2);
document.write("<br/><br/>");
document.write("when you call  Date() without new  it return a  "+typeof date2);

document.write("<br/><br/>");
document.write("create a date by passing in date as a string ex: Month day, year hours:minutes:seconds");
document.write("<br/><br/>");

var Xmas95 = new Date("December 25, 1995 13:30:00");

document.write(Xmas95);

document.write("<br/><br/>");

document.write("create a date by passing in date as a integers ex: integer values for year, month, day, hour, minute, and seconds");
var Xmas96 = new Date(1996, 11, 25, 9, 30, 0);

 document.write("<br/><br/>");
 
 document.write(Xmas95);

document.write("<br/><br/>");

var Xmas97 = new Date("1997-12-25T12:00:00");

document.write(Xmas97);










