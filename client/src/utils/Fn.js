import axios from 'axios';
export const fetchData = async (name) =>{
    try {
        const response = await axios.get(`https://ychnightder.alwaysdata.net/SpaceTourismAPI/api/${name}`);
        return response.data;
    }catch(err){
        console.error("Erreur lors de la récupération des destinations:", err);
        throw err
    }
}
