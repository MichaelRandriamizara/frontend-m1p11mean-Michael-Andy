import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {getAuth} from "./auth";
import {StorageService} from "../services/auth/storage.service";

export interface Auth {
  value: number;
  landingPage: string[]
}

export interface AuthName{
  _id: string;
  name: string;
  value: number;
}


export const getAuthGuard: ({value, landingPage}: Auth) => CanActivateFn = ({value, landingPage}: Auth) => {
  return (route, state) => {
    const authName: AuthName = inject(StorageService).getRole();
    const router: Router = inject(Router);
    if (authName) {
      const roleValue = authName.value;
      if (value <= roleValue) {
        return true;
      }
      return router.navigate(getAuth(roleValue).landingPage);
    }
    return router.navigate(["/403"]);
  };
}
