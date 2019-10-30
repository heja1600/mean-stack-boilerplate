import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import { Application } from 'express';
import mongoose from 'mongoose';
import { TemplateRoutes } from './routes/template.routes';
import { TemplateController } from './controllers/template.controller';

class App {

    public app: Application;

    /** 
     * use someone of these, not both, they have different meaning, so change their name
     * @param templateRoutes is for default routes.
     * @param templateController is for routes, but where mongodb crud events happens.
     */
    public templateRoutes: TemplateRoutes = new TemplateRoutes();
    public templateController: TemplateController = new TemplateController(this.app);

    private readonly mongoUrl: string = 'mongodb://localhost/CRMdb';
    private readonly PORT = 3000;

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();        
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());

        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));

        // send dist folder 
        this.app.use('/', express.static(path.join(__dirname, 'dist')));

        // Set port number
        this.app.set('port', process.env.PORT || this.PORT);

        // Add headers
        this.app.use(function (req, res, next) {

          // Website you wish to allow to connect
          res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        
          // Request methods you wish to allow
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        
          // Request headers you wish to allow
          res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        
          // Set to true if you need the website to include cookies in the requests sent
          // to the API (e.g. in case you use sessions)
          res.setHeader('Access-Control-Allow-Credentials', 'true' );
        
          // Pass to next layer of middleware
          next();
        });
    }

    private mongoSetup(): void {
      mongoose.Promise = global.Promise;
      mongoose.connect(this.mongoUrl, {useNewUrlParser: true})
        .then(() => console.log('successfully connected to mongodb'))
        .catch(error => console.log(error)
      ); 
    }

}

export default new App().app;
