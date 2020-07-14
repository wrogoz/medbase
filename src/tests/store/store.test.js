import store from '../../store/store';

test('is all district created?',()=>{
    expect(store.district.length).toBe(16)
});
test('is starting data api correct?',()=>{
    expect(store.dataApi).toStrictEqual([
        {
          date: "",
          place: "",
          address: "",
          phone: ""
        }
      ])
})
test('replace district name to district code',()=>{
 store.districtNameToDistrictCode('śląskie');
    const result = store.searchDistrict ==='12'
    expect(result).toBeTruthy();
})

test('replace specialization name to query string',()=>{
    store.specializationNameToOfficialName('neurolog')
    const result = store.searchSpecialization === "poradnia+neurologiczna"
    expect(result).toBeTruthy();
})