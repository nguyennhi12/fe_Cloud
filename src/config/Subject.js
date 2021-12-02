import { API_URL, Subject } from "./config";
const apiSettings = {
    getdanhmucnganh: async () => {
        const token=JSON.parse(localStorage.getItem('user')).token  
        console.log(token)
        const endpoint = `${API_URL}${Subject}getdanhmucnganh`;
        console.log(endpoint)
        const result = await( await fetch(endpoint,
          {
              method:'GET',
              //body: JSON.stringify(account),
              headers:{
                "Authorization": ` Bearer ${token}`,
                "Content-Type":"application/json",
                "Accept":"application/json",
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true 
              }
          })).json();        
      console.warn("result: ", result);
    return result;
    },
    getsubjectbynganh: async (id_nganh) => {
      const token=JSON.parse(localStorage.getItem('user')).token  
      console.log(token)
      const endpoint = `${API_URL}${Subject}getsubjectbynganh`;
      console.log(endpoint)
      const result = await( await fetch(endpoint,
        {
            method:'POST',
            body: JSON.stringify({id_nganh}),
            headers:{
              "Authorization": ` Bearer ${token}`,
              "Content-Type":"application/json",
              "Accept":"application/json",
              "Access-Control-Allow-Origin" : "*", 
              "Access-Control-Allow-Credentials" : true 
            }
        })).json();        
    console.warn("result: ", result);
  return result;
  },
  getdanhsachdkmon: async () => {
    const token=JSON.parse(localStorage.getItem('user')).token  
    console.log(token)
    const endpoint = `${API_URL}${Subject}getdanhsachdangkymon`;
    console.log(endpoint)
    const result = await( await fetch(endpoint,
      {
          method:'POST',
          headers:{
            "Authorization": ` Bearer ${token}`,
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Access-Control-Allow-Origin" : "*", 
            "Access-Control-Allow-Credentials" : true 
          }
      })).json();        
    console.warn("result: ", result);
    return result;
  },
  searchmonhoc: async (search_key) => {
    const token=JSON.parse(localStorage.getItem('user')).token  
    console.log(token)
    const endpoint = `${API_URL}${Subject}getsubjectbyname`;
    console.log(endpoint)
    const result = await( await fetch(endpoint,
      {
          method:'POST',
          body: JSON.stringify({search_key}),
          headers:{
            "Authorization": ` Bearer ${token}`,
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Access-Control-Allow-Origin" : "*", 
            "Access-Control-Allow-Credentials" : true 
          }
      })).json();        
    console.warn("result: ", result);
    return result;
  },
  dangkymonhoc: async (id_lop) => {
    const token=JSON.parse(localStorage.getItem('user')).token  
    console.log(token)
    const endpoint = `${API_URL}${Subject}dangkymonhoc`;
    console.log(endpoint)
    const result = await( await fetch(endpoint,
      {
          method:'POST',
          body: JSON.stringify({id_lop}),
          headers:{
            "Authorization": ` Bearer ${token}`,
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Access-Control-Allow-Origin" : "*", 
            "Access-Control-Allow-Credentials" : true 
          }
      })).json();        
    console.warn("result: ", result);
    return result;
    
  },
  getdanhmucid: async () => {
    const token=JSON.parse(localStorage.getItem('user')).token  
    console.log(token)
    const endpoint = `${API_URL}${Subject}getdanhmucbyid`;
    console.log(endpoint)
    const result = await( await fetch(endpoint,
      {
          method:'GET',
          //body: JSON.stringify(account),
          headers:{
            "Authorization": ` Bearer ${token}`,
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Access-Control-Allow-Origin" : "*", 
            "Access-Control-Allow-Credentials" : true 
          }
      })).json();        
  console.warn("result: ", result);
  return result;
  },
  getsubjectbyid: async (id_lopmh) => {
    const token=JSON.parse(localStorage.getItem('user')).token  
    console.log(token)
    const endpoint = `${API_URL}${Subject}getsubjectbyid`;
    console.log(endpoint)
    const result = await( await fetch(endpoint,
      {
          method:'POST',
          body: JSON.stringify({id_lopmh}),
          headers:{
            "Authorization": ` Bearer ${token}`,
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Access-Control-Allow-Origin" : "*", 
            "Access-Control-Allow-Credentials" : true 
          }
      })).json();        
  console.warn("result: ", result);
  return result;
  },
}
export default apiSettings
