import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnFooterComponent } from './learn-footer.component';

describe('LearnFooterComponent', () => {
  let component: LearnFooterComponent;
  let fixture: ComponentFixture<LearnFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
