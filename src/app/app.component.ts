import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string = 'Angular Crud ';
   Msg  :String ='';
   hideUpdate :boolean =true;
  employes =[{'name':'samael', position:'Manager',email:"ilich.vladimir@gmail.com"},
             {'name':'vladimir', position:'Designer',email:"ilich.vladimir@gmail.com"},
             {'name':'miriam', position:'Programmer',email:"ilich.vladimir@gmail.com"}
   ];

model :any = {}; 
model2 :any = {};   
addEmploye ():void{
  this.Msg="Campo Agregado";
  this.employes.push(this.model);
}

deleteEmploye(i):void{
 var resp = confirm("Esta Srguro de querer Eliminarlo");
 if(resp){
  this.Msg="Campo Eliminado"; 
  this.employes.splice(i,1);
 }

}
myValue;
editEmploye(i):void{
  this.hideUpdate =false; 
  this.model2.name = this.employes[i].name;
  this.model2.position = this.employes[i].position;
  this.model2.email = this.employes[i].email;
  this.myValue =i;

}
updateEmploye():void{
 let i = this.myValue;
 this.employes[i]=this.model2;
 this.model2={}; 
 this.Msg="Campo Modificado";
 this.hideUpdate =true; 
  //console.log(this.model2);
}

closeAlert():void{
  this.Msg ="";
}
}

