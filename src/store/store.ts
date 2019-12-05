import {observable} from 'mobx'
 class Store{
    @observable  specialization:string[]=['Pediatra','Neurolog',"Ortopeda","Ginekolog","Kardiolog","Pulmonolog","Geriatra","Chirurg","Neurochirurg", "Endokrynolog"]
    @observable  district:string[] = ['Śląsk','Małopolska','Mazowieckie','Dolny śląsk','Podkarpacie',"Wielkopolska","zach. pomorskie", 'Podlaskie', 'pomorskie', 'kujawsko-pom.', 'łódzkie', 'świętokrzyskie', 'lubuskie', 'lubelskie', 'opolskie', 'warm.mazurskie']
    @observable  searchSpecialization:string =''
    @observable  searchDistrict:string =''
    @observable  searchCity:string ='test'
    @observable  dataApi= [
        {
            date:"13.12.2019",
            place:"przychodnia agmed spółka z ograniczoną odpowiedzialnością",
            adress:"KATOWICE, xawerego dunikowskiego 12-14-16",
            phone:"48 32 258 24 02"
        },
        {
            date:"13.12.2019",
            place:"przychodnia agmed spółka z ograniczoną odpowiedzialnością",
            adress:"KATOWICE, xawerego dunikowskiego 12-14-16",
            phone:"48 32 258 24 02"
        },
        {
            date:"13.12.2019",
            place:"przychodnia agmed spółka z ograniczoną odpowiedzialnością",
            adress:"KATOWICE, xawerego dunikowskiego 12-14-16",
            phone:"48 32 258 24 02"
        },
        {
            date:"13.12.2019",
            place:"przychodnia agmed spółka z ograniczoną odpowiedzialnością",
            adress:"KATOWICE, xawerego dunikowskiego 12-14-16",
            phone:"48 32 258 24 02"
        }
    ]

}



const store = new Store();
export default store;