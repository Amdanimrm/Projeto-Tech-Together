
//BOTÃO: AO CLICA-LO, FAZ COM QUE O USUÁRIO RETORNE AO INICIO DA PÁGINA (funcionalidade JS)
const btn = document.getElementById("backToTop");

// Mostrar botão quando rolar 300px pra baixo
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Voltar suavemente ao topo
btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});