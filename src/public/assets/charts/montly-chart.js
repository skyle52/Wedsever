// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("monthlyChart");
let xAxis;
let data;

await fetch("https://tocotea-web.onrender.com/api/statistical/monthly-chart", {
    mode: 'cors',
    headers: {
        'accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    method: 'get'
}).then(r => {
    return r.json()
}).then(r => {
    xAxis = r.xAxis
    data = r.data
})
let min = Math.min(...data)
let max = Math.max(...data)
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: xAxis,
        datasets: [{
            label: "Thu nhập",
            lineTension: 0.3,
            backgroundColor: "rgba(2,117,216,0.2)",
            borderColor: "rgba(2,117,216,1)",
            pointRadius: 5,
            pointBackgroundColor: "rgba(2,117,216,1)",
            pointBorderColor: "rgba(255,255,255,0.8)",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(2,117,216,1)",
            pointHitRadius: 50,
            pointBorderWidth: 2,
            data: data,
        }],
    },
    options: {
        scales: {
            xAxes: [{
                time: {
                    unit: 'date'
                },
                gridLines: {
                    display: false
                },
                ticks: {
                    maxTicksLimit: 7
                }
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: max + max * 0.1,
                    maxTicksLimit: 10
                },
                gridLines: {
                    color: "rgba(0, 0, 0, .125)",
                }
            }],
        },
        legend: {
            display: false
        }
    }
});
