import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAppTextComponent } from './weather-app-text.component';

describe('WeatherAppTextComponent', () => {
  let component: WeatherAppTextComponent;
  let fixture: ComponentFixture<WeatherAppTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherAppTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherAppTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
