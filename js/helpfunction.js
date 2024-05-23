
function limparMensagemErro(campo) {
    campo.css('border-color', ''); // Remove a borda vermelha do campo
    var formulario = campo.closest('form');
    formulario.find('.mensagem-erro').hide();
}

function validarFormulario(formularioId) {
    var form = $('#' + formularioId);
    var isValid = true;

    // Resetar as mensagens de erro
    form.find('.mensagem-erro').hide();

    // Verifica cada campo de entrada dentro do formulário
    form.find('input[required]').each(function () {
        var campo = $(this).attr('name');
        var mensagemErro = $('#mensagem' + campo.charAt(0).toUpperCase() + campo.slice(1));

        if (!$(this).val()) {
            $(this).css('border-color', 'red');
            //mensagemErro.text('Por favor, preencha o campo ' + campo + '.').show();
            mensagemErro.text('Campo obrigatório.').show();
            isValid = false;
        } else {
            $(this).css('border-color', '');
            mensagemErro.hide(); // Oculta a mensagem de erro se o campo estiver válido
        }
    });

    return isValid;
}

$('[mascara-placa-antiga-e-mercosul]').on('input', function () {

    const regexPlaca = /^([a-zA-Z]{0,3})([0-9]{0,4})$/;
    const regexPlacaMercosulCarro = /^([A-Z]{0,3})(\d{0,1})([A-Z]{0,1})(\d{0,2})$/;

    let valorPlaca = $(this).val().toUpperCase();
    let placaFormatada = "";

    // Remove todos os caracteres não alfanuméricos
    valorPlaca = valorPlaca.replace(/[^A-Z0-9]/g, '');

    // Aplica a máscara conforme a placa
    if (regexPlaca.test(valorPlaca)) {
        placaFormatada = valorPlaca.replace(regexPlaca, "$1$2");
    } else if (regexPlacaMercosulCarro.test(valorPlaca)) {
        placaFormatada = valorPlaca.replace(regexPlacaMercosulCarro, "$1$2$3$4");
    }

    // Atualiza o valor do input com a placa formatada
    $(this).val(placaFormatada);
});