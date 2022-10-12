import { MessageService } from 'primeng-lts/api';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CharacterModel } from '@core/models/character/character.interface';
import { Store } from '@ngrx/store';
import {
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng-lts/dynamicdialog';
import { saveCharacter } from 'src/app/state/actions/characters.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {
  character!: CharacterModel;
  mode = 'view';
  form!: FormGroup;

  constructor(
    private store: Store<AppState>,
    private messageService: MessageService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.character = this.config.data.character;
    this.mode = this.config.data.mode;
    this.createFormGroup();
  }

  // Register Form Controls
  createFormGroup(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      thumbnail: new FormControl(null),
      modified: new FormControl(new Date()),
    });

    if (this.character) {
      this.setDefaultValue();
    }
  }

  /**
   * Save character
   */
  saveCharacter(): void {
    // characterDto podría ser una clase y setear los valores del form.
    const character: CharacterModel = {
      id: this.character.id,
      name: this.form.controls.name.value,
      description: this.form.controls.description.value,
      thumbnail: {  extension: 'jpg', path: this.form.controls.thumbnail.value },
      modified: new Date(),

    };

    if (this.form.valid) {
      this.store.dispatch(saveCharacter({ character }));
      // TODO: if backend request is ok
      if (true) {
        this.ref.close(true);
        this.displayMessage(
          'success',
          'The character has been edited successfully'
        );
      } else {
        this.displayMessage(
          'error',
          'The action could not be performed, please try again later.'
        );
      }
    } else {
      this.displayMessage('error', 'Review the form');
    }
  }

  /**
   * Set initial values
   */
  setDefaultValue(): void {
    this.form.controls.name.setValue(this.character.name);
    this.form.controls.description.setValue(this.character.description);
    this.form.controls.thumbnail.setValue(this.character.thumbnail?.path);
    this.form.controls.modified.setValue(this.character.modified);
  }

  /**
   * Show toast message
   * @param severity "success", "info", "warn" or "error".
   * @param summary string message.
   */
  displayMessage(severity: string, summary: string): void {
    this.messageService.add({
      severity,
      summary,
    });
  }
}
