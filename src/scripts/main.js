document.addEventListener('DOMContentLoaded',function(){
    

   var tabalvo=document.querySelectorAll('.tab-alvo__item')  
   

    for(var i=0; i < tabalvo.length;i++){
        
        tabalvo[i].addEventListener('click',function(botao){

            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas()
            aba.classList.add('aba--view')
            
        })

    }
    

})


function escondeTodasAbas() {
    const tabContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabContainer.length; i++) {

        tabContainer[i].classList.remove('aba--view')
    }

}