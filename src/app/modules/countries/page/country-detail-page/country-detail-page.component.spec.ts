import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CountryDetailPageComponent } from "./country-detail-page.component";

describe('CountryDetailPageComponent', () => {
  let component: CountryDetailPageComponent;
  let fixture: ComponentFixture<CountryDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
