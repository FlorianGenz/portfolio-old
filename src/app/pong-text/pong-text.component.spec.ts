import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PongTextComponent } from './pong-text.component';

describe('PongTextComponent', () => {
  let component: PongTextComponent;
  let fixture: ComponentFixture<PongTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PongTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PongTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
