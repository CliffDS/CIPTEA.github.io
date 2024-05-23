var $dialog = $(
    '<div id="idModalCarregando" class="modal in fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
    '<div class="modal-dialog modal-m">' +
    '<div class="modal-content">' +
    '<div class="modal-header"><span id="spnMsg" style="margin:0;"></span></div>' +
    '<div class="modal-body">' +
    '<div class="progress progress-striped active" style="margin-bottom:0;"><div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 100%"></div></div>' +
    '</div>' +
    '</div></div></div>');

var BootstrapDialog = {
    confirm: function (options) {

        if (options == undefined)
            return;

        if (options != undefined && options.callback == undefined)
            return;

        var TXT_MSG_TITULO = "Confirmar operação"
        var TXT_MSG_CONFIRMACAO = "Tem certeza que deseja realizar essa operação?"
        var TXT_BTN_SIM = "Sim";
        var TXT_BTN_NAO = "Não";
        var idModal = 'idModalConfirmacao';

        var vBooleanMostraBtNao = true;
        var vBooleanMostraBtClose = true;


        if (options != undefined) {
            if (options.titulo != undefined)
                TXT_MSG_TITULO = options.titulo;

            if (options.mensagem != undefined)
                TXT_MSG_CONFIRMACAO = options.mensagem;

            if (options.btn_sim != undefined)
                TXT_BTN_SIM = options.btn_sim;

            if (options.btn_nao != undefined)
                TXT_BTN_NAO = options.btn_nao;

            if (options.btn_nao == '')
                vBooleanMostraBtNao = false;


            if (options.closable == false)
                vBooleanMostraBtClose = false;

            if (options.idModal != undefined) {
                if (options.idModal != '')
                    idModal = options.idModal;
            }
        }

        var templateModal =
            '<div class="modal in fade" id="' + idModal + '" tabindex="-1" role="dialog" aria-labelledby="idModalConfirmacao" aria-hidden="true"  data-backdrop="static" data-keyboard="false">' +
            '<div class="modal-dialog" role="document" style="top:30%;">' +
            '<div class="modal-content">' +
            '<div class="modal-header">' +
            '<h5 class="modal-title" id="idModalLabelConfirmacao">{TXT_MSG_TITULO}</h5>'
        if (vBooleanMostraBtClose)
            templateModal += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                '<span aria-hidden="true">&times;</span>' +
                '</button>'


        templateModal += '</div>' +
            '<div class="modal-body">' +
            '{TXT_MSG_CONFIRMACAO}' +
            '</div>' +
            '<div class="modal-footer">'
        if (vBooleanMostraBtNao)
            templateModal += '<button type="button" id="btnModalNao" class="btn btn-secondary" data-dismiss="modal">{TXT_BTN_NAO}</button>'

        templateModal += '<button type="button" id="btnModalSim" class="btn btn-primary">{TXT_BTN_SIM}</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';

        templateModal = templateModal.replace("{TXT_MSG_TITULO}", TXT_MSG_TITULO);
        templateModal = templateModal.replace("{TXT_MSG_CONFIRMACAO}", TXT_MSG_CONFIRMACAO);
        templateModal = templateModal.replace("{TXT_BTN_SIM}", TXT_BTN_SIM);
        templateModal = templateModal.replace("{TXT_BTN_NAO}", TXT_BTN_NAO);

        templateModal = $(templateModal);

        //Evento dos botões
        templateModal.find("#btnModalSim").off('click').click(function (event) {
            event.preventDefault();
            event.stopPropagation();
            templateModal.modal('hide');
            options.callback(true);
        });

        templateModal.find("#btnModalNao").off('click').click(function (event) {
            event.preventDefault();
            event.stopPropagation();
            templateModal.modal('hide');
            options.callback(false);
        });

        templateModal.modal('show');
    },






    alert: function (param) {
        var options = {};
        if(typeof param === 'string'){
            options.TXT_MSG_TITULO = param;
        }else
{
options = param;
}

        console.log('options', options);
        var defaultAlertOptions = {
            TXT_MSG_TITULO: "Alerta",
            TXT_MSG_ALERTA: "Tem certeza que deseja realizar essa operação?",
            closable: false, //Trava o modal para só fechar através do botão ok
            //draggable: false,
            TXT_BTN_OK: 'Ok',
            //buttonHotkey: null,
            callback: null
        };
        console.log('options != undefined', options != undefined);
        console.log('options.titulo != undefined', options.titulo != undefined);
        console.log('options.titulo', options.titulo);

        if (options != undefined) {
            if (options.titulo != undefined)
                options.TXT_MSG_TITULO = options.titulo;

            if (options.mensagem != undefined)
                options.TXT_MSG_ALERTA = options.mensagem;

            if (options.btn_default != undefined)
                options.TXT_BTN_OK = options.btn_default;

            if (options.closable == false)
                options.vBooleanMostraBtClose = false;

            if (options.idModal != undefined) {
                if (options.idModal != '')
                    options.idModal = options.idModal;
            }
        }
        console.log('options.TXT_MSG_TITULO', options.TXT_MSG_TITULO);

        //Faz o merge dos parâmetros recebidos
        if (typeof arguments[0] === 'object' && arguments[0].constructor === {}.constructor) {
            options = $.extend(true, defaultAlertOptions, arguments[0]);
        } else {
            options = $.extend(true, defaultAlertOptions, {
                TXT_MSG_ALERTA: arguments[0],
                callback: typeof arguments[1] !== 'undefined' ? arguments[1] : null
            });
        }

        var templateModal =
            '<div class="modal in fade" id="idModalAlerta" tabindex="-1" role="dialog" aria-labelledby="idModalAlerta" aria-hidden="true">' +
            '<div class="modal-dialog" role="document" style="top:30%;">' +
            '<div class="modal-content">' +
            '<div class="modal-header">' +
            '<h5 class="modal-title" id="idModalLabelAlerta">{TXT_MSG_TITULO}</h5>' +
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span>' +
            '</button>' +
            '</div>' +
            '<div class="modal-body">' +
            '{TXT_MSG_ALERTA}' +
            '</div>' +
            '<div class="modal-footer">' +
            '<button type="button" id="btnOk" class="btn btn-primary" data-backdrop="static" data-dismiss="modal">{TXT_BTN_OK}</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';

        templateModal = templateModal.replace("{TXT_MSG_TITULO}", options.TXT_MSG_TITULO);
        templateModal = templateModal.replace("{TXT_MSG_ALERTA}", options.TXT_MSG_ALERTA);
        templateModal = templateModal.replace("{TXT_BTN_OK}", options.TXT_BTN_OK);

        templateModal = $(templateModal);

        //Evento dos botões
        templateModal.find("#btnOk").off('click').click(function (event) {
            event.preventDefault();
            event.stopPropagation();
            templateModal.modal('hide');

            if (options.callback !== null) {
                options.callback(true);
            }
        });

        templateModal.modal('show', { backdrop: 'static', keyboard: false });

        if (!options.closable) {
            templateModal.off().on('hide.bs.modal', function (e) {

                if (event.target.id == "btnOk") {
                    return true;
                }

                e.preventDefault();
                e.stopImmediatePropagation();
                return false;
            });
        }
    },
    showCarregando: function (options) {
        // Assigning defaults
        //console.log(options.message);

        if (typeof options === 'undefined') {
            options = {};
        }
        if (typeof options.message === 'undefined') {
            message = 'Carregando';
        }
        var settings = $.extend({
            dialogSize: 'm',
            progressType: '',
            onHide: null // This callback runs after the dialog was hidden
        }, options);

        // Configuring dialog
        $dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-' + settings.dialogSize);
        $dialog.find('.progress-bar').attr('class', 'progress-bar progress-bar-striped progress-bar-animated');
        if (settings.progressType) {
            $dialog.find('.progress-bar').addClass('progress-bar-' + settings.progressType);
        }
        $dialog.find('#spnMsg').html(options.message);
        // Adding callbacks
        if (typeof settings.onHide === 'function') {
            $dialog.off('hidden.bs.modal').on('hidden.bs.modal', function (e) {
                settings.onHide.call($dialog);
            });
        }
        // Opening dialog
        $dialog.modal();
    },
    hideCarregando: function () {
        setTimeout("$dialog.modal('hide');", 500);
    }
};

