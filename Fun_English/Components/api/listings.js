import apiClient from "./apisauce";

const getListings=()=>apiClient.get("/api/adj/:list");
export default {getListings}