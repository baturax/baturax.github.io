import axios from "axios";

async function getOtobus(durakId) {
  const url =
    "https://openapi.izmir.bel.tr/api/iztek/duragayaklasanotobusler/" + durakId;

  console.log(url);

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return null;
  }
}

export default getOtobus;
