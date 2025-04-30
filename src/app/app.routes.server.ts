// app.routes.server.ts
import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';
export const serverRoutes: ServerRoute[] = [
    {
        path: 'home',
        renderMode: RenderMode.Prerender,
    },
    {
        path: 'about',
        renderMode: RenderMode.Prerender,
    },
    {
        path: 'posts',
        renderMode: RenderMode.Prerender,
    },
    {
        path: 'posts/:id',
        renderMode: RenderMode.Prerender,
        fallback: PrerenderFallback.Server,
        async getPrerenderParams() {
            return [
                { id: '1' },
                { id: '2' },
                { id: '3' },
                // Add more IDs as needed
            ];
        }
    },
    {
        path: '**',
        renderMode: RenderMode.Client,
    },
];

// renderMode: RenderMode.Client,          // This renders the routes on the client (CSR)
// renderMode: RenderMode.Server,          // This page requires user-specific data, so we use SSR
// renderMode: RenderMode.Prerender,       // This page is static, so we prerender it (SSG)