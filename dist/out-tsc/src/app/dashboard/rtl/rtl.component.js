var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation } from '@angular/core';
var RtlComponent = /** @class */ (function () {
    function RtlComponent() {
    }
    RtlComponent.prototype.ngOnInit = function () {
        $(function () {
            new Chart(document.getElementById('line_chart'), getChartJs('line'));
            initSparkline();
            menuToggle();
        });
        // Sparkline
        function initSparkline() {
            $('.sparkline').each(function () {
                var $this = $(this);
                $this.sparkline('html', $this.data());
            });
        }
        function getChartJs(type) {
            var config = null;
            if (type === 'line') {
                config = {
                    type: 'line',
                    data: {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [{
                                label: 'My First dataset',
                                data: [28, 32, 39, 37, 42, 55, 50],
                                borderColor: 'rgba(102,165,226, 0.2)',
                                backgroundColor: 'rgba(102,165,226, 0.7)',
                                pointBorderColor: 'rgba(102,165,226, 0.5)',
                                pointBackgroundColor: 'rgba(102,165,226, 0.2)',
                                pointBorderWidth: 1
                            }, {
                                label: 'My Second dataset',
                                data: [40, 48, 50, 48, 63, 62, 71],
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
            return config;
        }
        $('.sidebar .menu .list').slimscroll({
            height: 'calc(100vh - 65px)',
            color: 'rgba(0,0,0,0.2)',
            position: 'left',
            size: '2px',
            alwaysVisible: false,
            borderRadius: '3px',
            railBorderRadius: '0'
        });
        function menuToggle() {
            console.log(typeof menuToggle);
            // Collapse or Expand Menu
            $('.menu-toggle').on('click', function (e) {
                var $this = $(this);
                var $content = $this.next();
                if ($($this.parents('ul')[0]).hasClass('list')) {
                    var $not = $(e.target).hasClass('menu-toggle') ? e.target : $(e.target).parents('.menu-toggle');
                    $.each($('.menu-toggle.toggled').not($not).next(), function (i, val) {
                        if ($(val).is(':visible')) {
                            $(val).prev().toggleClass('toggled');
                            $(val).slideUp();
                        }
                    });
                }
                $this.toggleClass('toggled');
                $content.slideToggle(320);
            });
        }
    };
    RtlComponent = __decorate([
        Component({
            selector: 'app-rtl',
            templateUrl: './rtl.component.html',
            styleUrls: ['./rtl.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], RtlComponent);
    return RtlComponent;
}());
export { RtlComponent };
//# sourceMappingURL=rtl.component.js.map