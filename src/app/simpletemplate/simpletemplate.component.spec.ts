import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpletemplateComponent } from './simpletemplate.component';

describe('SimpletemplateComponent', () => {
  let component: SimpletemplateComponent;
  let fixture: ComponentFixture<SimpletemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpletemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpletemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
