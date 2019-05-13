var arrData = [
    {
        nama: "Budi",
        tanggal: 12,
        bulan: "Januari",
        tahun: 1986,
        zodiak: "Capricorn",
        usia: 32,
        pensiun: -23,
        kota: "Ambon",
    },
    {
        nama: "Deni",
        tanggal: 24,
        bulan: "September",
        tahun: 1985,
        zodiak: "Libra",
        usia: 33,
        pensiun: -22,
        kota: "Palu",
    },
    {
        nama: "Ani",
        tanggal: 24,
        bulan: "September",
        tahun: 1985,
        zodiak: "Libra",
        usia: 33,
        pensiun: -22,
        kota: "Palu",
    }
]

function showAll(){
    list = ""
    for(var i = 0; i<arrData.length; i++){
        list+= `<tr id="test">
        <td>${arrData[i].nama}</td>
        <td>${arrData[i].tanggal}</td>
        <td>${arrData[i].bulan}</td>
        <td>${arrData[i].tahun}</td>
        <td>${arrData[i].zodiak}</td>
        <td>${arrData[i].usia}</td>
        <td>${arrData[i].pensiun}</td>
        <td>${arrData[i].kota}</td>
        <td><input type="button" id="${i}" name="tombolHapus" value="Hapus" onclick="hapus(this.id)"></td>
        </tr>`
    }
    
    document.getElementById("dataTable").innerHTML = list
}
showAll()


function daftar(){
    var nama = document.getElementById("nama").value
    var kota = document.getElementById("kota").value

    var tanggal = document.getElementById("tanggal").value
    var tahun = tanggal.slice(0,4)
    var bulan = Number(tanggal.slice(5,7))
    var tanggalSlice = tanggal.slice(8,10)
    console.log(tanggal)
    console.log(tahun)
    console.log(bulan)
    console.log(tanggalSlice)

    var zodiak = ""
    console.log(bulan)

    if(bulan == 1){
        bulan = "Januari"
    }
    else if(bulan == 2){
        bulan = "Februari"
    }
    else if(bulan == 3){
        bulan = "Maret"
    }
    else if(bulan == 4){
        bulan = "April"
    }
    else if(bulan == 5){
        bulan = "Mei"
    }
    else if(bulan == 6){
        bulan = "Juni"
    }
    else if(bulan == 7){
        bulan = "Juli"
    }
    else if(bulan == 8){
        bulan = "Agustus"
    }
    else if(bulan == 9){
        bulan = "September"
    }
    else if(bulan == 10){
        bulan = "Oktober"
    }
    else if(bulan == 11){
        bulan = "November"
    }
    else if(bulan == 12){
        bulan = "Desember"
    }

    console.log(bulan)

    var bulanLowerCase = bulan.toLowerCase()
    if(bulanLowerCase == "desember"){
        if(tanggalSlice <= 21){
            zodiak = "Sagitarius"
        } else{
            zodiak = "Capricorn"
        }
    } else if(bulanLowerCase == "januari"){
        if(tanggalSlice <= 20){
            zodiak = "Capricorn"
        } else{
            zodiak = "Aquarius"
        }
    } else if(bulanLowerCase == "februari"){
        if(tanggalSlice <= 18){
            zodiak ="Aquarius"
        } else{
            zodiak ="Pisces"
        }
    } else if(bulanLowerCase == "maret"){
        if(tanggalSlice <= 20){
            zodiak = "Pisces"
        } else {
            zodiak = "Aries"
        }
    } else if(bulanLowerCase == "april"){
        if(tanggalSlice <= 19){
            zodiak = "Aries"
        } else {
            zodiak = "Taurus"
        }
    } else if(bulanLowerCase == "mei"){
        if(tanggalSlice <= 20){
            zodiak = "Taurus"
        } else {
            zodiak = "Gemini"
        }
    } else if(bulanLowerCase == "juni"){
        if(tanggalSlice <= 20){
            zodiak = "Gemini"
        } else{
            zodiak = "Cancer"
        }
    } else if(bulanLowerCase == "juli"){
        if(tanggalSlice <= 22){
            zodiak = "Cancer"
        } else {
            zodiak = "Leo"
        }
    } else if(bulanLowerCase == "agustus"){
        if(tanggalSlice <= 22){
            zodiak = "Leo"
        } else {
            zodiak = "Virgo"
        }
    } else if (bulanLowerCase == "september"){
        if(tanggalSlice <=22){
            zodiak = "Virgo"
        } else {
            zodiak = "Libra"
        }
    } else if(bulanLowerCase == "Oktober"){
        if(tanggalSlice <= 22){
            zodiak = "Libra"
        } else{
            zodiak = "Scorpio"
        }
    } else if(bulanLowerCase == "november"){
        if(tanggalSlice <= 21){
            zodiak = "Scorpio"
        } else{
            zodiak = "Sagittarius"
        }
    }
    console.log(zodiak)

    var yearNow = new Date().getFullYear()
    var usia = yearNow - tahun
    var pensiun = usia - 55

    arrData.push({
            nama: nama,
            tanggal: tanggalSlice,
            bulan: bulan,
            tahun: tahun,
            zodiak: zodiak,
            usia: usia,
            pensiun: pensiun,
            kota:kota
        })

    showAll()
}

function hapus(clicked_id){
    arrData.splice(clicked_id,1);
    showAll()
    console.log(arrData)
}


function sortNamaUp(){
    arrData.sort((a,b) => (a.nama > b.nama) ? 1 : -1)
    showAll()
}

// ES5
// function sortNamaUp(){
//     arrData.sort(function(a,b){
//         if(a.nama > b.nama){
//             return 1
//         } else{
//             return -1
//         }
//     })
// }

function sortNamaDown(){
    arrData.sort((a,b) => (a.nama < b.nama) ? 1 : -1)
    showAll()
}

function sortUsiaUp(){
    arrData.sort((a,b) => (a.usia > b.usia) ? 1 : -1)
    showAll()
}

function sortUsiaDown(){
    arrData.sort((a,b) => (a.usia < b.usia) ? 1 : -1)
    showAll()
}

function sortKotaUp(){
    arrData.sort((a,b) => (a.kota > b.kota) ? 1 : -1)
    showAll()
}
function sortKotaDown(){
    arrData.sort((a,b) => (a.kota < b.kota) ? 1 : -1)
    showAll()
}

