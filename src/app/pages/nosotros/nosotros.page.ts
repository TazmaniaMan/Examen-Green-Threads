import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl'; // Importa mapbox-gl

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {

  constructor() { }

  ngOnInit() {

    // Inicializa el mapa
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoidGF6bWFuaWFtYW4iLCJhIjoiY2xweW9oaW5kMHdwODJpb2Ezamo2bm5jZiJ9.sX22lkw-9-_8-1KNNrUNRw';
    const map = new mapboxgl.Map({
      container: 'map', // El ID del contenedor HTML donde se mostrará el mapa
      style: 'mapbox://styles/mapbox/outdoors-v11', // El estilo del mapa, puedes cambiarlo según tu preferencia
      center: [-70.7058364267186, -33.59888990304551], // Coordenadas iniciales del centro del mapa (longitud, latitud)
      zoom: 13 // Nivel de zoom inicial
    });
    
  }
  }