import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
//import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../shared/user.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: any = false;

  constructor(
    public afAuth: AngularFireAuth,
    //private firestore: AngularFirestore
    ) {
    afAuth.authState.subscribe(user => (this.isLogged = user));
  }

  //Login
  async Login(user: User){
    try{
      return await this.afAuth.signInWithEmailAndPassword(user.email, user.password);
    } catch  (error){
      return console.log('Error de Login', error);
    }
  }

  //Registro
  async Registro(user: User){
    try{
      return await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
    } catch  (error){
      return console.log('Error de Registro', error);
    }
  }

  /*async Registro(email: string, password: string, nombre: string, apellido: string, tipo: string) {
    try {
      // Registrar al usuario en Firebase Authentication
      const authResult = await this.afAuth.createUserWithEmailAndPassword(email, password);

      // Obtener el ID del usuario registrado
      if (authResult.user) {
        const userId = authResult.user.uid;
        // Guardar información adicional del usuario en Firestore
        await this.firestore.collection('usuarios').doc(userId).set({
          nombre: nombre,
          apellido: apellido,
          tipo: tipo
          // Puedes agregar más campos según tus necesidades
        });
      }

      return authResult;
    } catch (error) {
      console.log('Error de Registro', error);
      return null;
    }
  }*/

}