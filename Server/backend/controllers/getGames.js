import db from '../models';

const game = db.Games;
class GetGames{

    static get(req, res){
        game.all().then(games => res.status(200).send({ games }))
        .catch(error => res.status(200).send(error));

    }
}
export default GetGames

