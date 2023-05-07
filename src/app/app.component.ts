import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from "rxjs";
import {MatSidenav} from "@angular/material/sidenav";
import {AuthService} from "./shared/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  //title = 'kotProg';
  page = 'main';
  routes: Array<any> = [];
  loggedInUser?: firebase.default.User | null;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
      this.routes = this.router.config.map(conf => conf.path) as string[];
      this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((events: any) => {
        const currentPage =(events.urlAfterRedirects as string).split('/')[1] as string;
        if(this.routes.includes(currentPage)){
          this.page = currentPage;
        }
      });
      this.authService.isUserLoggedIn().subscribe(user=>{
        this.loggedInUser = user;
      },error =>{
        console.log(error);
      })
  }

  oldalValtas(kivalasztottOldal: string){
      this.router.navigateByUrl(kivalasztottOldal) ;
  }
  onToggleSideNav(sidenav: MatSidenav){
      sidenav.toggle()
  }

  onClose(event: boolean, sidenav: MatSidenav) {
    if(event){
      sidenav.close();
    }
  }

  logOut(){
      this.authService.logout().then(()=>{
        console.log('Kijelentkeztél');
      }).catch(error =>{
        console.log(error);
      });
    }

}

