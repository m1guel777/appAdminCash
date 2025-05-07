import { AfterViewInit, Component } from '@angular/core';

declare var $: any; // Para poder usar jQuery


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    $('.right-side-toggle').off('click').on('click', function () {
      const $sidebar = $('.right-sidebar');
      if ($sidebar.hasClass('shw-rside')) {
        $sidebar.removeClass('shw-rside').css('right', '-300px');
      } else {
        $sidebar.addClass('shw-rside').css('right', '0');
      }
    });
  }




}
