import { Component } from '@angular/core';
import { MapLoaderService } from '../../services/map-loader.service';

@Component({
  selector: 'map-table-component',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  mapa: number[][] = [];
  numFilas: number = 0;
  numColumnas: number = 0;
  letrasColumnas: string[] = [];

  constructor(private mapLoader: MapLoaderService) {
    this.cargarMapaPorDefecto();
  }

  cargarMapaPorDefecto() {
    const archivoPorDefecto = 'assets/mapa.txt';
    this.mapLoader
      .leerArchivoPorDefecto(archivoPorDefecto)
      .then((mapa) => {
        this.mapa = mapa;
        this.calcularDimensiones();
        this.generarLetrasColumnas();
      })
      .catch((error) => {
        console.error('Error al cargar el archivo por defecto:', error);
      });
  }

  cargarMapa(event: any) {
    const archivo = event.target.files[0];
    this.mapLoader
      .leerArchivo(archivo)
      .then((mapa) => {
        this.mapa = mapa;
        this.calcularDimensiones();
        this.generarLetrasColumnas();
      })
      .catch((error) => {
        console.error('Error al cargar el archivo:', error);
      });
  }

  calcularDimensiones() {
    this.numFilas = this.mapa.length;
    if (this.numFilas > 0) {
      this.numColumnas = this.mapa[0].length;
    } else {
      this.numColumnas = 0;
    }
  }

  generarLetrasColumnas() {
    this.letrasColumnas = [];
    const letraA = 'A'.charCodeAt(0);
    for (let i = 0; i < this.numColumnas; i++) {
      const letra = String.fromCharCode(letraA + i);
      this.letrasColumnas.push(letra);
    }
  }
}