import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenesMensualComponent } from './examenes-mensual.component';

describe('ExamenesMensualComponent', () => {
  let component: ExamenesMensualComponent;
  let fixture: ComponentFixture<ExamenesMensualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenesMensualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenesMensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
