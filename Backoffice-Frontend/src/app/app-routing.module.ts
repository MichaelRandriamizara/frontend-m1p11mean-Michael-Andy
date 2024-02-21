import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import {getAuthGuard} from "./auth/auth.guard";
import {AUTH} from "./auth/auth";
import {globalGuard} from "./auth/global/global.guard";
import {UpdatePaswordComponent} from "./employee/update-pasword/update-pasword.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate:[globalGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        canActivate: [getAuthGuard(AUTH.EMPLOYEE)],
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'tache',
        canActivate: [getAuthGuard(AUTH.EMPLOYEE)],
        loadChildren: () =>
          import('./task/task.module').then((m) => m.TaskModule)
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
      {
        path: 'type-depense',
        canActivate: [getAuthGuard(AUTH.ADMIN)],
        loadChildren: () =>
          import('./type-depense/type-depense.module').then((m) => m.TypeDepenseModule)
      },
      {
        path: 'paiement-depense',
        canActivate: [getAuthGuard(AUTH.ADMIN)],
        loadChildren: () =>
          import('./type-depense-payment/type-depense-payment.module').then((m) => m.TypeDepensePaymentModule)
      },
      {
        path: 'service',
        canActivate: [getAuthGuard(AUTH.ADMIN)],
        loadChildren: () =>
          import('./service/service.module').then((m) => m.ServiceModule)
      },
      {
        path: 'employe/modifier-mot-de-passe',
        canActivate: [getAuthGuard(AUTH.EMPLOYEE)],
        component: UpdatePaswordComponent
      },
      {
        path: 'employe',
        canActivate: [getAuthGuard(AUTH.ADMIN)],
        loadChildren: () =>
          import('./employee/employee.module').then((m) => m.EmployeeModule)
      },
      {
        path: 'special-service',
        canActivate: [getAuthGuard(AUTH.ADMIN)],
        loadChildren: () =>
          import('./special-service/special-service.module').then((m) => m.SpecialServiceModule)
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
