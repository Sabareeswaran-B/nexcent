import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSystemCardComponent } from './single-system-card.component';

describe('SingleSystemCardComponent', () => {
  let component: SingleSystemCardComponent;
  let fixture: ComponentFixture<SingleSystemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSystemCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleSystemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
