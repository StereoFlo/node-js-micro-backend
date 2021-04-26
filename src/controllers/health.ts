import {Path, GET} from "typescript-rest";
import {resOK} from '../helpers';

@Path('/')
class Health2 {
    @GET
    index(): {} {
        return resOK({
            pidor: true
        });
    }
}

