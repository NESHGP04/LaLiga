import getStandingsTeam from "../utils/getStandingsTeam.js";

const TeamPage = (teamId) => {

    const render = (parentElement) => {
        const team = getStandingsTeam.response.team;
        const league = getStandingsTeam.response.league;
        const stats = getStandingsTeam.response;

        parentElement.innerHTML = `
            <h1>Equipo: ${team.name}</h1>
            <img src="${team.logo}" alt="Logo de ${team.name}" width="100" />
            <h2>Liga: ${league.name} (${league.country})</h2>
            <img src="${league.logo}" alt="Logo de ${league.name}" width="50" />
            <p><strong>Temporada:</strong> ${league.season}</p>

            <h3>Resumen:</h3>
            <ul>
                <li><strong>Partidos Jugados:</strong> ${stats.fixtures.played.total}</li>
                <li><strong>Ganados:</strong> ${stats.fixtures.wins.total}</li>
                <li><strong>Empatados:</strong> ${stats.fixtures.draws.total}</li>
                <li><strong>Perdidos:</strong> ${stats.fixtures.loses.total}</li>
                <li><strong>Goles a favor:</strong> ${stats.goals.for.total.total}</li>
                <li><strong>Goles en contra:</strong> ${stats.goals.against.total.total}</li>
                <li><strong>Diferencia de gol:</strong> ${stats.goals.for.total.total - stats.goals.against.total.total}</li>
                <li><strong>Porterías a cero:</strong> ${stats.clean_sheet.total}</li>
                <li><strong>Penaltis anotados:</strong> ${stats.penalty.scored.total} (${stats.penalty.scored.percentage})</li>
            </ul>
        `;
    };

    return {
        render
    }
}

export default TeamPage;