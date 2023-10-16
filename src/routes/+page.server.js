export const load = async (loadEvent) => {
    const { fetch } = loadEvent
    const response = await fetch("http://192.168.0.224:3001/");
    const childrenData = await response.json();
   

    return{
        childrenData
    }
}