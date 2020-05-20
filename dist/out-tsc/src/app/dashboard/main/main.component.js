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
var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    MainComponent.prototype.ngOnInit = function () {
        $("body").removeClass("authentication sidebar-collapse");
        $(function () {
            Jknob();
            initCounters();
            initSparkline();
            menuToggle();
        });
        function Jknob() {
            $('.knob').knob({
                draw: function () {
                    // 'tron" case
                    if (this.$.data('skin') === 'tron') {
                        var a = this.angle(this.cv) // Angle
                        , r = true;
                        var sa = this.startAngle // Previous start angle
                        , sat = this.startAngle // Start angle
                        , ea = void 0 // Previous end angle
                        , eat = sat + a // End angle
                        ;
                        this.g.lineWidth = this.lineWidth;
                        this.o.cursor &&
                            (sat = eat - 0.3) &&
                            (eat = eat + 0.3);
                        if (this.o.displayPrevious) {
                            ea = this.startAngle + this.angle(this.value);
                            this.o.cursor &&
                                (sa = ea - 0.3) &&
                                (ea = ea + 0.3);
                            this.g.beginPath();
                            this.g.strokeStyle = this.previousColor;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                            this.g.stroke();
                        }
                        this.g.beginPath();
                        this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
                        this.g.stroke();
                        this.g.lineWidth = 2;
                        this.g.beginPath();
                        this.g.strokeStyle = this.o.fgColor;
                        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                        this.g.stroke();
                        return false;
                    }
                }
            });
        }
        // Counters JS
        function initCounters() {
            $('.count-to').countTo();
        }
        // Sparkline
        function initSparkline() {
            $('.sparkline').each(function () {
                var $this = $(this);
                $this.sparkline('html', $this.data());
            });
        }
        $(window).on('scroll', function () {
            $('.card .sparkline').each(function () {
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow + 400) {
                    $(this).addClass('pullUp');
                }
            });
        });
        // Customized line Index page
        $('#linecustom1').sparkline('html', {
            height: '35px',
            width: '100%',
            lineColor: '#e5d1e4',
            fillColor: '#f3e8f2',
            minSpotColor: true,
            maxSpotColor: true,
            spotColor: '#e2a8df',
            spotRadius: 1
        });
        $('#linecustom2').sparkline('html', {
            height: '35px',
            width: '100%',
            lineColor: '#c9e3f4',
            fillColor: '#dfeefa',
            minSpotColor: true,
            maxSpotColor: true,
            spotColor: '#8dbfe0',
            spotRadius: 1
        });
        $('#linecustom3').sparkline('html', {
            height: '35px',
            width: '100%',
            lineColor: '#efded3',
            fillColor: '#f8f0ea',
            minSpotColor: true,
            maxSpotColor: true,
            spotColor: '#e0b89d',
            spotRadius: 1
        });
        // Keep active
        $.each($('.menu .list li.active'), function (i, val) {
            var $activeAnchors = $(val).find('a:eq(0)');
            $activeAnchors.addClass('toggled');
            $activeAnchors.next().show();
        });
        $('.ml-menu li a').on('click', function () {
            $(this).addClass('toggled');
        });
        $('.sidebar .menu .list').slimscroll({
            height: 'calc(100vh - 65px)',
            color: 'rgba(0,0,0,0.2)',
            position: 'left',
            size: '2px',
            alwaysVisible: false,
            borderRadius: '3px',
            railBorderRadius: '0'
        });
        $('.ls-toggle-btn').on('click', function () {
            $('body').toggleClass('ls-toggle-menu');
        });
        $('.boxs-close').on('click', function () {
            var element = $(this);
            var cards = element.parents('.card');
            cards.addClass('closed').fadeOut();
        });
        function menuToggle() {
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
    MainComponent = __decorate([
        Component({
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());
export { MainComponent };
//# sourceMappingURL=main.component.js.map