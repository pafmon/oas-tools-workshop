export function getTeam(req, res) {
    res.send([{
        "id": 33,
        "name": "Manchester United",
        "code": "MUN",
        "country": "England",
        "founded": 1878,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/33.png"
      }]);
}

export function addTeam(req, res) {
    res.send({
        message: 'This is the mockup controller for addTeam'
    });
}

