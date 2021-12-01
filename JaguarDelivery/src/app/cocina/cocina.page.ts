import { Component, OnInit } from '@angular/core';
import { Producto } from './models';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.page.html',
  styleUrls: ['./cocina.page.scss'],
})
export class CocinaPage implements OnInit {

  constructor(public firestoreService: FirestoreService) { }

  productos: Producto[] = [];

  nuevoProducto: Producto;
  private path = 'clientes/';
  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.firestoreService.obtenerColeccion<Producto>(this.path).subscribe( res => {

      this.productos = res;

    });
  }

}
