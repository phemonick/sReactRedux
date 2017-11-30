import db from '../models';
const game = db.Games;

class CreateGame {

    static create(req, res){
        const {title} = req.body;
        game.create({
            title: title
        })
        .then(game => res.status(200).send({
            message: game
        })
            
        )

        
    }
}
export default CreateGame

