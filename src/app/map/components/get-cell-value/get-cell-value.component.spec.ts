import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCellValueComponent } from './get-cell-value.component';

describe('GetCellValueComponent', () => {
  let component: GetCellValueComponent;
  let fixture: ComponentFixture<GetCellValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetCellValueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetCellValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
