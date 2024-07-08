import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signupt',
  templateUrl: './signupt.component.html',
  styleUrls: ['./signupt.component.scss']
})
export class SignuptComponent {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signuptForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router){}

  ngOnInit(): void {
    this.signuptForm = this.fb.group({
      firstName: ['',Validators.required],
      secondName: ['',Validators.required],
      lastName: ['',Validators.required],
      secondlastName: ['',Validators.required],
      email: ['',Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSignupt(){
    if(this.signuptForm.valid){

      console.log(this.signuptForm.value)
      //Envía el objeto a la base de datos

      this.auth.signupt(this.signuptForm.value)
      .subscribe({
        next:(res=>{
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Catedrático registrado",
            showConfirmButton: false,
            timer: 2000
          });
          this.signuptForm.reset();
          this.router.navigate(["logint"]);
        })
        ,error:(err=>{
          alert(err?.error.message)
        })
      })

    }else{
      console.log("Formulario Inválido");
      Swal.fire({
        title: "Formulario Inválido",
        text: "Por favor complete el formulario",
        icon: "error"
      });
      ValidateForm.validateAllFormFileds(this.signuptForm);
    }
  }
}
