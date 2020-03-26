const config = {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: "Prediction",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [],
            fill: false,
            borderWidth: 2,
            fill: false
        }],
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: "covid19 predicted cases"
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                type:"linear",
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'day'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'number of cases'
                }
            }]
        }
    }
};
