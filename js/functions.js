// Get value
function getValue() {
    var node = document.getElementById('num');
    textContent = node.textContent;
    //console.log(textContent);
    return textContent;
}


// Update value
function getLog() {
    $.ajax({
        url: 'bash.php',
        dataType: 'text',
        numLinesToFetch: 1,
        success: function(text) {
            $("#num").text(text);
            setTimeout(getLog, 500); // refresh every 30 seconds

        }
        
    })

    //var element = document.getElementById("num");
    //var element = document.getElementsByTagName('body');
    
    valor = parseInt(getValue());

    switch (true){
        case valor < 14:
            //element.style.backgroundColor = "#FFFFFF";
            document.body.style.backgroundColor = "#FFFFFF";
            break;
        case valor > 15 && valor < 29:
            //element.style.backgroundColor = "#FCDE00";
            document.body.style.backgroundColor = "#FCDE00";
            break;
        case valor > 30 && valor < 49:
            //element.style.backgroundColor = "#0CAD4D";
            document.body.style.backgroundColor = "#0CAD4D";
            break;
        case valor > 50 && valor < 69:
            //element.style.backgroundColor = "#A9C437";
            document.body.style.backgroundColor = "#A9C437";
            break;
        case valor > 70 && valor < 89:
            //element.style.backgroundColor = "#FCDE00";
            document.body.style.backgroundColor = "#FCDE00";
            break;
        case valor > 90 && valor < 109:
            //element.style.backgroundColor = "#FDBE0F";
            document.body.style.backgroundColor = "#FDBE0F";
            break;
        case valor > 110 && valor < 129:
            //element.style.backgroundColor = "#FDAD19";
            document.body.style.backgroundColor = "#FDAD19";
            break;
        case valor > 130 && valor < 149:
            //element.style.backgroundColor = "#F16820";
            document.body.style.backgroundColor = "#F16820";
            break;
        case valor > 150:
            //element.style.backgroundColor = "#EC1A23";
            document.body.style.backgroundColor = "#EC1A23";
            break;
        default:
            //element.style.backgroundColor = "#FFFFFF";
            document.body.style.backgroundColor = "#FFFFFF";
            break;
    }
}

getLog();


// Del log from server
function borrarLog() {
    $.ajax({
        url: 'borrar.php',
        dataType: 'text',
        success: function(text) {
            $("#del").text(text);
            setTimeout(borrarLog, 60500); // refresh every 30 seconds
            //console.log("borrado");
        }
    })
}

borrarLog();