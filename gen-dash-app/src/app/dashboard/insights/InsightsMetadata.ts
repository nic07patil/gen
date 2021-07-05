import { ChartMetadata } from './ChartMetadata';

export const UsecaseChartConfig: ChartMetadata = {
    type: 'line',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: []
    },
    options: {
        responsive: true,
        animation: {
            easing: 'linear',
            duration: 500
        },
        layout: {
            padding: {
                top: 20
            }
        },
        tooltips: {
            enabled: true
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                display: false,
                gridLines: {
                    drawTicks: false,
                    display: false
                },
                ticks: {
                    beginAtZero: false,
                    padding: 10
                }

            }],
            xAxes: [{
                display: false,
                gridLines: {
                    zeroLineColor: "transparent",
                    drawTicks: false,
                    display: false
                },
            }]
        }
    }
}