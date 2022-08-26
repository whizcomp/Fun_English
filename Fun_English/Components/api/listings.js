import apiClient from "./apisauce";

const getListings=()=>apiClient.get("/api/adj");
export default {getListings}