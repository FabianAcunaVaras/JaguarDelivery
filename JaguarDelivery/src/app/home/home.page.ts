import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Producto } from './models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  enableNuevoProducto = false;

  productos: Producto[] = [];

  nuevoProducto: Producto;
  //   nombre: '',
  //   precio: null,
  //   descripcion: '',
  //   id: this.firestoreService.obtenerid(),
  //   fecha: new Date()
  // };

  private path = 'productos/';

  constructor(public firestoreService: FirestoreService) { }

  ngOnInit() {
    this.obtenerProductos();
  }

  editarProducto(val: Producto){
    this.firestoreService.obtenerdocumento(this.path, val.id);
  }

  crearProducto(){
    this.firestoreService.creardocumento(this.nuevoProducto, this.path, this.nuevoProducto.id);

  }

  obtenerProductos(){
    this.firestoreService.obtenerColeccion<Producto>(this.path).subscribe( res => {

      this.productos = res;

    });
  }

  borrarProducto(val: Producto){
    // console.log("borrar")
    this.firestoreService.borrardocumento(this.path, val.id);
  }

  ingresarProducto(){
    this.enableNuevoProducto = true;
    this.nuevoProducto = {
      nombre: '',
      precio: null,
      descripcion: '',
      id: this.firestoreService.obtenerid(),
      fecha: new Date()
    };

  }

}
