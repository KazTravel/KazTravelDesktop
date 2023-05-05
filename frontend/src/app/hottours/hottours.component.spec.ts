import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HottoursComponent } from './hottours.component';

describe('HottoursComponent', () => {
  let component: HottoursComponent;
  let fixture: ComponentFixture<HottoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HottoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HottoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
