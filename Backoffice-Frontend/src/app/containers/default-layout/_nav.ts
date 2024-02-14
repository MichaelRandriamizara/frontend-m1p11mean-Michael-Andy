import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Tableau de bord',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Service',
    url: '/service',
    iconComponent: { name: 'cil-star' },
  },
  {
    name: 'Employé',
    url: '/employe',
    iconComponent: { name: 'cil-people' },
  },
  {
    name: 'Type de dépense',
    url: '/type-depense',
    iconComponent: { name: 'cil-drop' },
  },
  {
    name: 'Offre spéciale',
    url: '/special-service',
    iconComponent: { name: 'cil-dollar' },
  }

];
