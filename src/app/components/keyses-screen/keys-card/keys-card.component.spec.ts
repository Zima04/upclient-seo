import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeysCardComponent } from './keys-card.component';

describe('KeysCardComponent', () => {
  let component: KeysCardComponent;
  let fixture: ComponentFixture<KeysCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeysCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeysCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
