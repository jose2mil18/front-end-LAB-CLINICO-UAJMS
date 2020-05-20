var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var ChartjsComponent = /** @class */ (function () {
    function ChartjsComponent() {
    }
    ChartjsComponent.prototype.ngOnInit = function () {
        // Chartjs
        $(function () {
            new Chart(document.getElementById('line_chart'), getChartJs('line'));
            new Chart(document.getElementById('bar_chart'), getChartJs('bar'));
            new Chart(document.getElementById('radar_chart'), getChartJs('radar'));
            new Chart(document.getElementById('pie_chart'), getChartJs('pie'));
        });
        function getChartJs(type) {
            var config = null;
            if (type === 'line') {
                config = {
                    type: 'line',
                    data: {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [{
                                label: 'My First dataset',
                                data: [28, 58, 39, 45, 30, 55, 68],
                                borderColor: 'rgba(241,95,121, 0.2)',
                                backgroundColor: 'rgba(241,95,121, 0.5)',
                                pointBorderColor: 'rgba(241,95,121, 0.3)',
                                pointBackgroundColor: 'rgba(241,95,121, 0.2)',
                                pointBorderWidth: 1
                            }, {
                                label: 'My Second dataset',
                                data: [40, 28, 50, 48, 63, 39, 41],
                                borderColor: 'rgba(140,147,154, 0.2)',
                                backgroundColor: 'rgba(140,147,154, 0.2)',
                                pointBorderColor: 'rgba(140,147,154, 0)',
                                pointBackgroundColor: 'rgba(140,147,154, 0.9)',
                                pointBorderWidth: 1
                            }]
                    },
                    options: {
                        responsive: true,
                        legend: false,
                    }
                };
            }
            else if (type === 'bar') {
                config = {
                    type: 'bar',
                    data: {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [{
                                label: 'My First dataset',
                                data: [28, 48, 40, 19, 86, 27, 90],
                                backgroundColor: '#26c6da',
                                strokeColor: 'rgba(255,118,118,0.1)',
                            }, {
                                label: 'My Second dataset',
                                data: [10, 30, 80, 61, 26, 75, 40],
                                backgroundColor: '#8a8a8b',
                                strokeColor: 'rgba(255,118,118,0.1)',
                            }]
                    },
                    options: {
                        responsive: true,
                        legend: false
                    }
                };
            }
            else if (type === 'radar') {
                config = {
                    type: 'radar',
                    data: {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [{
                                label: 'My First dataset',
                                data: [65, 25, 90, 81, 56, 55, 40],
                                borderColor: 'rgba(241,95,121, 0.8)',
                                backgroundColor: 'rgba(241,95,121, 0.5)',
                                pointBorderColor: 'rgba(241,95,121, 0)',
                                pointBackgroundColor: 'rgba(241,95,121, 0.8)',
                                pointBorderWidth: 1
                            }, {
                                label: 'My Second dataset',
                                data: [72, 48, 40, 19, 96, 27, 100],
                                borderColor: 'rgba(140,147,154, 0.8)',
                                backgroundColor: 'rgba(140,147,154, 0.5)',
                                pointBorderColor: 'rgba(140,147,154, 0)',
                                pointBackgroundColor: 'rgba(140,147,154, 0.8)',
                                pointBorderWidth: 1
                            }]
                    },
                    options: {
                        responsive: true,
                        legend: false
                    }
                };
            }
            else if (type === 'pie') {
                config = {
                    type: 'pie',
                    data: {
                        datasets: [{
                                data: [150, 53, 121, 87, 45],
                                backgroundColor: [
                                    '#2a8ceb',
                                    '#58a3eb',
                                    '#6fa6db',
                                    '#86b8e8',
                                    '#9dc7f0'
                                ],
                            }],
                        labels: [
                            'Pia A',
                            'Pia B',
                            'Pia C',
                            'Pia D',
                            'Pia E'
                        ]
                    },
                    options: {
                        responsive: true,
                        legend: false
                    }
                };
            }
            return config;
        }
        // Polar
        var randomScalingFactor = function () {
            return Math.round(Math.random() * 100);
        };
        var chartColors = window.chartColors;
        var color = Chart.helpers.color;
        var config = {
            data: {
                datasets: [{
                        data: [
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                        ],
                        backgroundColor: [
                            color(chartColors.red).alpha(0.5).rgbString(),
                            color(chartColors.orange).alpha(0.5).rgbString(),
                            color(chartColors.yellow).alpha(0.5).rgbString(),
                            color(chartColors.green).alpha(0.5).rgbString(),
                            color(chartColors.blue).alpha(0.5).rgbString(),
                        ],
                        label: 'My dataset' // for legend
                    }],
                labels: [
                    'Red',
                    'Orange',
                    'Yellow',
                    'Green',
                    'Blue'
                ]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Chart.js Polar Area Chart'
                },
                scale: {
                    ticks: {
                        beginAtZero: true
                    },
                    reverse: false
                },
                animation: {
                    animateRotate: false,
                    animateScale: true
                }
            }
        };
        window.onload = function () {
            var ctx = document.getElementById('chart-area');
            window.myPolarArea = Chart.PolarArea(ctx, config);
        };
    };
    ChartjsComponent = __decorate([
        Component({
            selector: 'app-chartjs',
            templateUrl: './chartjs.component.html',
            styleUrls: ['./chartjs.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ChartjsComponent);
    return ChartjsComponent;
}());
export { ChartjsComponent };
//# sourceMappingURL=chartjs.component.js.map