AOS.init();

function obterDataAtual(date) {
  var dataAtual = (date != undefined ? new Date(date) : new Date());
  var ano = dataAtual.getFullYear() + (date ? 1 : 0);
  var mes = dataAtual.getMonth() + 1;
  var dia = dataAtual.getDate();
  var dataFormatada; 
  if (date != undefined) {
    if (date.length === 0) return ''
    dataFormatada = dia + '/' + (mes >= 10 ? mes : `0${mes}`) + '/' + ano;
  } else {
    dataFormatada = ano + '-' + (mes < 10 ? '0' : '') + mes + '-' + (dia < 10 ? '0' : '') + dia;
  }
  return dataFormatada;
}


var campoAniversario = document.getElementById('brithday');
campoAniversario.max = obterDataAtual();
campoAniversario.value = obterDataAtual();
var oldDate;

campoAniversario.addEventListener('change', function() {
  if (oldDate === undefined) {
    oldDate = campoAniversario.value
  }
  if (oldDate != undefined && campoAniversario.value != '') {
    oldDate = campoAniversario.value
  }
  if (oldDate != undefined && campoAniversario.value === '') {
    campoAniversario.value = oldDate
  }
  if (campoAniversario.value.slice(0, 4) > 2024) {
      campoAniversario.value = 2024 + campoAniversario.value.substring(4);
    }
});

campoAniversario.addEventListener('blur', function() {
  if (campoAniversario.value.slice(0, 4) < 1900) {
    alert("Por favor, insira um ano válido. Para este formulário deve ser igual ou superior a 1900.");
    campoAniversario.value = 1900 + campoAniversario.value.substring(4);
  }
});

function scrollToAbout() {
    var aboutSection = document.getElementById('inscricao');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }

  function inscrever() {
    const nome = document.getElementById('nome').value;
    const id = document.getElementById('id').value;
    let nascimento = document.getElementById('brithday').value;
    nascimento = obterDataAtual(nascimento);
    const message = `Olá gostaria de realizar a minha inscrição para o torneio.%0A%0A
    Meus dados são:%0A
    Nome: ${nome}%0A
    Id Pokemon: ${id}%0A
    Data de Nascimento: ${nascimento}`
    window.open(`https://api.whatsapp.com/send?phone=6282176651&text=${message}`,'_blank')
  }

  function validarNumero(input) {
    input.value = input.value.replace(/\D/g, '');
  }