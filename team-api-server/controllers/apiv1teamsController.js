import * as service from '../services/apiv1teamsService.js';

export function getTeam(req, res) {
    service.getTeam(req, res);
}

export function addTeam(req, res) {
    service.addTeam(req, res);
}

