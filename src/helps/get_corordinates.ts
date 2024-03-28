import { setKey, setLanguage, setRegion, fromAddress } from "react-geocode";
type Coor =   {
    "lat": number,
    "lng": number
}

const fetchCoordinates = async (addresses: string[]): Promise<Coor[]> => {
  try {
    setKey("AIzaSyBYDgXMcNfyI1pMmz7dN0228-yGIL9lp8c");
    setLanguage("pl");
    setRegion("pl");

    const promises = addresses.map(async (address) => {
      const response = await fromAddress(address);
      return response.results[0].geometry.location;
    });
    return await Promise.all(promises);
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    return []
  }
};

export default fetchCoordinates;
