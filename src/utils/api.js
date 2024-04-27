import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzYwZjVhYTMwOGI3YzZkODViNGU2N2JmM2ZjOGYzNiIsInN1YiI6IjY0N2I3NTRjMGUyOWEyMDBmOTgxZDk2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lQzeF6ofAgr2-TBk_g4M7XV9_HTyyU92LjZglzi_hU8";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};