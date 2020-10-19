import axios from 'axios'

export const getUserData = async (ip) => {
    try {
        const { data } = await axios.get(`https://geo.ipify.org/api/v1?apiKey=at_tvXFN94lpuZIQXXpUyTs9JVhIEJuM&ipAddress=${ip}
        `);
        return data;
        
    } catch (error){
        console.log(error);
    }
}