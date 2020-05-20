import { async, TestBed } from '@angular/core/testing';
import { RangeSlidersComponent } from './range-sliders.component';
describe('RangeSlidersComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RangeSlidersComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RangeSlidersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=range-sliders.component.spec.js.map