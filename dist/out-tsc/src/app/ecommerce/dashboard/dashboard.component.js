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
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        $(function () {
            MorrisArea();
        });
        $(window).on('scroll', function () {
            $('.card .sparkline').each(function () {
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow + 400) {
                    $(this).addClass('pullUp');
                }
            });
        });
        $('.sparkline').each(function () {
            var $this = $(this);
            $this.sparkline('html', $this.data());
        });
        $(function () {
            $('#world-map-markers').vectorMap({
                map: 'world_mill_en',
                normalizeFunction: 'polynomial',
                hoverOpacity: 0.7,
                hoverColor: false,
                backgroundColor: 'transparent',
                regionStyle: {
                    initial: {
                        fill: 'rgba(210, 214, 222, 1)',
                        'fill-opacity': 1,
                        stroke: 'none',
                        'stroke-width': 0,
                        'stroke-opacity': 1
                    },
                    hover: {
                        fill: 'rgba(255, 193, 7, 2)',
                        cursor: 'pointer'
                    },
                    selected: {
                        fill: 'yellow'
                    },
                    selectedHover: {}
                },
                markerStyle: {
                    initial: {
                        fill: '#fff',
                        stroke: '#FFC107 '
                    }
                },
                markers: [{
                        latLng: [37.09, -95.71],
                        name: 'America'
                    },
                    {
                        latLng: [51.16, 10.45],
                        name: 'Germany'
                    },
                    {
                        latLng: [-25.27, 133.77],
                        name: 'Australia'
                    },
                    {
                        latLng: [56.13, -106.34],
                        name: 'Canada'
                    },
                    {
                        latLng: [20.59, 78.96],
                        name: 'India'
                    },
                    {
                        latLng: [55.37, -3.43],
                        name: 'United Kingdom'
                    },
                ]
            });
        });
        function MorrisArea() {
            Morris.Area({
                element: 'area_chart',
                data: [{
                        period: '2011',
                        Sales: 10,
                        Revenue: 0,
                        Profit: 0
                    }, {
                        period: '2012',
                        Sales: 50,
                        Revenue: 15,
                        Profit: 5
                    }, {
                        period: '2013',
                        Sales: 20,
                        Revenue: 84,
                        Profit: 36
                    }, {
                        period: '2014',
                        Sales: 80,
                        Revenue: 12,
                        Profit: 7
                    }, {
                        period: '2015',
                        Sales: 30,
                        Revenue: 105,
                        Profit: 89
                    }, {
                        period: '2016',
                        Sales: 25,
                        Revenue: 80,
                        Profit: 40
                    }, {
                        period: '2017',
                        Sales: 95,
                        Revenue: 50,
                        Profit: 26
                    }
                ],
                lineColors: ['#ffce57', '#fe6383', '#666666'],
                xkey: 'period',
                ykeys: ['Sales', 'Revenue', 'Profit'],
                labels: ['Sales', 'Revenue', 'Profit'],
                pointSize: 0,
                lineWidth: 0,
                resize: true,
                fillOpacity: 0.8,
                behaveLikeLine: true,
                gridLineColor: '#e0e0e0',
                hideHover: 'auto'
            });
        }
        $(function () {
            // some data
            var d1 = [];
            for (var i = 0; i <= 10; i += 1) {
                d1.push([i, (Math.random() * 60)]);
            }
            var d2 = [];
            for (var i = 0; i <= 10; i += 1) {
                d2.push([i, (Math.random() * 40)]);
            }
            var d3 = [];
            for (var i = 0; i <= 10; i += 1) {
                d3.push([i, (Math.random() * 25)]);
            }
            var ds = [];
            ds.push({
                label: 'Mobile',
                data: d1,
                bars: {
                    order: 1
                }
            });
            ds.push({
                label: 'Laptop',
                data: d2,
                bars: {
                    order: 2
                }
            });
            ds.push({
                label: 'Tablet',
                data: d3,
                bars: {
                    order: 3
                }
            });
            var stack = 0, bars = true, lines = true, steps = true;
            var options = {
                bars: {
                    show: true,
                    barWidth: 0.3,
                    fill: 1
                },
                grid: {
                    show: true,
                    aboveData: false,
                    labelMargin: 5,
                    axisMargin: 0,
                    borderWidth: 1,
                    minBorderMargin: 5,
                    clickable: true,
                    hoverable: true,
                    autoHighlight: false,
                    mouseActiveRadius: 20,
                    borderColor: '#f5f5f5'
                },
                series: {
                    stack: stack
                },
                legend: {
                    position: 'ne',
                    margin: [0, 0],
                    noColumns: 0,
                    labelBoxBorderColor: null,
                    labelFormatter: function (label, series) {
                        // just add some space to labes
                        return '' + label + '&nbsp;&nbsp;';
                    },
                    width: 30,
                    height: 5
                },
                yaxis: {
                    tickColor: '#f5f5f5',
                    font: {
                        color: '#bdbdbd'
                    }
                },
                xaxis: {
                    tickColor: '#f5f5f5',
                    font: {
                        color: '#bdbdbd'
                    }
                },
                colors: ['#6a7885', '#ffd03f', '#8c99e0'],
                tooltip: true,
                tooltipOpts: {
                    content: '%s : %y.0',
                    shifts: {
                        x: -30,
                        y: -50
                    }
                }
            };
            $.plot($('.sales-bars-chart'), ds, options);
        });
    };
    DashboardComponent = __decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map