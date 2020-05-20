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
var JqueryKnobComponent = /** @class */ (function () {
    function JqueryKnobComponent() {
    }
    JqueryKnobComponent.prototype.ngOnInit = function () {
        $(function () {
            $('.knob').knob({
                draw: function () {
                    // "tron" case
                    if (this.$.data('skin') === 'tron') {
                        var a = this.angle(this.cv) // Angle
                        , r = true;
                        var sa = this.startAngle // Previous start angle
                        , ea = void 0 // Previous end angle
                        , sat = this.startAngle // Start angle
                        , eat = sat + a; // End angle
                        this.g.lineWidth = this.lineWidth;
                        this.o.cursor
                            && (sat = eat - 0.3)
                            && (eat = eat + 0.3);
                        if (this.o.displayPrevious) {
                            ea = this.startAngle + this.angle(this.value);
                            this.o.cursor
                                && (sa = ea - 0.3)
                                && (ea = ea + 0.3);
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
        });
    };
    JqueryKnobComponent = __decorate([
        Component({
            selector: 'app-jquery-knob',
            templateUrl: './jquery-knob.component.html',
            styleUrls: ['./jquery-knob.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], JqueryKnobComponent);
    return JqueryKnobComponent;
}());
export { JqueryKnobComponent };
//# sourceMappingURL=jquery-knob.component.js.map