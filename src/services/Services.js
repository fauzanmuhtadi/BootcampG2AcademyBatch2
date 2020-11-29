import axios from 'axios';

class Services {

    getNasabahs(masuk) {
        return axios.post("http://10.0.2.2:8080/api/v1/selectAllNasabahs", masuk);
    }

    createNasabah(nasabah) {
        return axios.post("http://10.0.2.2:8080/api/v1/addNasabah", nasabah);
    }

    getNasabahById(nasabahId) {
        return axios.get("http://10.0.2.2:8080/api/v1/selectNasabah/" + nasabahId);
    }

    getNasabahByPhoneCardNumber(phone, cardNumber) {
        return axios.post("http://10.0.2.2:8080/api/v1/selectAllNasabahs/" + phone + "/" + cardNumber);
    }

    getNasabahByUserPass(userId, password) {
        return axios.post("http://10.0.2.2:8080/api/v1/signinMBanking/" + userId + "/" + password);
    }

    getVoucher() {
        return axios.get("http://10.0.2.2:8080/api/v1/getAllVouchers")
    }

    getPaket() {
        return axios.get("http://10.0.2.2:8080/api/v1/getAllPakets")
    }

    bayarOm(bayar) {
        return axios.put("http://10.0.2.2:8080/api/v1/payment/" + bayar.id, bayar);
    }
}

export default new Services()