//  cek data
// function loginPARKIR(event) {
//     event.preventDefault();
//     const posisiMasuk = document.getElementById("posisi").value;
//     const passMasuk = document.getElementById("password").value;
//     if (
//       posisiMasuk == dataLogin[0].posisi &&
//       passMasuk == dataLogin[0].password
//     ) {
//       location.href = "/day04_1_agustus24/adminPage.html";
//     } else if (
//       posisiMasuk == dataLogin[1].posisi &&
//       passMasuk == dataLogin[1].password
//     ) {
//       location.href = "/day04_1_agustus24/indexIn.html";
//     } else {
//       alert("password salah");
//     }
// }

function login() {
    if (document.getElementById("userid").value === "operator") {
        masuk()
        location.href = "index.html"
    }
    else if (document.getElementById("userid").value === "admin") {
        masuk()
        location.href = "home.html"
    }
    else {
        alert("User tidak terdaftar!")
    }
}

// Login
function masuk() {
    localStorage.userid = $("#userid").val()
    // localStorage.password = $("#password").val()
    // $("#formLogin").submit()
}


// Logout
function keluarDeh() {
    p = localStorage.removeItem("userid")
}


// Welcome
if (document.getElementById("datalogin") != null) {
    var k = localStorage.getItem("userid")
    document.getElementById("datalogin").innerHTML = "Hi" + " " + k + "!"
}


var a = new Date()
if (a.getMinutes() < 10) {
    var b = "0" + a.getMinutes()
}
else {
    var b = a.getMinutes()
}

if (a.getSeconds() < 10) {
    var c = "0" + a.getSeconds()
}
else {
    var c = a.getSeconds()
}
// var b = a.getMinutes()
// var c = a.getSeconds()
var d = b + "" + c

// // Masuk
// function ambilKarcis() {
//     if (localStorage.getItem('daftarPengunjung') === null) {
//         kosong()
//     } else {
//         ada()
//     }
// }

// function kosong() {
//     let aryPengunjung = []

//     if (document.getElementById('kendaraan').value === "motor") {
//         objPengunjung = {
//             nomorPolisi: document.getElementById('nopol').value,
//             jenisKendaraan: document.getElementById('kendaraan').value,
//             idKarcis: 1 + d
//         }
//     } else {
//         objPengunjung = {
//             nomorPolisi: document.getElementById('nopol').value,
//             jenisKendaraan: document.getElementById('kendaraan').value,
//             idKarcis: 2 + d
//         }
//     }
//     // objPengunjung = {
//     //     nomorPolisi: document.getElementById('nopol').value,
//     //     jenisKendaraan: document.getElementById('kendaraan').value,
//     //     idKarcis: d
//     // }

//     aryPengunjung.push(objPengunjung)

//     localStorage.setItem('daftarPengunjung',JSON.stringify(aryPengunjung))
// }

// function ada() {
//     let aryPengunjung = JSON.parse(localStorage.getItem('daftarPengunjung'))
    
//     if (document.getElementById('kendaraan').value === "motor") {
//         objPengunjung = {
//             nomorPolisi: document.getElementById('nopol').value,
//             jenisKendaraan: document.getElementById('kendaraan').value,
//             idKarcis: 1 + d
//         }
//     } else {
//         objPengunjung = {
//             nomorPolisi: document.getElementById('nopol').value,
//             jenisKendaraan: document.getElementById('kendaraan').value,
//             idKarcis: 2 + d
//         }
//     }
//     // objPengunjung = {
//     //     nomorPolisi: document.getElementById('nopol').value,
//     //     jenisKendaraan: document.getElementById('kendaraan').value,
//     //     idKarcis: d
//     // }

//     aryPengunjung.push(objPengunjung)

//     localStorage.setItem('daftarPengunjung',JSON.stringify(aryPengunjung))
// }


// // Keluar
// // let aryPengunjung = localStorage.aryPengunjung ? JSON.parse(localStorage.aryPengunjung) : []
// const bayar = () => {
//     let aryPengunjung = JSON.parse(localStorage.getItem('daftarPengunjung'))
//     // console.log(aryPengunjung)

//     for (let i = 0; i < aryPengunjung.length; i++) {
//         let tambahSatu = b + 1
//         let jamKeluar = "1" + tambahSatu + "00"
//         // console.log(tambahSatu)
//         // console.log(jamKeluar)

//         if (document.getElementById("plat").value === aryPengunjung[i].nomorPolisi) {
//             // console.log("sama")
//             f =  aryPengunjung[i].idKarcis
//             // console.log(f)
//             g = (jamKeluar - f) * 1000
//             // console.log(g)
//             document.getElementById("tagihan").innerHTML = "Rp " + g
//         }
//         // else {
//         //     console.log("beda")
//         //     return
//         // }
        
//     }

//     // let jamMasuk = aryPengunjung.idKarcis
//     // let jamKeluar = c
//     // let dataBayar = aryPengunjung.map(value => {
//     //     if (value.nomorPolisi == nomorPolisi) {
//     //         let jamMasuk = value.idKarcis
//     //         let jamKeluar = b
//     //         console.log(jamKeluar - jamMasuk);
//     //     }
//     // })
// }








// BARU
// Masuk
function ambilKarcis() {
    if (document.getElementById('kendaraan').value === "motor") {
        kendMotor()
    } else {
        kendMobil()
    }
}

function kendMotor() {
    if (localStorage.getItem('daftarMotor') === null) {
        kosongMotor()
    } else {
        adaMotor()
    }
}

function kosongMotor() {
    let aryMotor = []

    objMotor = {
        nomorPolisi: document.getElementById('nopol').value,
        jenisKendaraan: document.getElementById('kendaraan').value,
        idKarcis: d
    }

    aryMotor.push(objMotor)

    localStorage.setItem('daftarMotor',JSON.stringify(aryMotor))
}

function adaMotor() {
    let aryMotor = JSON.parse(localStorage.getItem('daftarMotor'))
    
    objMotor = {
        nomorPolisi: document.getElementById('nopol').value,
        jenisKendaraan: document.getElementById('kendaraan').value,
        idKarcis: d
    }

    aryMotor.push(objMotor)

    localStorage.setItem('daftarMotor',JSON.stringify(aryMotor))
}

function kendMobil() {
    if (localStorage.getItem('daftarMobil') === null) {
        kosongMobil()
    } else {
        adaMobil()
    }
}

function kosongMobil() {
    let aryMobil = []

    objMobil = {
        nomorPolisi: document.getElementById('nopol').value,
        jenisKendaraan: document.getElementById('kendaraan').value,
        idKarcis: d
    }

    aryMobil.push(objMobil)

    localStorage.setItem('daftarMobil',JSON.stringify(aryMobil))
}

function adaMobil() {
    let aryMobil = JSON.parse(localStorage.getItem('daftarMobil'))
    
    objMobil = {
        nomorPolisi: document.getElementById('nopol').value,
        jenisKendaraan: document.getElementById('kendaraan').value,
        idKarcis: d
    }

    aryMobil.push(objMobil)

    localStorage.setItem('daftarMobil',JSON.stringify(aryMobil))
}


// Keluar
// const bayar = () => {
//     if (document.getElementById('kelKend').value === "motor") {
//         bayarMotor()
//     } else {
//         bayarMobil()
//     }
// }

// const bayarMotor = () => {
//     let aryMotor = JSON.parse(localStorage.getItem('daftarMotor'))

//     for (let i = 0; i < aryMotor.length; i++) {
//         let jamKeluar = b

//         if (document.getElementById("plat").value === aryMotor[i].nomorPolisi) {
//             jamMasukawal =  aryMotor[i].idKarcis
//             jamMasuk = jamMasukawal.substr(0, 2)
//             tagihanMotor = 3000 + ((jamKeluar - jamMasuk) * 1000)
            
//             document.getElementById("tagihan").value = tagihanMotor
//         }
//     }
// }

// const bayarMobil = () => {
//     let aryMobil = JSON.parse(localStorage.getItem('daftarMobil'))

//     for (let i = 0; i < aryMobil.length; i++) {
//         let jamKeluar = b

//         if (document.getElementById("plat").value === aryMobil[i].nomorPolisi) {
//             jamMasukawal =  aryMobil[i].idKarcis
//             jamMasuk = jamMasukawal.substr(0, 2)
//             tagihanMobil = 5000 + ((jamKeluar - jamMasuk) * 3000)
            
//             document.getElementById("tagihan").value = tagihanMobil
//         }
//     }
// }

// const hitung = () => {
//     let t = document.getElementById("tagihan").value
//     let g = document.getElementById("dibayar").value

//     m = g - t
//     document.getElementById("kembalian").value = m
// }

// const lunas = () => {
//     location.reload()
// }


// Keluar baru
// const bayar = () => {
//     if (document.getElementById('kelKend').value === "motor") {
//         bayarMotor()
//     } else {
//         bayarMobil()
//     }
// }

const bayar = () => {
    let aryMotor = JSON.parse(localStorage.getItem('daftarMotor'))

    for (let i = 0; i < aryMotor.length; i++) {
        let jamKeluar = b

        if (document.getElementById("plat").value === aryMotor[i].nomorPolisi) {
            jamMasukawal =  aryMotor[i].idKarcis
            jamMasuk = jamMasukawal.substr(0, 2)
            tagihanMotor = 3000 + ((jamKeluar - jamMasuk) * 1000)
            
            document.getElementById("tagihan").value = tagihanMotor
            console.log("1");
        } else {
            bayarMobil()
            console.log("2");
        }
    }
}

const bayarMobil = () => {
    let aryMobil = JSON.parse(localStorage.getItem('daftarMobil'))

    for (let i = 0; i < aryMobil.length; i++) {
        let jamKeluar = b

        if (document.getElementById("plat").value === aryMobil[i].nomorPolisi) {
            jamMasukawal =  aryMobil[i].idKarcis
            jamMasuk = jamMasukawal.substr(0, 2)
            tagihanMobil = 5000 + ((jamKeluar - jamMasuk) * 3000)
            
            document.getElementById("tagihan").value = tagihanMobil
            console.log("3");
        } else {
            alert("salah")
            console.log("4");
        }
    }
}

const hitung = () => {
    let t = document.getElementById("tagihan").value
    let g = document.getElementById("dibayar").value

    m = g - t
    document.getElementById("kembalian").value = m
}

const lunas = () => {
    location.reload()
}