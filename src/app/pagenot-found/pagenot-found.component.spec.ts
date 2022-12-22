import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotFoundComponent } from './pagenot-found.component';

describe('PagenotFoundComponent', () => {
  let component: PagenotFoundComponent;
  let fixture: ComponentFixture<PagenotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagenotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagenotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
