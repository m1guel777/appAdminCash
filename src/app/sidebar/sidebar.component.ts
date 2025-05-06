import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  sidebarVisible = false;  // Inicialmente está oculto en móviles

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;  // Alternar visibilidad
  }
}
