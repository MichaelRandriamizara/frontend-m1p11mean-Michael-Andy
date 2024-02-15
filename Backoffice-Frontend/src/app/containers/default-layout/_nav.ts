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
  }

];
