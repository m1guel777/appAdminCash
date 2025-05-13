import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuloServiceService {


  private apiUrl = 'http://localhost:8000/api/modulos';
  private apiUrlSegmento = 'http://localhost:8000/api/segmentos';

  constructor(private http: HttpClient) { }

  // Obtener todos los módulos
  getModulos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Obtener segmentos por ID de módulo
  getSegmentosByModulo(moduloId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${moduloId}/segmentos`);
  }


   crearSegmento(segmento: any) {
    const formData = new FormData();
    formData.append('nombre', segmento.nombre);
    formData.append('precio', segmento.precio.toString());
    formData.append('descripcion', segmento.descripcion);
    formData.append('modulo_id', segmento.modulo);
    formData.append('imagen', segmento.imagen);

    return this.http.post(this.apiUrlSegmento, formData);
  }


  //  private host = 'http://127.0.0.1:8000/api/modulos/5/segmentos';  // URL de tu API


  // // Método para obtener los segmentos
  // getSegmentos(): Observable<any> {
  //   return this.http.get<any>(this.host);
  // }

}
