import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlVsDomComponent } from './html-vs-dom.component';

describe('HtmlVsDomComponent', () => {
  let component: HtmlVsDomComponent;
  let fixture: ComponentFixture<HtmlVsDomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlVsDomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlVsDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
