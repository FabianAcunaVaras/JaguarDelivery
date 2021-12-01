import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore/';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public database:AngularFirestore) {}

    creardocumento(data: any,path: string, id: string){
      const collection = this.database.collection(path);
      return collection.doc(id).set(data);
    }

    obtenerdocumento(path: string, id: string) {
      const collection = this.database.collection(path);
      return  collection.doc(id).valueChanges();
    }

    borrardocumento(path: string, id: string){
      const collection = this.database.collection(path);
      return  collection.doc(id).delete
    }

    actualizardocumento(data:any,path: string, id: string){
      const collection = this.database.collection(path);
      return  collection.doc(id).update(data)
    }
    

   
}
