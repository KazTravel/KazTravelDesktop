import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercabComponent } from './usercab.component';

describe('UsercabComponent', () => {
  let component: UsercabComponent;
  let fixture: ComponentFixture<UsercabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
