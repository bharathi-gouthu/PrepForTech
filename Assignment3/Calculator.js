// function to display value
function display(val) {
    // var num = document.getElementById('screen').value;
    document.getElementById("screen").value += val

}
function clr() {
    document.getElementById("screen").value = ""
    document.getElementById("add").disabled = false;
    document.getElementById("sub").disabled = false;
    document.getElementById("mul").disabled = false;
    document.getElementById("div").disabled = false;
}

function solve() {
    let x = document.getElementById("screen").value
    let y = eval(x)
    document.getElementById("screen").value = y
}

function manageOperator(){
    add = document.getElementById("addt");
    add.setAttribute("disabled", "disabled");
    document.getElementById("sub").disabled = true;
    document.getElementById("mul").disabled = true;
    document.getElementById("div").disabled = true;
    
}
