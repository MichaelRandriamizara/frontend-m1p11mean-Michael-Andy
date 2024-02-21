import { INavData } from '@coreui/angular';
import {AUTH} from "../../auth/auth";

export interface CustomNavData extends INavData {
  auth?: number;
}

export const navItems: CustomNavData[] = [
  {
    name: 'Tableau de bord',
    url: '/dashboard',
    auth: AUTH.EMPLOYEE.value,
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Tâche',
    url: '/tache',
    auth: AUTH.EMPLOYEE.value,
    iconComponent: { name: 'cil-list' },
  },
  {
    name: 'Service',
    url: '/service',
    auth: AUTH.ADMIN.value,
    iconComponent: { name: 'cil-star' },
  },
  {
    name: 'Employé',
    url: '/employe',
    auth: AUTH.ADMIN.value,
    iconComponent: { name: 'cil-people' },
  },
  {
    name: 'Type de dépense',
    url: '/type-depense',
    auth: AUTH.ADMIN.value,
    iconComponent: { name: 'cil-drop' },
  },
  {
    name: 'Offre spéciale',
    url: '/special-service',
    auth: AUTH.ADMIN.value,
    iconComponent: { name: 'cil-dollar' },
  },
  {
    name: 'Paiement de dépense',
    url: '/paiement-depense',
    auth: AUTH.ADMIN.value,
    iconComponent: { name: 'cil-drop' },
    children: [
      {
        name: 'Depense mensuelle',
        url: '/paiement-depense/liste-mensuel'
      },
      {
        name: 'Depense occasionnelle',
        url: '/paiement-depense/liste-occasionnel'
      }
    ]
  },
  {
    name: 'Modifier mot de passe',
    url: '/employe/modifier-mot-de-passe',
    auth: AUTH.EMPLOYEE.value,
    iconComponent: { name: 'cil-lock-locked' },
  },

];
