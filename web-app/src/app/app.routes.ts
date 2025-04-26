import { Routes } from '@angular/router';
import { LiveComponent } from './pages/live/live.component';
import { FullTimeComponent } from './pages/full-time/full-time.component';





export const routes: Routes = [
    { path: '', component: LiveComponent },
    { path: 'full-time', component: FullTimeComponent }, // Route pour LiveComponent
    // Route pour LiveComponent
];