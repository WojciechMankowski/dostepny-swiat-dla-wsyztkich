import axios from "axios";


export const add_new_place = () => {}


export const update_ratings = async (id: number, score: number, how: number) => {
    const url = 'http://127.0.0.1:8000/api/ratings/' + id + "/"
    const data = {
        score: score, number_of_ratings: how
    }
    try {
        const response = await axios.put(url, data, {
          headers: {
            'Content-Type': 'application/json'
          },
        });
    
        console.log(response.data); 
      } catch (error) {
        console.error('There was an error:', error); 
}
}
