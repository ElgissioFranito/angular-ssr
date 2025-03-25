import { Component, inject, PLATFORM_ID } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { RouterLink } from '@angular/router';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-posts',
  imports: [
    RouterLink,
    TruncatePipe
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

  posts: any[] = [];
  errorMessage: string = '';
  private postsService = inject(PostsService);

  plateformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.plateformId)) {
      console.log('[ON CLIENT] [init HomePage]');
    } else if (isPlatformServer(this.plateformId)) {
      console.log('[ON SERVER] [init HomePage]');
    }
    
    this.postsService.getPosts().subscribe({
      next: (data) => this.posts = data,
      error: (err) => this.errorMessage = 'Erreur lors du chargement des articles'
    });
  }
}
