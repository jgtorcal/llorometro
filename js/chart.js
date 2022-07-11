// CHART
window.onload = function () {

    var dps = []; // dataPoints
    var chart = new CanvasJS.Chart("chartContainer", {
        backgroundColor: null,
        theme: "light2",
        // title :{
        //     text: "Llorómetro"
        // },
        data: [{
            type: "line",
            dataPoints: dps
        }]
    });

    var xVal = 0;
    var yVal = 200; 
    var updateInterval = 500;
    var dataLength = 120; // number of dataPoints visible at any point

    var updateChart = function (count) {

        count = count || 1;

        for (var j = 0; j < count; j++) {
            
            yVal = parseInt(getValue());
            
            dps.push({
                x: xVal,
                y: yVal
            });
            xVal++;
        }

        if (dps.length > dataLength) {
            dps.shift();
        }

        chart.render();
    };

    updateChart(dataLength);
    setInterval(function(){updateChart()}, updateInterval);

}