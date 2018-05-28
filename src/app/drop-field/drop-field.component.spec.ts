import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropFieldComponent } from './drop-field.component';

describe('DropFieldComponent', () => {
  let component: DropFieldComponent;
  let fixture: ComponentFixture<DropFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
