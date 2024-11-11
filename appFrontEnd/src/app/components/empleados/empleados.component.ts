import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder,Validators } from '@angular/forms';
import { HttpEmpleadosService } from '../../services/http-empleados.service';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent implements OnInit {
  private formbuilder = new FormBuilder();
  empleadosForm = this.formbuilder.group({
    nombre:['',Validators.required],
    apellido:['',Validators.required],
    email:['',Validators.required],
    telefono:[''],
    direccion:[''],
    posicion:['',Validators.required],
    salario:['',Validators.required],
    contrato:[''],
    estado:['',Validators.required]
  })

  empleados:any;
  mensaje:any;

  constructor(private empledosService:HttpEmpleadosService){}

  ngOnInit(): void {
    this.empledosService.getEmpleados().subscribe(data=>{
      this.empleados = data;      
    });      
  }

  guardar(){
    this.empledosService.createEmpleado(this.empleadosForm.value).subscribe(data=>{
      this.mensaje = data;    
      console.log(this.mensaje)  
    });   
    
  }

}
