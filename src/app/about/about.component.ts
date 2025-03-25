import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{

  plateformId = inject(PLATFORM_ID);
  ngOnInit(): void {
    if (isPlatformBrowser(this.plateformId)) {
      console.log('[ON CLIENT] [init AboutPage]');
    } else if (isPlatformServer(this.plateformId)) {
      console.log('[ON SERVER] [init AboutPage]');
    }
  }

}
