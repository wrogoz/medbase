 import axios from 'axios';
 import store from '../store/store'
 
 
 const getCityDataFromApi = (storeName:any)=>{
    axios.get(`https://api.nfz.gov.pl/app-itl-api/queues?province=${store.searchDistrict}&locality=${store.searchCity}&case=1&benefit=${store.searchSpecialization}&format=json`)
                .then(function (res) {
                    
                    const data = res.data.data.map((el: any )=>{
                        return {
                                date:el.attributes.dates.date,
                                place:el.attributes.provider,
                                address:`${el.attributes.locality} ${el.attributes.address}`,
                                phone:el.attributes.phone
                                }
                    })
                    storeName.dataApi=data;
                  console.log(data)
                    
      
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
}

const getDistrictDataFromApi = (storeName:any)=>{
    axios.get(`https://api.nfz.gov.pl/app-itl-api/queues?province=${store.searchDistrict}&case=1&benefit=${store.searchSpecialization}&format=json`)
                .then(function (res) {
                    
                    const data = res.data.data.map((el: any )=>{
                        return {
                                date:el.attributes.dates.date,
                                place:el.attributes.provider,
                                address:`${el.attributes.locality} ${el.attributes.address}`,
                                phone:el.attributes.phone
                                }
                    })
                    storeName.dataApi=data;
                  console.log(data)
                    
      
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
}

export { getCityDataFromApi, getDistrictDataFromApi}