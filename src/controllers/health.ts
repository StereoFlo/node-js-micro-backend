import {Path, GET} from "typescript-rest";
import {resOK} from '../helpers';

@Path('/health')
class Health {
    @GET
    index(): {} {
        return resOK({
            status: true
        });
    }
}

