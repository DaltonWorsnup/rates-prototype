import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyComponent } from './strategy.component';

describe('EditorComponent', () => {
  let component: StrategyComponent;
  let fixture: ComponentFixture<StrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
