import {observable} from 'mobx'
 class Store{
    @observable  specialization:string[]=[]
}



let store = new Store;
export default store;