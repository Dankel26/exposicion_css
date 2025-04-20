import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageOOCSSComponent } from './landing-page-oocss.component';

describe('LandingPageOOCSSComponent', () => {
  let component: LandingPageOOCSSComponent;
  let fixture: ComponentFixture<LandingPageOOCSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageOOCSSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageOOCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
