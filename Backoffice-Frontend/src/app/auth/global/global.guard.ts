import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import config from "src/config/server.config.json";
import {StorageService} from "../../services/auth/storage.service";

export const globalGuard: CanActivateFn = (route, state) => {
  if(inject(StorageService).isLoggedIn()) {
    return true;
  }
  return inject(Router).navigate(["/login"]);
};

