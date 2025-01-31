import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogintComponent } from './logint.component';

describe('LogintComponent', () => {
  let component: LogintComponent;
  let fixture: ComponentFixture<LogintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
