// Logout
function keluarDeh() {
    c = localStorage.removeItem("userid")
}


// waktu
if (document.getElementById("waktu") != null) {
    var d = new Date()
    var hariBulan = {
      days: ["MINGGU", "SENIN", "SELASA", "RABU", "KAMIS", "JUM'AT", "SABTU"],
      months: ["JANUARI", "FEBRUARI", "MARET", "APRIL", "MEI", "JUNI", "JULI", "AGUSTUS", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DESEMBER"]
    }
    document.getElementById("waktu").innerHTML = hariBulan.days[d.getDay()] + ", " + d.getDate() + " " + hariBulan.months[d.getMonth()] + " " + d.getFullYear()
}


// Simpan data karyawan ke local storage
function isi() {
    if (localStorage.getItem('daftarKaryawan') === null) {
        kosong()
    } else {
        ada()
    }
}

function kosong() {
    let aryKaryawan = []
    objKaryawan = {
        nahNIK: document.getElementById('nik').value,
        nahNama: document.getElementById('nama').value,
        nahTTL: document.getElementById('ttl').value,
        nahEmail: document.getElementById('email').value,
        nahHP: document.getElementById('hp').value
    }

    aryKaryawan.push(objKaryawan)

    localStorage.setItem('daftarKaryawan',JSON.stringify(aryKaryawan))

    // tampilkanKaryawan()
}

function ada() {
    let aryKaryawan = JSON.parse(localStorage.getItem('daftarKaryawan'))
    objKaryawan = {
        nahNIK: document.getElementById('nik').value,
        nahNama: document.getElementById('nama').value,
        nahTTL: document.getElementById('ttl').value,
        nahEmail: document.getElementById('email').value,
        nahHP: document.getElementById('hp').value
    }

    aryKaryawan.push(objKaryawan)

    localStorage.setItem('daftarKaryawan',JSON.stringify(aryKaryawan))

    // tampilkanKaryawan()
}


// Tampilkan data karyawan
if (document.getElementById("listKaryawan") != null) {
// function tampilkanKaryawan() {
    let dataKaryawan = JSON.parse(localStorage.getItem('daftarKaryawan'))
    const table = document.getElementById("listKaryawan")

    table.innerHTML = ""

    buatTabel()

    for (let i = 0; i < dataKaryawan.length; i++) {
        let row = table.insertRow(i+1)

        row.insertCell(0).innerHTML = i+1
        row.insertCell(1).innerHTML = dataKaryawan[i].nahNIK
        row.insertCell(2).innerHTML = dataKaryawan[i].nahNama
        row.insertCell(3).innerHTML = dataKaryawan[i].nahTTL
        row.insertCell(4).innerHTML = dataKaryawan[i].nahEmail
        row.insertCell(5).innerHTML = dataKaryawan[i].nahHP
    }
// }
}

function buatTabel() {
    const table = document.getElementById("listKaryawan")
    let title = table.insertRow(0)

    title.insertCell(0).innerHTML = ""
    title.insertCell(1).innerHTML = ""
    title.insertCell(2).innerHTML = ""
    title.insertCell(3).innerHTML = ""
    title.insertCell(4).innerHTML = ""
    title.insertCell(5).innerHTML = ""
}


// Simpan data departemen ke local storage
function isiDep() {
    if (localStorage.getItem('daftarDepartemen') === null) {
        kosongDep()
    } else {
        adaDep()
    }
}

function kosongDep() {
    let aryDepartemen = []
    objDepartemen = {
        nahNoSK: document.getElementById('nosk').value,
        nahNamaDep: document.getElementById('dep').value,
        nahTgl: document.getElementById('tgl').value
    }

    aryDepartemen.push(objDepartemen)

    localStorage.setItem('daftarDepartemen',JSON.stringify(aryDepartemen))

    // tampilkanDepartemen()
}

function adaDep() {
    let aryDepartemen = JSON.parse(localStorage.getItem('daftarDepartemen'))
    objDepartemen = {
        nahNoSK: document.getElementById('nosk').value,
        nahNamaDep: document.getElementById('dep').value,
        nahTgl: document.getElementById('tgl').value
    }

    aryDepartemen.push(objDepartemen)

    localStorage.setItem('daftarDepartemen',JSON.stringify(aryDepartemen))

    // tampilkanDepartemen()
}


// Tampilkan data departemen
if (document.getElementById("listDepartemen") != null) {
// function tampilkanDepartemen() {
    let dataDepartemen = JSON.parse(localStorage.getItem('daftarDepartemen'))
    const table = document.getElementById("listDepartemen")

    table.innerHTML = ""

    buatTabelDep()

    for (let i = 0; i < dataDepartemen.length; i++) {
        let row = table.insertRow(i+1)

        row.insertCell(0).innerHTML = i+1
        row.insertCell(1).innerHTML = dataDepartemen[i].nahNoSK
        row.insertCell(2).innerHTML = dataDepartemen[i].nahNamaDep
        row.insertCell(3).innerHTML = dataDepartemen[i].nahTgl
    }
// }
}

function buatTabelDep() {
    const table = document.getElementById("listDepartemen")
    let title = table.insertRow(0)

    title.insertCell(0).innerHTML = ""
    title.insertCell(1).innerHTML = ""
    title.insertCell(2).innerHTML = ""
    title.insertCell(3).innerHTML = ""
}


// Tampilkan data karyawan ke assignment
if (document.getElementById("listAssignment") != null) {
// function tampilkanAssignment() {
    let dataAssignment = JSON.parse(localStorage.getItem('daftarKaryawan'))
    const table = document.getElementById("listAssignment")

    table.innerHTML = ""

    buatTabelAssignment()

    for (let i = 0; i < dataAssignment.length; i++) {
        let row = table.insertRow(i+1)

        row.insertCell(0).innerHTML = i+1
        row.insertCell(1).innerHTML = dataAssignment[i].nahNIK
        row.insertCell(2).innerHTML = dataAssignment[i].nahNama
        row.insertCell(3).innerHTML = ""
        row.insertCell(4).innerHTML = localStorage.getItem("userid")
    }
// }
}

function buatTabelAssignment() {
    const table = document.getElementById("listAssignment")
    let title = table.insertRow(0)

    title.insertCell(0).innerHTML = ""
    title.insertCell(1).innerHTML = ""
    title.insertCell(2).innerHTML = ""
    title.insertCell(3).innerHTML = ""
    title.insertCell(4).innerHTML = ""
}