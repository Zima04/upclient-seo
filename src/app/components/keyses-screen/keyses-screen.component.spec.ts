import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeysesScreenComponent } from './keyses-screen.component';

describe('KeysesScreenComponent', () => {
  let component: KeysesScreenComponent;
  let fixture: ComponentFixture<KeysesScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeysesScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeysesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
