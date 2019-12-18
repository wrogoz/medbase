import axios from "axios";
import store from "../store/store";

interface StoreProps {
  specialization: string[];
  district: string[];
  searchSpecialization: string;
  searchDistrict: string;
  searchCity: string;
  dataApi: { date: string; place: string; address: string; phone: string }[];
  specializationNameToOfficialName(specialization: string): void;
  districtNameToDistrictCode(districtName: string): void;
}

const getCityDataFromApi = (storeName: StoreProps) => {
  axios
    .get(
      `https://api.nfz.gov.pl/app-itl-api/queues?province=${store.searchDistrict}&locality=${store.searchCity}&case=1&benefit=${store.searchSpecialization}&format=json`
    )
    .then(function(res) {
      const data = res.data.data.map((el: any) => {
        return {
          date: el.attributes.dates.date,
          place: el.attributes.provider,
          address: `${el.attributes.locality} ${el.attributes.address}`,
          phone: el.attributes.phone
        };
      });
      storeName.dataApi = data;

      return res.data.data;
    })
    .then(res => {
      if (res.length < 1) {
        getDistrictDataFromApi(store);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
};

const getDistrictDataFromApi = (storeName: StoreProps) => {
  axios
    .get(
      `https://api.nfz.gov.pl/app-itl-api/queues?province=${store.searchDistrict}&case=1&benefit=${store.searchSpecialization}&format=json`
    )
    .then(function(res) {
      const data = res.data.data.map((el: any) => {
        return {
          date: el.attributes.dates.date,
          place: el.attributes.provider,
          address: `${el.attributes.locality} ${el.attributes.address}`,
          phone: el.attributes.phone
        };
      });
      storeName.dataApi = data;
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};

export { getCityDataFromApi, getDistrictDataFromApi };
