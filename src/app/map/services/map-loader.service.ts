import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MapLoaderService {
  constructor() {}

  leerArchivo(archivo: File): Promise<number[][]> {
    return new Promise((resolve, reject) => {
      const lector = new FileReader();
      lector.onload = () => {
        const contenido = lector.result as string;
        const lineas = contenido.split('\n');
        const mapa: number[][] = [];
        lineas.forEach((linea) => {
          const fila: number[] = linea.trim().split('').map(Number);
          mapa.push(fila);
        });
        resolve(mapa);
      };
      lector.onerror = () => {
        reject(new Error('Error al leer el archivo'));
      };
      lector.readAsText(archivo);
    });
  }

  leerArchivoPorDefecto(ruta: string): Promise<number[][]> {
    return fetch(ruta)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al cargar el archivo por defecto');
        }
        return response.text();
      })
      .then((contenido) => {
        const lineas = contenido.split('\n');
        const mapa: number[][] = [];
        lineas.forEach((linea) => {
          const fila: number[] = linea.trim().split('').map(Number);
          mapa.push(fila);
        });
        return mapa;
      });
  }
}
