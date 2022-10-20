import { Injectable } from '@angular/core';
import { collectionData } from '@angular/fire/firestore';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
} from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Fbdata } from '../interfaces/fbdata';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor() {}

  addData(data: Fbdata): Promise<any> {
    const dataRef = collection(getFirestore(), 'data');
    return addDoc(dataRef, data);
  }

  getData(): Observable<Fbdata[]> {
    const dataRef = collection(getFirestore(), 'data');
    return collectionData(dataRef, { idField: 'id' }) as Observable<Fbdata[]>;
  }

  deleteData(id: string) {
    const dataDocRef = doc(getFirestore(), `data/${id}`);
    return deleteDoc(dataDocRef);
  }
}
