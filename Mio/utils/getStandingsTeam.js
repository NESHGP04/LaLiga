import BASE_URL from "./BASE_URL.js";
import CONFIG from "./config.js";

const getStandingsTeam = async () => {

    // const response = await fetch(`${BASE_URL}/standings?league=140&season=2024`, {
    //     headers: {
    //         'x-apisports-key': CONFIG.API_KEY
    //     }
    // });

    const response = await fetch('./data/response-team.json');

    if (!response.ok) {
        throw new Error("Fallo la consulta al API...");
    }

    return await response.json();
}

export default getStandingsTeam;
