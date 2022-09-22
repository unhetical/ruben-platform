import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryModel } from '@core/models/country/country.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectData } from 'src/app/state/selectors/countries.selectors';

@Component({
  selector: 'app-ui-block-item',
  templateUrl: './ui-block-item.component.html',
  styleUrls: ['./ui-block-item.component.scss'],
})
export class UiBlockItemComponent implements OnInit {
  countries$: Observable<readonly CountryModel[]> = new Observable();

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.countries$ = this.store.select(selectData);
  }

  goToCountryDetail(country: CountryModel) {
    const url = this.router.createUrlTree([
      this.router.url + '/' + country.name.common,
    ]);

    // Option 1 => open in a new tab
    // url.queryParams = { country: JSON.stringify(country) };
    // window.open(url.toString(), '_blank');

    // Option 2 => open in the same tab
    this.router.navigate([this.router.url + '/' + country.name.common], {
      queryParams: { country: JSON.stringify(country) },
    });
  }
}
