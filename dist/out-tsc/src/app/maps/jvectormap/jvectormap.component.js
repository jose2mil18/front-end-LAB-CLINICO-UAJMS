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
var JvectormapComponent = /** @class */ (function () {
    function JvectormapComponent() {
    }
    JvectormapComponent.prototype.ngOnInit = function () {
        $(function () {
            $('#world-map-markers').vectorMap({
                map: 'world_mill_en',
                normalizeFunction: 'polynomial',
                hoverOpacity: 0.7,
                hoverColor: false,
                backgroundColor: 'transparent',
                showTooltip: true,
                regionStyle: {
                    initial: {
                        fill: 'rgba(210, 214, 222, 1)',
                        "fill-opacity": 1,
                        stroke: 'none',
                        "stroke-width": 0,
                        "stroke-opacity": 1
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
                markers: [
                    { latLng: [37.09, -95.71], name: 'America' },
                    { latLng: [51.16, 10.45], name: 'Germany' },
                    { latLng: [-25.27, 133.77], name: 'Australia' },
                    { latLng: [56.13, -106.34], name: 'Canada' },
                    { latLng: [20.59, 78.96], name: 'India' },
                    { latLng: [55.37, -3.43], name: 'United Kingdom' },
                ]
            });
        });
        $('#india').vectorMap({
            map: 'in_mill',
            backgroundColor: 'transparent',
            regionStyle: {
                initial: {
                    fill: '#fda582'
                }
            }
        });
        $('#usa').vectorMap({
            map: 'us_aea_en',
            backgroundColor: 'transparent',
            regionStyle: {
                initial: {
                    fill: '#72c2ff'
                }
            }
        });
        $('#australia').vectorMap({
            map: 'au_mill',
            backgroundColor: 'transparent',
            regionStyle: {
                initial: {
                    fill: '#a890d3'
                }
            }
        });
        $('#uk').vectorMap({
            map: 'uk_mill_en',
            backgroundColor: 'transparent',
            regionStyle: {
                initial: {
                    fill: '#00ced1'
                }
            }
        });
    };
    JvectormapComponent = __decorate([
        Component({
            selector: 'app-jvectormap',
            templateUrl: './jvectormap.component.html',
            styleUrls: ['./jvectormap.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], JvectormapComponent);
    return JvectormapComponent;
}());
export { JvectormapComponent };
//# sourceMappingURL=jvectormap.component.js.map