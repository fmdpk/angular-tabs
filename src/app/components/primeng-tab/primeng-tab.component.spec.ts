import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengTabComponent } from './primeng-tab.component';

describe('PrimengTabComponent', () => {
  let component: PrimengTabComponent;
  let fixture: ComponentFixture<PrimengTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimengTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
