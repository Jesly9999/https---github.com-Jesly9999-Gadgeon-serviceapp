import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplifyiotComponent } from './simplifyiot.component';

describe('SimplifyiotComponent', () => {
  let component: SimplifyiotComponent;
  let fixture: ComponentFixture<SimplifyiotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplifyiotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplifyiotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
