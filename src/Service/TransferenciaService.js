import ApiService from "./ApiService";

class TransferenciaService extends ApiService{

    constructor(){
        super('/transferencias')
    }

    findAlltransferencias(){
        return this.get("/");
    }

    readByDate(startDate,endDate) {
        return this.get(`/byTempo?startDate=${startDate}&endDate=${endDate}`);
    }

    findByOperator(operatorName){
        return this.get(`/byNome?operatorName=${operatorName}`);

    }

}

export default TransferenciaService