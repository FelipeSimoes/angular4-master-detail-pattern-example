import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as path from 'path';
import { Mockgoose } from 'mockgoose';

import { setRoutes } from './routes';

// defining all consts
const app: express = express();
const mockgoose: Mockgoose = new Mockgoose(mongoose);
const db: any = mongoose.connection;

dotenv.load({ path: '.env' });
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));
mockgoose.prepareStorage().then(function(): any {
    mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });
});

(<any>mongoose).Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  setRoutes(app);
  app.get('/', function (req: any, res: any): any {
    return res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  app.listen(app.get('port'), () => {
    console.log('Example is running at port ' + app.get('port'));
  });

});

export { app };
