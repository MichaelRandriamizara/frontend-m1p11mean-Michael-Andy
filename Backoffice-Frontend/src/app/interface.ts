import {ThemePalette} from "@angular/material/core";

export interface RowAction {
  color: ThemePalette,
  icon: string,
  onclick: (row: any, index: number) => any,
  type?: "edit" | "delete" | string
}

export interface SortResult {
  field: string,
  method: "ASC" | "DESC" | ""
}

export type GetterFn = (item: any) => any;

export interface ErrorResponse {
  error: {
    code: number,
    message: string
  }
}

export interface HttpError {
  error: ErrorResponse,
  message: string,
  status: number
}

