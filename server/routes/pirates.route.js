const PirateController = require('../controllers/pirates.controller');

module.exports = app => {
    app.get('/api/pirates', PirateController.findAllPirates);
    app.get('/api/pirates/:id', PirateController.findOnePirate);
    app.post('/api/pirates', PirateController.createNewPirate);
    app.put('/api/pirates/update/:id', PirateController.updatePirate);
    app.delete('/api/pirates/:id', PirateController.deletePirate);
}