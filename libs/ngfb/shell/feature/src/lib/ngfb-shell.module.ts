import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@fb-clone/ngfb/shell/ui/layout';
import { Route, RouterModule } from '@angular/router';
import { LayoutComponent } from '@fb-clone/ngfb/shell/ui/layout';

const routes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () =>
          (await import('@fb-clone/ngfb/home/feature')).HomeModule,
      },
    ],
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' }),
  ],
  exports: [RouterModule],
})
export class NgfbShellModule {}
