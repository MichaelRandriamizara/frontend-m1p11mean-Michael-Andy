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
