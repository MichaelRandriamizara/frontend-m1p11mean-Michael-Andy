import {DatePipe} from '@angular/common';

export function formatDouble (value: number): string {
    return value.toFixed(2);
}


export function formatDateTime(date: any): string {
    if (!date) { return ''; } // Handle null or undefined dates

    const gmtPlus3Offset = 3 * 60 * 60 * 1000; // GMT+3 offset in milliseconds
    const dateWithOffset = new Date(new Date(date).getTime() - gmtPlus3Offset);

    const datePipe = new DatePipe('en-US');
    return datePipe.transform(dateWithOffset, 'dd/MM/yyyy HH:mm') || '';
}
