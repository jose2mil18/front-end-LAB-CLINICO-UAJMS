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
var SortableComponent = /** @class */ (function () {
    function SortableComponent() {
    }
    SortableComponent.prototype.ngOnInit = function () {
        $(function () {
            $('.dd').nestable();
            $('.dd').on('change', function () {
                var $this = $(this);
                var serializedData = JSON.stringify($($this).nestable('serialize'));
                $this.parents('div.body').find('textarea').val(serializedData);
            });
        });
    };
    SortableComponent = __decorate([
        Component({
            selector: 'app-sortable',
            templateUrl: './sortable.component.html',
            styleUrls: ['./sortable.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], SortableComponent);
    return SortableComponent;
}());
export { SortableComponent };
//# sourceMappingURL=sortable.component.js.map