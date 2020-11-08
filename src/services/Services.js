import axios from 'axios';

class Services {

    getNasabahs(masuk) {
        return axios.post("http://localhost:8080/api/v1/selectAllNasabahs", masuk);
    }

    createNasabah(nasabah) {
        return axios.post("http://localhost:8080/api/v1/addNasabah", nasabah);
    }

    getNasabahById(nasabahId) {
        return axios.get("http://localhost:8080/api/v1/selectNasabah/" + nasabahId);
    }

    getVoucher() {
        return axios.get("http://localhost:8080/api/v1/getAllVouchers")
    }

    getPaket() {
        return axios.get("http://localhost:8080/api/v1/getAllPakets")
    }

    bayarOm(bayar) {
        return axios.put("http://localhost:8080/api/v1/payment/" + bayar.id, bayar);
    }
}

export default new Services()