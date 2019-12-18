import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyScreenComponent } from './why-screen.component';

describe('WhyScreenComponent', () => {
  let component: WhyScreenComponent;
  let fixture: ComponentFixture<WhyScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
