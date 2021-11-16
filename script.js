const text = '460462_Delavito Bintang Mahaputra_Tugas Kalkulus 7.pdf';
const arr = text.split('_');

const arr2 = arr[2].split('.');

const data = {
    niu: Number(arr[0]),
    nama: arr[1],
    judul: arr2[0],
    ekstensi: arr2[1],
};

console.log(data)
