import { urlWithDate, loadingList, } from '$lib/store';


let storesearchingUrl = null;
let childrenData = null;
let response = null;



urlWithDate.subscribe(fetchvalue => storesearchingUrl = fetchvalue);

export const load = async (loadEvent) => {
    

    const { fetch } = loadEvent
    response = await fetch(`${storesearchingUrl}`);
    childrenData = await response.json();
  
    loadingList.set(false);
    

    

return{
    childrenData, 
}
}

