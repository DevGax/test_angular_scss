import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasesyComponent } from './clasesy.component';

describe('ClasesyComponent', () => {
  let component: ClasesyComponent;
  let fixture: ComponentFixture<ClasesyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasesyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasesyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
