import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuloServiceService } from 'src/app/services/modulo-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

   id?: number;
   segmentos: any[] = [];

     constructor(private segmentosService: ModuloServiceService,
      private route: ActivatedRoute
     ) {

     }

    ngOnInit(): void {
      debugger;
       this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.id = idParam ? +idParam : 5;
      console.log('ID recibido en HomeComponent:', this.id);

      this.getLstSegmentos(this.id);
    });



  }


  getLstSegmentos(id: number){
    this.segmentosService.getSegmentosByModulo(id).subscribe(
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
