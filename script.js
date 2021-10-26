var datam=new Date()//minuto
var data=new Date()//hora
function carregarhora(){
    var horares1=document.getElementById('horares1')
    var imghora=document.getElementById('imagemhora')
    var horares2=document.getElementById('horares2')
    var minuto=datam.getMinutes()
    var hora=data.getHours()
    horares1.innerHTML=`Horario atual: ${hora}:${minuto}`
    if (hora <=5){
        horares2.innerHTML='Madrugada'
        imghora.src ='Imagens/DIa/madrugada.jpg'
        document.body.style.background="url('Imagens/DIa/noite1.jpg')"
    }else if (hora <=12){
        imghora.src ='Imagens/DIa/manha.jpg'
        horares2.innerHTML='Bom Dia!!'
        document.body.style.background="url('Imagens/DIa/manha1.jpg')"
    }else if (hora <18){
        imghora.src ='Imagens/DIa/tarde.jpg'
        horares2.innerHTML='Boa Tarde!!'
        document.body.style.background="url('Imagens/DIa/tarde1.jpg')"
    }else if (hora <=24){
        imghora.src ='Imagens/DIa/noite.jpg'
        horares2.innerHTML='Boa Noite'
        document.body.style.background="url('Imagens/DIa/noite1.jpg')"
    } else{
    }    
}
//acima, horario tempo real//
