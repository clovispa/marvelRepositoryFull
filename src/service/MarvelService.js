import apiClient from "@/plugins/Axios";
import {public_key} from "../../config/credentials";

const marvelList = function (page) {
    return apiClient.get(`/v1/public/characters?apikey=${public_key}&offset=${page}`);
}

const searchList = function (name) {
    return apiClient.get(`/v1/public/characters?apikey=${public_key}&name=${name}`);
}
export default {
    marvelList,
    searchList
}
