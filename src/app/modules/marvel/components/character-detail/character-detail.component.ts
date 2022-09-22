import { Component, OnInit } from '@angular/core';
import {
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng-lts/dynamicdialog';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {
  character: any = {
    id: 0,
    name: '',
    description: '',
    thumbnail: { extension: '', path: '' },
  };

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.character = this.config.data;
  }
}
