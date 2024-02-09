AOS.init();

function scrollToAbout() {
    var aboutSection = document.getElementById('inscricao');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }

  function inscrever() {
    const nome = document.getElementById('nome').value;
    const id = document.getElementById('id').value;
    let nascimento = document.getElementById('brithday').value;
    nascimento = transformarData(nascimento);
    const message = `Olá gostaria de realizar a minha inscrição para o torneio.%0A%0A
    Meus dados são:%0A
    Nome: ${nome}%0A
    Id Pokemon: ${id}%0A
    Data de Nascimento: ${nascimento}`
    window.open(`https://api.whatsapp.com/send?phone=6282176651&text=${message}`,'_blank')
  }

  function transformarData(nascimento) {
    var dataOriginalString = nascimento;
    var dataOriginal = new Date(dataOriginalString);
    var dia = dataOriginal.getDate();
    var mes = dataOriginal.getMonth() + 1;
    var ano = dataOriginal.getFullYear();
    var dataTransformadaString = dia + '/' + mes + '/' + ano;
    return dataTransformadaString
  }

  function validarNumero(input) {
    input.value = input.value.replace(/\D/g, '');
  }