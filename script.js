AOS.init();

tcgTournament = false;
goTournament = false;
var campoAniversario = document.getElementById('birthday-tcg');


function registrationControl(tcgTournamentSelect) {
  var activeGoForm = document.getElementById('go-form');
  var activeTcgForm = document.getElementById('tcg-form');
  if (tcgTournamentSelect) {
    activeTcgForm.style.display = 'flex';
    activeGoForm.style.display = 'none';
    campoAniversario = document.getElementById('birthday-tcg');
    startDate()
  }
  if (!tcgTournamentSelect) {
    activeTcgForm.style.display = 'none';
    activeGoForm.style.display = 'flex';
    campoAniversario = document.getElementById('birthday-go');
    startDate()
  }
}

var dataAtual = new Date();
let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth() + 1;
let dia = dataAtual.getDate();

function obterDataAtual(date) {
  var dataFormatada;
  let anoInput = date.substring(0, 4);
  let mesInput = date.substring(5, 7);
  let diaInput = date.substring(8, 10);
  if (date.length === 0) return ''
  dataFormatada = diaInput + '/' + mesInput + '/' + anoInput;
  return dataFormatada;
}

function startDate() {
  function formaterDataInicial() {
    return (ano + '-' + (mes < 10 ? '0' : '') + mes + '-' + (dia < 10 ? '0' : '') + dia);
  }
  
  campoAniversario.max = formaterDataInicial();
  campoAniversario.value = formaterDataInicial();
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
    if (campoAniversario.value.slice(0, 4) > ano) {
        campoAniversario.value = ano + campoAniversario.value.substring(4);
    }
    if ((campoAniversario.value.slice(5, 7) > mes) && (campoAniversario.value.slice(0, 4) == ano)) {
      mes = mes*1;
      mes = (mes < 10 ? '0' : '') + mes;
      campoAniversario.value = campoAniversario.value.substring(0,5) + mes + campoAniversario.value.substring(7,10);
    }
    if ((campoAniversario.value.slice(8, 10) > dia) && (campoAniversario.value.slice(5, 7) == mes) && (campoAniversario.value.slice(0, 4) == ano)) {
      dia = dia*1;
      dia = (dia < 10 ? '0' : '') + dia;
      campoAniversario.value = campoAniversario.value.substring(0,8) + dia;
    }
  });
  
  campoAniversario.addEventListener('blur', function() {
    if (campoAniversario.value.slice(0, 4) < 1900) {
      alert("Por favor, insira um ano válido. Para este formulário deve ser igual ou superior a 1900.");
      campoAniversario.value = 1900 + campoAniversario.value.substring(4);
    }
  });
}


function scrollToAbout() {
    var aboutSection = document.getElementById('inscricao');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }

  function inscrever(tcgForm = true) {
    const torneio = tcgForm === true ? 'League Challenge de TCG' : 'CUP GO'
    const tcgOrGO = tcgForm === true ? 'tcg' : 'go'
    const nome = document.getElementById(`nome-${tcgOrGO}`).value;
    const id = document.getElementById(`id-${tcgOrGO}`).value;
    let nascimento = document.getElementById(`birthday-${tcgOrGO}`).value;
    nascimento = obterDataAtual(nascimento);
    if (nome === '' || id === '') {
      let messageAlert = (nome === '' && id === '') ? 'um nome e um id' : nome === '' ? 'um nome' : 'um id'
      alert(`Por favor, insira ${messageAlert}.`);
      return
    }
    
    const message = `Olá gostaria de realizar a minha inscrição para o ${torneio}.%0A%0AMeus dados são:%0ANome: ${nome}%0AId Pokemon: ${id}%0AData de Nascimento: ${nascimento}`
    window.open(`https://api.whatsapp.com/send?phone=6282176651&text=${message}`,'_blank')
  }

  function validarNumero(input) {
    input.value = input.value.replace(/\D/g, '');
  }