import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logint',
  templateUrl: './logint.component.html',
  styleUrls: ['./logint.component.scss']
})
export class LogintComponent implements OnInit{

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  logintForm!: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router){}

  ngOnInit(): void {
    this.logintForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onLogint(){

    if(this.logintForm.valid){

      console.log(this.logintForm.value)
      //Envía el objeto a la base de datos

      this.auth.logint(this.logintForm.value)
      .subscribe({
        next:(res=>{
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Acceso Concedio",
            showConfirmButton: false,
            timer: 2000
          });
          this.logintForm.reset();
          this.router.navigate(['dashboardt']);
        })
        ,error:(err=>{
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Acceso Denegado",
            text: "Usuario o contraseña son incorrectos",
            showConfirmButton: false,
            timer: 2500
          });
        })
      })

    }else{
      console.log("Formulario Inválido");
      Swal.fire({
        title: "Formulario Inválido",
        text: "Por favor complete el formulario",
        icon: "error"
      });
      ValidateForm.validateAllFormFileds(this.logintForm);
    }
  }
}
