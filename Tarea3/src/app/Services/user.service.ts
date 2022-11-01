import { EventEmitter } from "@angular/core"

export class UserService{
    users =  [
        {name:'Jhon', job:'Designer',gender:'Male',country:'United States',age:'22'}, 
        {name:'Jhon', job:'Designer',gender:'Male',country:'United States',age:'22'}, 
        {name:'Jhon', job:'Designer',gender:'Male',country:'United States',age:'22'}, 
        {name:'Jhon', job:'Designer',gender:'Male',country:'United States',age:'22'}, 
        {name:'Jhon', job:'Designer',gender:'Male',country:'United States',age:'22'},     
    ]

    detailsClicked = new EventEmitter<{name: string,
    job: string,
    gender: string,
    country: string,
    age: string}>();

    showUserDetails(user:    
        {name: string,
        job: string,
        gender: string,
        country: string,
        age: string}){

            this.detailsClicked.emit(user);

    }


}
