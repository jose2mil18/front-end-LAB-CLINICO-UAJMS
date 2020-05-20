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
var HorizontalComponent = /** @class */ (function () {
    function HorizontalComponent() {
    }
    HorizontalComponent.prototype.ngOnInit = function () {
        $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
        // Checks if li has sub (ul) and adds class for toggle icon - just an UI
        $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
        $('.menu > ul > li').hover(function (e) {
            if ($(window).width() > 943) {
                $(this).children('ul').stop(true, false).fadeToggle(150);
                e.preventDefault();
            }
        });
        // If width is more than 943px dropdowns are displayed on hover
        $('.menu > ul > li').click(function () {
            if ($(window).width() <= 943) {
                $(this).children('ul').fadeToggle(150);
            }
        });
        $('.h-bars').click(function (e) {
            $('.menu > ul').toggleClass('show-on-mobile');
            e.preventDefault();
        });
        $('.sparkline').each(function () {
            var $this = $(this);
            $this.sparkline('html', $this.data());
        });
        // ===============================================================================
        $(window).on('scroll', function () {
            $('.card .sparkline').each(function () {
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow + 400) {
                    $(this).addClass('pullUp');
                }
            });
        });
        // ===============================================================================
        Morris.Area({
            element: 'm_area_chart2',
            data: [{
                    period: '2012',
                    SiteA: 10,
                    SiteB: 0,
                }, {
                    period: '2013',
                    SiteA: 105,
                    SiteB: 110,
                }, {
                    period: '2014',
                    SiteA: 78,
                    SiteB: 92,
                }, {
                    period: '2015',
                    SiteA: 89,
                    SiteB: 185,
                }, {
                    period: '2016',
                    SiteA: 175,
                    SiteB: 149,
                }, {
                    period: '2017',
                    SiteA: 126,
                    SiteB: 98,
                }
            ],
            xkey: 'period',
            ykeys: ['SiteA', 'SiteB'],
            labels: ['Site A', 'Site B'],
            pointSize: 0,
            fillOpacity: 0.4,
            pointStrokeColors: ['#b6b8bb', '#a890d3'],
            behaveLikeLine: true,
            gridLineColor: '#e0e0e0',
            lineWidth: 0,
            smooth: false,
            hideHover: 'auto',
            lineColors: ['#b6b8bb', '#a890d3'],
            resize: true
        });
        // ===============================================================================
        $('.dial1').knob();
        $({ animatedVal: 0 }).animate({ animatedVal: 66 }, {
            duration: 4000,
            easing: 'swing',
            step: function () {
                $('.dial1').val(Math.ceil(this.animatedVal)).trigger('change');
            }
        });
        $('.dial2').knob();
        $({ animatedVal: 0 }).animate({ animatedVal: 26 }, {
            duration: 4500,
            easing: 'swing',
            step: function () {
                $('.dial2').val(Math.ceil(this.animatedVal)).trigger('change');
            }
        });
        $('.dial3').knob();
        $({ animatedVal: 0 }).animate({ animatedVal: 76 }, {
            duration: 3800,
            easing: 'swing',
            step: function () {
                $('.dial3').val(Math.ceil(this.animatedVal)).trigger('change');
            }
        });
        $('.dial4').knob();
        $({ animatedVal: 0 }).animate({ animatedVal: 88 }, {
            duration: 5200,
            easing: 'swing',
            step: function () {
                $('.dial4').val(Math.ceil(this.animatedVal)).trigger('change');
            }
        });
    };
    HorizontalComponent = __decorate([
        Component({
            selector: 'app-horizontal',
            templateUrl: './horizontal.component.html',
            styleUrls: ['./horizontal.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], HorizontalComponent);
    return HorizontalComponent;
}());
export { HorizontalComponent };
//# sourceMappingURL=horizontal.component.js.map