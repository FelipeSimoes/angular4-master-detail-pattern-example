import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import * as Controllers from './controllers';

const set: any[] = [];
// create the routes
for (let k in Controllers) {
    if (Controllers[k]) {
        const controller: RouteController = Controllers[k];
        for (let i: number = controller.paths.length - 1; i >= 0; i--) {
            set.push({
                path: controller.paths[i],
                component: controller,
            });
        }
    }
}

const routes: Routes = set;

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class RoutingModule {}
