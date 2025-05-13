import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModuloServiceService } from 'src/app/services/modulo-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  segmento = {
    nombre: '',
    precio: '',
    descripcion: '',
    imagen: '',
    modulo: ''
  };

  lstmodulos: any[] = [];

    constructor(private http: HttpClient,
      private moduloService: ModuloServiceService
    ) {}
  ngOnInit(): void {
this.loadModulos();
  }


  onFileSelected(event: any) {
    this.segmento.imagen = event.target.files[0];
  }

  @ViewChild('fileInput') fileInput!: ElementRef;

   onSubmit() {
    this.moduloService.crearSegmento(this.segmento).subscribe(
        response => {
          console.log('Segmento creado', response);

          this.segmento = {
            nombre: '',
            precio: '',
            descripcion: '',
            imagen: '',
            modulo: ''
          };

          if (this.fileInput) {
            this.fileInput.nativeElement.value = '';
          }


        },
        error => {
          console.error('Error al crear el segmento', error);
        }
      );
  }

    loadModulos(): void {
    this.moduloService.getModulos().subscribe(modulos => {
      this.lstmodulos = modulos;
      console.log("modulos",  this.lstmodulos)
    });
  }
}
