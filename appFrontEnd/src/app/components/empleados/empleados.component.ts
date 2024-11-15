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
    estado:['',Validators.required]
  })

  empleadoForm = this.formbuilder.group({
    id:[''],
    nombre:['',Validators.required],
    apellido:['',Validators.required],
    email:['',Validators.required],
    telefono:[''],
    direccion:[''],
    posicion:['',Validators.required],
    salario:['',Validators.required],
    fecha_contratacion:[''],
    estado:['',Validators.required],
    created_at: [''],
    updated_at: ['']
  })

  isEdit:Boolean = false;
  empleados:any;
  empleado:any;
  mensaje:any;
  idEditar:Number = 0;
  idElminar:Number = 0;

  constructor(private empledosService:HttpEmpleadosService){}

  ngOnInit(): void {
    this.empledosService.getEmpleados().subscribe(data=>{
      this.empleados = data;      
    });      
  }

  guardar(){
    this.empledosService.createEmpleado(this.empleadosForm.value).subscribe(data=>{
      console.log("mensaje:", data) ;
    });
    
    console.log(this.empleadosForm.value)
    
  }

  getDataFromId(id:any){
    this.idEditar = Number(id);
    this.isEdit = true;
    this.empledosService.getEmpleado(id).subscribe( data => {
      this.empleado = data;
    })
  }

  eliminar(id:any){
    this.idElminar = Number(id);
    this.empledosService.deleteEmpleado(this.idElminar).subscribe(data => {
      console.log(data)
    })
  }

  guardarCambios(){
    
    console.log(this.empleadoForm.value)
    this.empledosService.updateEmpleado(this.empleadoForm.value,this.idEditar).subscribe(data=>{
      console.log(data)
    })
  }
}
