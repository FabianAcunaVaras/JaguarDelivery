import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Producto } from './models';


@Component({
  selector: 'app-mesero',
  templateUrl: './mesero.page.html',
  styleUrls: ['./mesero.page.scss'],
})
export class MeseroPage implements OnInit {

  productos: Producto[] = [];

  private path = 'productos/';
  private path2 = 'clientes/';

  pedido: Producto = {
    nombre: '',
    mesa: null,
    pedido: [],
    id: this.firestoreService.obtenerid(),
    fecha: new Date()
  };

  enableNuevoPedido = false;
  enableNuevoMenu = false;

  constructor(public firestoreService: FirestoreService) { }

  ngOnInit(){
    this.obtenerProductos();
  }

  nuevoPedido(){
    this.enableNuevoPedido = true;
  }

  nuevoMenu(){
    this.enableNuevoMenu = true;
  }

  obtenerProductos(){
    this.firestoreService.obtenerColeccion<Producto>(this.path).subscribe( res => {

      this.productos = res;

    });
  }

  agregarPedido(val: Producto){
    this.firestoreService.creardocumento(this.pedido, this.path2, this.pedido.id);
  }

}
