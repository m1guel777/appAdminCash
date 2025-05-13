import { Component, OnInit } from '@angular/core';
import { ModuloServiceService } from 'src/app/services/modulo-service.service';

@Component({
  selector: 'app-oportunidades-de-negocio',
  templateUrl: './oportunidades-de-negocio.component.html',
  styleUrls: ['./oportunidades-de-negocio.component.css']
})
export class OportunidadesDeNegocioComponent implements OnInit{

   segmentos: any[] = [];

   constructor(private segmentosService: ModuloServiceService) { }
  ngOnInit(): void {

    this.segmentosService.getSegmentosByModulo(5).subscribe(
      (data) => {
        this.segmentos = data;
        console.log(this.segmentos); // Verifica los datos en la consola
      },
      (error) => {
        console.error('Error al cargar los segmentos', error);
      }
    );

  }

}
