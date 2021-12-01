import { Component } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public firestoreService: FirestoreService) { }

  ngOnInit() {}

  crearProducto(){
    console.log("crear")
    const data = {
      nombre: 'test',
      precio: 30
    }
    const path = 'productos/'
    const id = '001'
    this.firestoreService.creardocumento(data, path, id )
  }

}
