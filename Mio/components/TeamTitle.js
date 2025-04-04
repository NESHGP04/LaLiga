const TeamTitle = () => {
    const render = (team, league) => {
        return `
            <h1>${team.name}</h1>
            <img src="${team.logo}" alt="Logo de ${team.name}" width="100" />
            <h2>Liga: ${league.name} (${league.country})</h2>
            <img src="${league.logo}" alt="Logo de la liga" width="50" />
            <p>Temporada: ${league.season}</p>
        `;
    };

    return { render };
};

export default TeamTitle;
