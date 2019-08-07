import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFixComponent } from './menu-fix.component';

describe('MenuFixComponent', () => {
  let component: MenuFixComponent;
  let fixture: ComponentFixture<MenuFixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
