import apiClient from "./apisauce";

export const getListings=async(level,adj)=> await apiClient.get(`/${level}/${adj}`);
