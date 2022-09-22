import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-detail-page',
  templateUrl: './country-detail-page.component.html',
  styleUrls: ['./country-detail-page.component.scss'],
})
export class CountryDetailPageComponent implements OnInit {
  country: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (param) => (this.country = JSON.parse(param.country))
    );
  }
}
