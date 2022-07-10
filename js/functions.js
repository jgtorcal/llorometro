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

    var element = document.getElementById("num");
    yVal = parseInt(getValue());

    switch (true){
        case yVal < 15:
            element.style.backgroundColor = "#63E6BE";
            break;
        case yVal > 15:
            element.style.backgroundColor = "#F9B02B";
            break;
        case yVal > 25:
            element.style.backgroundColor = "#FF6336";
            break;
        default:
            element.style.backgroundColor = "#63E6BE";
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