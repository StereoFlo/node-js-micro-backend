import express, {Request, Response} from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {Server} from "typescript-rest";

import './controllers';
import {TryDBConnect} from "./helpers";

export const app: express.Application = express();

app.use(cors());
app.use(bodyParser.json());

app.use(async (req: Request, res: Response, next) => {
    await TryDBConnect(() => {
        res.json({
            error: 'Database connection error, please try again later',
        });
    }, next);
});


Server.buildServices(app);

// Just checking if given PORT variable is an integer or not
let port = parseInt(process.env.PORT || "");
if (isNaN(port) || port === 0) {
    port = 4000;
}

let host = process.env.HOST || "";
if (host === "") {
    host = "0.0.0.0";
}

app.listen(port, host, () => {
    console.log(`🚀 Server Started at PORT: http://${host}:${port}`);
});

