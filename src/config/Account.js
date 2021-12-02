import { API_URL, Account } from "./config";
const apiSettings = {
    login: async (account) => {
        console.log(JSON.stringify(account))        
        const endpoint = `${API_URL}${Account}login`;
        console.log(endpoint)
        const result = await( await fetch(endpoint,
          {
              method:'POST',
              body: JSON.stringify(account),
              headers:{
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
