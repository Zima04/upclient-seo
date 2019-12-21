import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QustionsScreenComponent } from './qustions-screen.component';

describe('QustionsScreenComponent', () => {
  let component: QustionsScreenComponent;
  let fixture: ComponentFixture<QustionsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QustionsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QustionsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
