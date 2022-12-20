import ApiService from "./ApiService";

class TransferenciaService extends ApiService{

    constructor(){
        super('/transferencias')
    }

    findAlltransferencias(){
        return this.get("/");
    }

}

export default TransferenciaService