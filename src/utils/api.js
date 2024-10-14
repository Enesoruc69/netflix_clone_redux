import axios from "axios";

export default axios.create({
    baseURL:"https://api.themoviedb.org/3",
    //Yapacağımız isteklere eklenecek headerler
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
      params:{ language: "tr-TR"},
});               

