import { writable } from "svelte/store"

export const toggleMenu = writable(null);
export const urlWithDate = writable('http://192.168.0.224:3001/');
export const childrenData = writable(null);

//ListByDate.svelte
export const loadingList = writable(true); //Loading text at new data request
export const searchingDate = writable(''); //To show last searched date, current state showing


