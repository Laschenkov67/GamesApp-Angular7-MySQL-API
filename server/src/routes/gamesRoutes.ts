import express, { Router } from 'express';
import gamesController from '../controllers/gamesController';

class GameRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', gamesController.getGames);
        this.router.get('/:id', gamesController.getGame);
        this.router.post('/', gamesController.createGame);
        this.router.put('/:id', gamesController.updateGame);
        this.router.delete('/:id', gamesController.deleteGame);
    }

}

export default new GameRoutes().router;

