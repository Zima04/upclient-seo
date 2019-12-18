import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeysesFormComponent } from './keyses-form.component';

describe('KeysesFormComponent', () => {
  let component: KeysesFormComponent;
  let fixture: ComponentFixture<KeysesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeysesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeysesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
