import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantiesScreenComponent } from './garanties-screen.component';

describe('GarantiesScreenComponent', () => {
  let component: GarantiesScreenComponent;
  let fixture: ComponentFixture<GarantiesScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarantiesScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarantiesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
