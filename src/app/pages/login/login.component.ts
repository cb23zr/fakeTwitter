import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {FakeLoadingService} from "../../shared/services/fake-loading.service";
import {AuthService} from "../../shared/services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  uname = new FormControl('');
  psw = new FormControl('');
  loading:boolean = false;

  constructor(private router: Router, private loadingService: FakeLoadingService, private authService: AuthService) {
  }

  ngOnInit() :void{
  }

  async login(){
    this.loading = true;
    /*try {
      const bool = await this.loadingService.loadingWithPromise(this.uname.value, this.psw.value);
      await this.router.navigateByUrl('/main');
    }catch(error){
        console.error('Hiba!');
        this.loading = false;
      }
      console.log('Finnaly!');
    this.loading = false;
    }*/
    this.authService.login(this.uname.value, this.psw.value).then(cred=>{

    });
}

}
