import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db:AngularFirestore) {}

   update(data){
     console.log("3");
     return this.db.collection('users').add(data);
   }
   
}
