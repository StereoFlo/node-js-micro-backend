import {Path, GET} from "typescript-rest";
import {resOK} from '../helpers';

@Path('/')
class DefaultController {
    @GET
    async index(): Promise<any> {
        return resOK({
            ok: 'ok'
        });
    }
}

