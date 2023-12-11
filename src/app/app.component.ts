import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({   
  selector: 'app-root',
  templateUrl: 'app.component.html', 
  styleUrls: ['app.component.scss'], 
}) export class AppComponent { 
 constructor() {     // Recuperar datos del localStorage //   
 const storedUserData = localStorage.getItem('userData');   
 // LOCALSTORAGE NO BORRAR PORFAVOR // 
   
// Verificar si hay datos almacenados   
 if (storedUserData) {     
// Convertir la cadena JSON almacenada en un objeto    
 const userData = JSON.parse(storedUserData);   
// Acceder al email y contraseña almacenados    
 const email = userData.email;     
 const password = userData.password;    
// Agregar un delay de 3 segundos    
setTimeout(() => {     
// Delay de 3 segundos      
console.log('Email almacenado después de 3 segundos:', email); 
console.log('Contraseña almacenada después de 3 segundos:', password);       }, 3000); 
   }  
 }
}