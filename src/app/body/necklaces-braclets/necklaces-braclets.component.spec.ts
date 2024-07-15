import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecklacesBracletsComponent } from './necklaces-braclets.component';

describe('NecklacesBracletsComponent', () => {
  let component: NecklacesBracletsComponent;
  let fixture: ComponentFixture<NecklacesBracletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NecklacesBracletsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NecklacesBracletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
