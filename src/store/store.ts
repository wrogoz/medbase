import {observable} from 'mobx'
 class Store{
    @observable  specialization:string[]=['Pediatra','Neurolog',"Ortopeda","Ginekolog","Kardiolog","Pulmonolog","Geriatra","Chirurg","Neurochirurg", "Endokrynolog"]
    @observable  district:string[] = ['Śląsk','Małopolska','Mazowieckie','Dolny śląsk','Podkarpacie',"Wielkopolska","zach. pomorskie", 'Podlaskie', 'pomorskie', 'kujawsko-pom.', 'łódzkie', 'świętokrzyskie', 'lubuskie', 'lubelskie', 'opolskie', 'warm.mazurskie']
    @observable  searchSpecialization:string =''
    @observable  searchDistrict:string =''
    @observable  searchCity:string =''
    @observable  dataApi=[
            {
                date:"",
                place:"",
                address:"",
                phone:""
            }
        ]

}



const store = new Store();
export default store;