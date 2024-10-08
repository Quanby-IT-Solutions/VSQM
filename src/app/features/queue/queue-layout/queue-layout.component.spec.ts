import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueLayoutComponent } from './queue-layout.component';

describe('QueueLayoutComponent', () => {
  let component: QueueLayoutComponent;
  let fixture: ComponentFixture<QueueLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueueLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueueLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
