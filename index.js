// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;

  /*
    TODO 1: Buatlah sebuah variabel bernama "hasilLooping" 
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
  */
  let hasilLooping = [];
  /* 
    data dari JSON 
    "namaDepan": "Edyth",
    "namaBelakang": "Roberts",
  */
  for(hL = 0; hL < arrPegawai.length; hL++) {
    let depanBelakang = dataYangAkanDilooping[hL].namaDepan + ' ' + (dataYangAkanDilooping[hL].namaBelakang);
    hasilLooping.push(depanBelakang);
  };

  /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai
  */
  /* 
    data dari JSON 
    "jenisKelamin": "M"
  */
  let jumlahPria = 0;
  for (jP = 0; jP < dataYangAkanDilooping.length; jP++) {
    if (dataYangAkanDilooping[jP].jenisKelamin == 'M') {
      jumlahPria = jumlahPria + 1;
    }
  };

  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai
  */
  /*
  data dari JSON 
    "jenisKelamin": "F"
  */
  let jumlahWanita = 0;
  for (jW = 0; jW < dataYangAkanDilooping.length; jW++) {
    if (dataYangAkanDilooping[jW].jenisKelamin == 'F') {
      jumlahWanita = jumlahWanita + 1;
    }
  };

  /*
    TODO 4: Buatlah sebuah variabel bernama "komentar"
      yang akan mengomentari apakah lebih banyak Pria atau Wanita
      
      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        "Jumlah Pria lebih banyak dari Wanita"
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        "Jumlah Wanita lebih banyak dari Pria"
      Apabila imbang, maka komentar akan berisi:
        "Jumlah Pria dan Wanita berimbang"
  */
  let komentar = "";
  if (jumlahPria > jumlahWanita) {
    komentar =  "Jumlah Pria lebih banyak dari Wanita";
  } else if (jumlahPria < jumlahWanita) {
    komentar =  "Jumlah Wanita lebih banyak dari Pria";
  } else {
    komentar = "Jumlah Pria dan Wanita berimbang";
  };


  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log(hasil.hasilLooping);
  console.log(hasil.jumlahPria);
  console.log(hasil.jumlahWanita);
  console.log(hasil.komentar); //hasil komentar belum tampil
  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;
