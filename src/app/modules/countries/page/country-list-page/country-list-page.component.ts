import { selectData } from './../../../../state/selectors/countries.selectors';
import { selectLoading } from '../../../../state/selectors/countries.selectors';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  loadCountries,
  resetCountries,
} from 'src/app/state/actions/countries.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-list-page',
  templateUrl: './country-list-page.component.html',
  styleUrls: ['./country-list-page.component.scss'],
})
export class CountryListPageComponent implements OnInit, OnDestroy {
  loading$: Observable<boolean> = new Observable();

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(loadCountries());
    this.loading$ = this.store.select(selectLoading);
  }

  ngOnDestroy(): void {
    this.store.dispatch(resetCountries());
  }
}
