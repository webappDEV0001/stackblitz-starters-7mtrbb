import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetHeaderComponent } from './widget-header.component';

describe('WidgetHeaderComponent', () => {
  let component: WidgetHeaderComponent;
  let fixture: ComponentFixture<WidgetHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetHeaderComponent]
    });
    fixture = TestBed.createComponent(WidgetHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
