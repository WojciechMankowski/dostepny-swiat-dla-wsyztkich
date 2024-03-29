import { setKey, setLanguage, setRegion, fromAddress } from "react-geocode";
import Coordinates from "../types/Coordinates";


const fetchCoordinates = async (addresses: string): Promise<Coordinates> => {
    setKey(import.meta.env.VITE_API_KEY);
    setLanguage("pl");
    setRegion("pl");
    const promises =   await fromAddress(addresses);
    const res =  promises.results[0].geometry.location;
    return await res;
  
};

export default fetchCoordinates;
