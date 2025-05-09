import { AfterViewInit, Component, OnDestroy } from '@angular/core';

declare var $: any; // Para poder usar jQuery


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit , OnDestroy{

  private scriptElement: HTMLScriptElement | undefined;

  ngAfterViewInit(): void {
    this.loadScript('assets/js/custom.min.js');
  }


  loadScript(src: string): void {
    this.scriptElement = document.createElement('script');
    this.scriptElement.src = src;
    this.scriptElement.type = 'text/javascript';
    this.scriptElement.async = false;
    document.body.appendChild(this.scriptElement);
  }

  ngOnDestroy(): void {
    if (this.scriptElement) {
      document.body.removeChild(this.scriptElement);
    }
  }



}
