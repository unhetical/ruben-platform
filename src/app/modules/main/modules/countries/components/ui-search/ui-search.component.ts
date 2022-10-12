import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setFilterBy } from 'src/app/state/actions/countries.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-ui-search',
  templateUrl: './ui-search.component.html',
  styleUrls: ['./ui-search.component.scss'],
})
export class UiSearchComponent implements OnInit {
  query: string = '';
  selectedRegion: any = null;
  regionOptions = [
    { name: 'Africa', id: 'Africa' },
    { name: 'America', id: 'Americas' },
    { name: 'Asia', id: 'Asia' },
    { name: 'Europe', id: 'Europe' },
    { name: 'Oceania', id: 'Oceania' },
  ];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  setFilters() {
    const region = this.selectedRegion?.toLowerCase();
    const query = this.query?.toLowerCase();

    this.store.dispatch(
      setFilterBy({
        filters: {
          filterRegion: region,
          filterQuery: query,
        },
      })
    );
  }
}
