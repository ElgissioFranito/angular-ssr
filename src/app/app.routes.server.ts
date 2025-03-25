// app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';
export const serverRoutes: ServerRoute[] = [
  {
    path: 'home', 
    renderMode: RenderMode.Server,
},
{
    path: 'about', 
    renderMode: RenderMode.Server,
},
{
    path: 'posts', 
    renderMode: RenderMode.Server,
},
{
    path: '**',
    renderMode: RenderMode.Client,
},
];

// renderMode: RenderMode.Client,          // This renders the routes on the client (CSR)
// renderMode: RenderMode.Server,          // This page requires user-specific data, so we use SSR   
// renderMode: RenderMode.Prerender,       // This page is static, so we prerender it (SSG)