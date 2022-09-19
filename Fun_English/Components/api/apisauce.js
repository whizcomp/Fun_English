import {create} from "apisauce"
import {BASEURL} from "@env"
const apiClient = create({baseURL:`${BASEURL}`})

export default apiClient;
