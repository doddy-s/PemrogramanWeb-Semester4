function helloWorld() {
  alert("Hewwo");
}

function gantiGambar(img) {
  img.src = "images/gambar03.webp";
}

function gantiGambarLagi(img) {
  img.src = "images/gambar01.svg";
}

function logIn() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username == "mario" && password == "1234") alert("login berhasil");
  else alert("login gagal");
}

function cekNilai(params) {
  const nilai = params.value;
  const info = document.getElementById("info");
  if (!nilai) {
    info.innerText = "";
    return;
  }
  if (nilai > 60) info.innerText = "ANDA LULUS";
  else if (nilai <= 60) info.innerText = "ANDA TIDAK LULUS";
}

const day = new Date().getDay();
const namaHari = ["minggu", "senin", "selasa", "rabu", "kamis"];
document.getElementById("namaHari").innerText = namaHari[day];

let li = "";
const listNama = ["ahmad", "bambang"];
for (let i = 0; i < listNama.length; i++) li += "<li>" + listNama[i] + "</li>";

document.getElementById("listNama").innerHTML = li;
