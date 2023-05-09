// Mendapatkan semua tombol pada halaman
const buttons = document.querySelectorAll("button");

// Menambahkan event listener pada setiap tombol
buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Tombol ini telah ditekan!");
  });
});
