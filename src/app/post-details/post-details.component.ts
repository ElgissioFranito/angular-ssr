import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-post-details',
  imports: [
    RouterLink
  ],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent implements OnInit {

  post: any;
  errorMessage: string = '';

  private route = inject(ActivatedRoute);
  private postsService = inject(PostsService);


  plateformId = inject(PLATFORM_ID);
  ngOnInit(): void {

    if (isPlatformBrowser(this.plateformId)) {
      console.log('[ON CLIENT] [init AboutPage]');
    } else if (isPlatformServer(this.plateformId)) {
      console.log('[ON SERVER] [init AboutPage]');
    }

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.postsService.getPostById(+id).subscribe({
        next: (data) => this.post = data,
        error: (err) => this.errorMessage = 'Article non trouvé'
      });
    }

  }
}
