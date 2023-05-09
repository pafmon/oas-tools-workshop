import * as service from '../services/apiv1teamsidService.js';

export function findByid(req, res) {
    service.findByid(req, res);
}

export function updateTeam(req, res) {
    service.updateTeam(req, res);
}

export function deleteTeam(req, res) {
    service.deleteTeam(req, res);
}

