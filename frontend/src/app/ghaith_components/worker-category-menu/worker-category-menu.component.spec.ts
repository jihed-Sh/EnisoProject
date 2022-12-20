import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerCategoryMenuComponent } from './worker-category-menu.component';

describe('WorkerCategoryMenuComponent', () => {
  let component: WorkerCategoryMenuComponent;
  let fixture: ComponentFixture<WorkerCategoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerCategoryMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
