import { async, TestBed } from '@angular/core/testing';
import { JqueryDatatableComponent } from './jquery-datatable.component';
describe('JqueryDatatableComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [JqueryDatatableComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(JqueryDatatableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=jquery-datatable.component.spec.js.map