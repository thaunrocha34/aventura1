const avanca = Document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
  button.addEventistener('click',function() {
    const atual = document.querySelector('.ativo') 
    const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

    atual.classList.remove('ativo');
document.gete
    })
   })
