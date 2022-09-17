import apiClient from "./apisauce";

export const getListings=async(level,adj)=> await apiClient.get(`/${level}/${adj}`);
export const getWord=async()=>await apiClient.get('/word')
export const sendWord=async(def,letters,word,level)=>await apiClient.post('/',{definition:def,letters,word,level})