import axios from 'axios';

const REST_API_POST_URL = "http://localhost:9081/run/store";

export const getSeekerApi = async()=>{
    const allseekdata = await axios.get('http://localhost:9081/run/get');
    return allseekdata;
}

export const createSeeker  = (seeker) => axios.post(REST_API_POST_URL, seeker);

export const getSeekerById = (id) => axios.get('http://localhost:9081/run/seeker/'+id);// API to get employee by ID

export const updateSeeker = (seeker,id) => axios.put('http://localhost:9081/run/update/'+id,seeker);

export const deleteSeeker = (id) => axios.delete('http://localhost:9081/run/delete/'+id);