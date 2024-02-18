import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import {StorageService} from '../../services/storage.service';
import {askConfirmation} from '../../utils/sweet-alert.utils';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    isLogged = false;

    constructor(public location: Location, private router: Router, private storageService: StorageService,private authService: AuthService) {}

    logout() {
        askConfirmation("Voulez-vous vraiment vous déconnecter ?", () => {
            this.storageService.clean();
            this.authService.emitLoginStatusChange(false);
            this.router.navigate(['/home']);
        });
    }

    ngOnInit() {
        this.authService.getLoginStatusChanged().subscribe(isLogged => {
            this.isLogged = isLogged;
        });
        if (this.storageService.getUser() != null) {
            this.isLogged = true;
        }
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
        if (event instanceof NavigationStart) {
           if (event.url != this.lastPoppedUrl)
               this.yScrollStack.push(window.scrollY);
       } else if (event instanceof NavigationEnd) {
           if (event.url == this.lastPoppedUrl) {
               this.lastPoppedUrl = undefined;
               window.scrollTo(0, this.yScrollStack.pop());
           } else
               window.scrollTo(0, 0);
       }
     });
     this.location.subscribe((ev:PopStateEvent) => {
         this.lastPoppedUrl = ev.url;
     });
    }

    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '#/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '#/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }
}
