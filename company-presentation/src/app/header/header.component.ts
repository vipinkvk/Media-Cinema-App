import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/core/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  loginStatus: boolean = false;
  currentUser: any;
  loggedInUser: any;
  allMovies: any;
  @ViewChild('close', {
    static: true
}) closeModalButton: ElementRef;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void{
     this.createForm();
     this.loginService.userDetails.subscribe(loggedInUser => {
     this.loggedInUser = loggedInUser;
    }
    );
  }
   private createForm = () =>
  {
      this.loginForm = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required)
    });
  }


  onSubmit = async () =>
  {
    this.submitted = true;
    if (this.loginForm.invalid) {
       return;
    }
    this.currentUser = await this.loginService.logIn(this.loginForm.value);
    this.currentUser ? this.loginStatus = true : this.loginStatus = false;
    if (this.loginStatus){
      this.closeModalButton.nativeElement.click();
    }
  }
  logOut = () =>
  {
    this.loginService.logOut();
  }
}
