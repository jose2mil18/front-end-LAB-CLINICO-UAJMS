import { async, TestBed } from '@angular/core/testing';
import { JqueryKnobComponent } from './jquery-knob.component';
describe('JqueryKnobComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [JqueryKnobComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(JqueryKnobComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=jquery-knob.component.spec.js.map