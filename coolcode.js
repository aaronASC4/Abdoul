<script type="text/javascript">
var now = new Date();
var hours = now.getHours();
</script>
//Keep in code - Written by Computerhope.com
<script type="text/javascript">
//
// Description: Randomly change background color every 5 seconds
//
// NewcWare 1997
// Author: Scott Newcomer 3/1997
// Email: nuke@bright.net
//
function setbackground()
{
window.setTimeout( "setbackground()", 5000)} // 5000 milliseconds delay

var index = Math.round(Math.random() * 9);

var ColorValue = "FFFFFF"; // default color - white (index = 0)

if(index == 1)
 ColorValue = "FFCCCC"; //peach
if(index == 2)
ColorValue = "CCAFFF"; //violet
if(index == 3)
ColorValue = "A6BEFF"; //lt blue
if(index == 4)
ColorValue = "99FFFF"; //cyan
if(index == 5)
ColorValue = "D5CCBB"; //tan
if(index == 6)
ColorValue = "99FF99"; //lt green
if(index == 7)
ColorValue = "FFFF99"; //lt yellow
if(index == 8)
ColorValue = "FFCC99"; //lt orange
if(index == 9)
ColorValue = "CCCCCC"; //lt grey

document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;

}
</script>
<body onload="setbackground();">