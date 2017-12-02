import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import api from './routes/api';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', api);
app.use((req, res, next) => {
    res.status(404).json({
      errors: {
        global: "still working, please try again later"
      }
    })
  });

const port = parseInt(process.env.PORT, 10) || 8080;
app.set('port', port);

app.listen(port, () => console.log('server @ 8080'));

export default app;