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

function calculate() {
    try {
        // Handle percentage conversion before evaluating
        let expression = inputbox.value.replace(/%/g, '/100');
        inputbox.value = eval(expression.replace(/X/g, '*'));
    } catch {
        inputbox.value = "Error";
    }
}