import {observable} from 'mobx'
 class Store{
    @observable  specialization:string[]=['Pediatra','Neurolog',"Ortopeda","Ginekolog","Kardiolog","Pulmonolog","Geriatra","Chirurg","Neurochirurg", "Endokrynolog"]
}



const store = new Store();
export default store;