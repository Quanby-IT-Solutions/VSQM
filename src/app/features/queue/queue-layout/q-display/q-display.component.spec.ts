import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QDisplayComponent } from './q-display.component';

describe('QDisplayComponent', () => {
  let component: QDisplayComponent;
  let fixture: ComponentFixture<QDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
