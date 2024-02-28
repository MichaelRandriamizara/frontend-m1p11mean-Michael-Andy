import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppointmentListComponent} from './appointment-list.component';

const routes: Routes = [
    {
        path: '',
        component: AppointmentListComponent,
        data: {
            title: 'Liste rendez-vous',
        },
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppointmentListRoutingModule {
}
