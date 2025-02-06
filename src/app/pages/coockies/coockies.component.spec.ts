import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoockiesComponent } from './coockies.component';

describe('CoockiesComponent', () => {
  let component: CoockiesComponent;
  let fixture: ComponentFixture<CoockiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoockiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoockiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
