var d = new Date()
var hariBulan = {
    days: ["MINGGU", "SENIN", "SELASA", "RABU", "KAMIS", "JUM'AT", "SABTU"],
    months: ["JANUARI", "FEBRUARI", "MARET", "APRIL", "MEI", "JUNI", "JULI", "AGUSTUS", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DESEMBER"]
}
document.getElementById("waktu").innerHTML = hariBulan.days[d.getDay()] + ", " + d.getDate() + " " + hariBulan.months[d.getMonth()] + " " + d.getFullYear()

var myTamu = {
    nahNIK: [],
    nahNama: [],
    nahPIC: [],
    nahKeperluan: []
}

function saveData() {
    const iniNIK = document.getElementById("nik").value
    const iniNama = document.getElementById("nama").value
    const iniPIC = document.getElementById("pic").value
    const iniKeperluan = document.getElementById("keperluan").value

    for (let i = 0; i < myTamu.nahNIK.length; i++) {
        if (iniNIK == myTamu.nahNIK[i]) {
            alert("NIK Sudah Terdaftar!")
            return
        }
    }
    
    myTamu.nahNIK.push(iniNIK)
    myTamu.nahNama.push(iniNama)
    myTamu.nahPIC.push(iniPIC)
    myTamu.nahKeperluan.push(iniKeperluan)

    tampilkanTamu()
}

function tampilkanTamu() {
    const table = document.getElementById("listTamu")

    table.innerHTML = ""

    buatTabel()

    for (let i = 0; i < myTamu.nahNIK.length; i++) {
        let row = table.insertRow(i+1)

        row.insertCell(0).innerHTML = i+1
        row.insertCell(1).innerHTML = myTamu.nahNIK[i]
        row.insertCell(2).innerHTML = myTamu.nahNama[i]
        row.insertCell(3).innerHTML = myTamu.nahPIC[i]
        row.insertCell(4).innerHTML = myTamu.nahKeperluan[i]
    }
}

function buatTabel() {
    const table = document.getElementById("listTamu")
    let title = table.insertRow(0)

    title.insertCell(0).innerHTML = ""
    title.insertCell(1).innerHTML = ""
    title.insertCell(2).innerHTML = ""
    title.insertCell(3).innerHTML = ""
    title.insertCell(4).innerHTML = ""
}