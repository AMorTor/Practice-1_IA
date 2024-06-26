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

  coordenadas: string = '';
  valorCelda: number | undefined;

  coordenadasModificar: string = '';
  nuevoValor: number | undefined;

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

  getColor(valor: number): string {
    switch (valor) {
      case 0:
        return 'darkgrey'; // Pared
      case 1:
        return '#FFCC99'; // Color carne
      case 2:
        return '#ADD8E6'; // Color del agua
      case 3:
        return '#FFD700'; // Color de la arena
      case 4:
        return '#00FF00'; // Color verde
      default:
        return 'gray'; // Por defecto
    }
  }
  consultarCelda() {
    const [fila, columna] = this.coordenadas.split(',');
    const filaNum = parseInt(fila.trim()) - 1;
    const columnaNum = columna.trim().toUpperCase().charCodeAt(0) - 65;

    if (
      filaNum >= 0 &&
      filaNum < this.mapa.length &&
      columnaNum >= 0 &&
      columnaNum < this.mapa[0].length
    ) {
      this.valorCelda = this.mapa[filaNum][columnaNum];
    } else {
      this.valorCelda = undefined;
    }
  }

  cambiarValor() {
    const [fila, columna] = this.coordenadasModificar.split(',');
    const filaNum = parseInt(fila.trim()) - 1;
    const columnaNum = columna.trim().toUpperCase().charCodeAt(0) - 65;

    if (
      filaNum >= 0 &&
      filaNum < this.mapa.length &&
      columnaNum >= 0 &&
      columnaNum < this.mapa[0].length
    ) {
      this.mapa[filaNum][columnaNum] = this.nuevoValor || 0;
    } else {
      console.error('Coordenadas inválidas');
    }
  }
}
