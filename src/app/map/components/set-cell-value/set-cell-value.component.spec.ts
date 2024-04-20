import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCellValueComponent } from './set-cell-value.component';

describe('SetCellValueComponent', () => {
  let component: SetCellValueComponent;
  let fixture: ComponentFixture<SetCellValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetCellValueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetCellValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
