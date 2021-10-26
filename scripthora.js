function calcidade(){
    var anovar=new Date()
    var anoatual=anovar.getFullYear()
    var anonasc=document.getElementById('anonasc')
    var idaderes=document.getElementById('idaderes')
    var idaderes1=document.getElementById('idaderes1')
    if(anonasc.value==0 || anonasc.value>anoatual){
        alert('[ERRO]')
    }else{
        var fsex=document.getElementsByName('radsex')
        var idade=anoatual - Number(anonasc.value)
        var genero=''
        var imgano=document.createElement('img')
    }if(fsex[0].checked){
      genero='Homem'
      if(idade >=0 && idade <10){
          imgano.setAttribute('src','pessoas/menino.jpg')
      } else if(idade <21){
          imgano.setAttribute('src','pessoas/jovemhomem.jpg')
      }else if(idade <50){
          imgano.setAttribute('src','pessoas/homem.jpg')
      }else if(idade <110){
          imgano.setAttribute('src','pessoas/senhor.jpeg')
      }else{
          imgano.setAttribute('src','pessoas/pó.jpg')
      }
    }else if(fsex[1].checked){
      genero='Mulher'
      if(idade >=0 && idade <10){
          imgano.setAttribute('src','pessoas/menina.jpg')
      } else if(idade <21){
          imgano.setAttribute('src','pessoas/jovemmulher.jpg')
      }else if(idade <50){
          imgano.setAttribute('src','pessoas/mulher.jpg')
      }else if(idade <110){
          imgano.setAttribute('src','pessoas/senhora.jpg')
      }else{
            imgano.setAttribute('src','pessoas/pó.jpg')  
      }
  }
  idaderes.style.textAlign='center'
  idaderes.innerHTML='Seu perfil é '+genero+' com '+idade+' anos.'
  idaderes1.appendChild(imgano)
}