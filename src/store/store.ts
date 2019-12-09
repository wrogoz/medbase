import {observable} from 'mobx'
 class Store{
    @observable  specialization:string[]=['dermatolog','neurolog',"ortopeda","ginekolog","kardiolog","pulmonolog","geriatra","chirurg","neurochirurg", "endokrynolog"]
    @observable  district:string[] = ['dolnośląskie','kujawsko-pom.','lubelskie','lubuskie','łódzkie',"małopolskie","mazowieckie", 'opolskie', 'podkarpackie', 'podlaskie', 'pomorskie', 'śląskie', 'świętokrzyskie', 'warm.mazurskie', 'wielkopolskie', 'zach. pomorskie']
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
        specializationNameToOfficialName = (specialization:string)=>{
            switch (specialization) {
                case 'neurolog':
                  store.searchSpecialization='poradnia+neurologiczna'
                    break;
                case 'ortopeda':
                    store.searchSpecialization='ŚWIADCZENIA+Z+ZAKRESU+ORTOPEDII+I+TRAUMATOLOGII+NARZĄDU+RUCHU'
                    break;
                case 'ginekolog':
                    store.searchSpecialization='poradnia+ginekologiczna'
                    break;
                case 'kardiolog':
                    store.searchSpecialization='świadczenia+z+zakresu+kardiologii'
                    break;
                case 'pulmonolog':
                    store.searchSpecialization='poradnia+chorób+płuc'
                    break;
                case 'geriatra':
                    store.searchSpecialization='poradnia+geriatryczna'
                    break;    
                case 'chirurg':
                    store.searchSpecialization='poradnia+chirurgii+ogólnej'
                    break;
                case 'neurochirurg':
                    store.searchSpecialization='poradnia+neurochirurgiczna'
                    break;   
                case 'endokrynolog':
                    store.searchSpecialization='świadczenia+z+zakresu+endokrynologii'
                    break;    
                case 'gastrolog':
                    store.searchSpecialization='poradnia+gastroenterologiczna'
                    break;    
                case 'dermatolog':
                store.searchSpecialization='poradnia+dermatologiczna'
                break;                
            
              default:
                  break;
            }
        }
        districtNameToDistrictCode=(districtName:string)=>{
            switch (districtName) {
                case 'dolnośląskie':
                    store.searchDistrict='01'
                    break;
    
                case 'kujawsko-pom.':
                    store.searchDistrict='02'
                    break;
    
                case 'lubelskie':
                    store.searchDistrict='03'
                    break;
    
                case 'lubuskie':
                    store.searchDistrict='04'
                    break;    
                case 'łódzkie':
                    store.searchDistrict='05'
                    break;
                case 'małopolskie':
                    store.searchDistrict='06'
                    break;
                case 'mazowieckie':
                    store.searchDistrict='07'
                    break;
                case 'opolskie':
                    store.searchDistrict='08'
                    break;   
                case 'podkarpackie':
                    store.searchDistrict='09'
                    break;
                case 'podlaskie':
                    store.searchDistrict='10'
                    break;
                case 'pomorskie':
                    store.searchDistrict='11'
                    break;
                case 'śląskie':
                    store.searchDistrict='12'
                    break;    
                case 'świętokrzyskie':
                    store.searchDistrict='13'
                    break;
                case 'warm.mazurskie':
                    store.searchDistrict='14'
                    break;
                case 'wielkopolskie':
                    store.searchDistrict='15'
                    break;
                case 'zach. pomorskie':
                    store.searchDistrict = '16'
                    break;               
                default:
                    break;
            }
        }
        

            
}



const store = new Store();
export default store;