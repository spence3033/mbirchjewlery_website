import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboSetsComponent } from './combo-sets.component';

describe('ComboSetsComponent', () => {
  let component: ComboSetsComponent;
  let fixture: ComponentFixture<ComboSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboSetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
