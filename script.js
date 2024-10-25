function buscar() {
    let input = document.getElementById('buscador').value.toLowerCase();
    let refugios = document.getElementsByClassName('refugio');
    
    for (let i = 0; i < refugios.length; i++) {
        let refugio = refugios[i];
        let texto = refugio.innerText.toLowerCase();
        
        if (texto.includes(input)) {
            refugio.style.display = '';
        } else {
            refugio.style.display = 'none';
        }
    }
}