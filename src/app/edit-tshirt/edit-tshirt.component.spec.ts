import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTshirtComponent } from './edit-tshirt.component';

describe('EditTshirtComponent', () => {
  let component: EditTshirtComponent;
  let fixture: ComponentFixture<EditTshirtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTshirtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTshirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
