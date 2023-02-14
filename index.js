let string = "";
let box = document.getElementsByName("box")[0];
function clicked(element) {
    let val = element.innerHTML;
    if (val == "C") {
        clear();
        box.value = string;
    }
    else if (val == "="){
        equalTo();
        box.value = string;
        string="";
    }
    else if (val =="⌫"){
        clearOne();
        box.value=string;
    }
    else if (val=="%"){
        box.value=string;
    }
    else { 
        string += val; 
        box.value = string;
    }

    
    console.log(string);
}

function clear() {
    string = "";
}

function equalTo() {
    string = string.replace("÷", "/");
    string = string.replace("×", "*");
    string = eval(string);
}

function clearOne(){
    string = string.slice(0,-1);
}