import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ui-item',
  templateUrl: './ui-item.component.html',
  styleUrls: ['./ui-item.component.scss']
})
export class UiItemComponent implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit(): void {
  }
}
