import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Tableau de bord',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
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
  }

];
