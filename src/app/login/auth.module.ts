import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

@NgModule({
    declarations: [
        LoginComponent,
        SignUpComponent
    ],
    imports: [
      CommonModule,
      FormsModule
    ],
    exports: [
        LoginComponent,
        SignUpComponent
    ]
  })
  export class AuthModule { }