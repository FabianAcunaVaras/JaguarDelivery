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
      // console.log("borrar2")
      const collection = this.database.collection(path);
      return  collection.doc(id).delete();
    }

    actualizardocumento(data:any,path: string, id: string){
      const collection = this.database.collection(path);
      return  collection.doc(id).update(data)
    }
    
    obtenerid(){
      return this.database.createId();

    }

    obtenerColeccion<tipo>(path: string){
      const coleccion = this.database.collection<tipo>(path);
      return coleccion.valueChanges();

    }
   
}
