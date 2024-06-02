const inputbox=document.getElementById("input");
function getnumber(num)
{
    inputbox.value+=num;
}


function allClearDisplay()
{
    inputbox.value="";
}

function clearDisplay()
{
    inputbox.value=inputbox.value.slice(0,-1);
}

function calculate()
{
let res=inputbox.value;
let y=eval(res);
inputbox.value=y;
}