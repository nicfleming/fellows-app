import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FellowsComponent } from './fellows/fellows.component';

const routes: Routes = [
    { path: '', component: FellowsComponent },
    // { path: '/detail', component:}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}