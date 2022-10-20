import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Fbdata } from './interfaces/fbdata';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-firebase-crud',
  templateUrl: './firebase-crud.component.html',
  styleUrls: ['./firebase-crud.component.scss'],
})
export class FirebaseCRUDComponent implements OnInit {
  data$!: Observable<Fbdata[]>;
  form!: FormGroup;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.getData();
    this.initDefaultForm();
  }

  initDefaultForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      param1: new FormControl('', [Validators.required]),
    });
  }

  getData() {
    this.data$ = this.firebaseService.getData();
  }

  async addData() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      console.log('form ok');
      return;
    }
    const data = {
      ...this.form.value,
      id: Math.round(Math.random()).toString(),
    };
    await this.firebaseService.addData(data);
    this.form.reset();
  }

  async deleteData(id: string) {
    await this.firebaseService.deleteData(id);
  }
}
