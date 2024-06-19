import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTaskComponentComponent } from './no-task.component';

describe('NoTaskComponentComponent', () => {
  let component: NoTaskComponentComponent;
  let fixture: ComponentFixture<NoTaskComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoTaskComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoTaskComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
