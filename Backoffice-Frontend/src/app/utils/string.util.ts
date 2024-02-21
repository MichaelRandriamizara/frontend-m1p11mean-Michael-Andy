import { DatePipe } from '@angular/common';


export function transformMonthToFrench(monthNumber: number): string {
  const months: string[] = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  if (monthNumber >= 1 && monthNumber <= 12) {
    return months[monthNumber - 1];
  } else {
    return 'Mois invalide';
  }
}

export function formatDate(date: any): string {
  const datePipe = new DatePipe('en-US');
  return datePipe.transform(date, 'dd/MM/yyyy') || '';
}


export function formatDateInput(date: string): string {
  const datePipe = new DatePipe('en-US');
  return datePipe.transform(date, 'yyyy-MM-dd') || '';
}

export function formatDateTime(date: any): string {
  const datePipe = new DatePipe('en-US');
  return datePipe.transform(date, 'dd/MM/yyyy HH:mm') || '';
}

export function getStatus(status: number): string {
  switch (status) {
    case 0:
      return 'Créé';
    case 1:
      return 'En cours';
    case 2:
      return 'Terminé';
    case 3:
      return 'Payé';
    case -1:
      return 'Annulé';
    default:
      return 'Statut inconnu';
  }
}
