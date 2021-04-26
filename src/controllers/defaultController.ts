import {Path, GET} from "typescript-rest";
import {resOK} from '../helpers';

@Path('/')
class DefaultController {
    @GET
    index(): {} {
        return resOK({
            pidor: true
        });
    }
}

