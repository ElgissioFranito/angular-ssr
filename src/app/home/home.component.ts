import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  plateformId = inject(PLATFORM_ID);
  ngOnInit(): void {
    if (isPlatformBrowser(this.plateformId)) {
      console.log('[ON CLIENT] [init HomePage]');
    } else if (isPlatformServer(this.plateformId)) {
      console.log('[ON SERVER] [init HomePage]');
    }
  }

}
