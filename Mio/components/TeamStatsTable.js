const TeamStatsTable = () => {
    const render = (stats, goalDiff) => {
        return `
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Jugados</th>
                        <th>Ganados</th>
                        <th>Empatados</th>
                        <th>Perdidos</th>
                        <th>GF</th>
                        <th>GC</th>
                        <th>Diferencia</th>
                        <th>Port. Cero</th>
                        <th>Penales</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${stats.played}</td>
                        <td>${stats.wins}</td>
                        <td>${stats.draws}</td>
                        <td>${stats.losses}</td>
                        <td>${stats.goalsFor}</td>
                        <td>${stats.goalsAgainst}</td>
                        <td>${goalDiff}</td>
                        <td>${stats.cleanSheets}</td>
                        <td>${stats.penaltiesScored} (${stats.penaltiesPct})</td>
                    </tr>
                </tbody>
            </table>
        `;
    };

    return { render };
};

export default TeamStatsTable;
