import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CountryListPageComponent } from "./country-list-page.component";

describe('CountryListPageComponent', () => {
  let component: CountryListPageComponent;
  let fixture: ComponentFixture<CountryListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
