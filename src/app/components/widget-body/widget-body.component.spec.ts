import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetBodyComponent } from './widget-body.component';

describe('WidgetBodyComponent', () => {
  let component: WidgetBodyComponent;
  let fixture: ComponentFixture<WidgetBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetBodyComponent]
    });
    fixture = TestBed.createComponent(WidgetBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
