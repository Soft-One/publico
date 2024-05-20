
https://190.216.128.18:9453/dxp/group/afiliados


const idPasActuel = '_com_liferay_login_web_portlet_LoginPortlet_password';
const idApellidoLogId = '_com_liferay_login_web_portlet_LoginPortlet_apellidoLog';


var el = document.getElementById(idApellidoLogId);
var elClone = el.cloneNode(true);
el.parentNode.replaceChild(elClone, el);
document.getElementById(idPasActuel).value = '';
document.getElementById(idApellidoLogId).value = '';


function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

function inputMaskePress(event){
    //console.log('test-lg: en inputMaskePress, ', event);
    //console.log('test-lg: en inputMaskePress: ', document.getElementById(idApellidoLogId).value);
    if(event && event.data != null){
        
        //console.log('test-lg: en inputMaskePress - event.data: ', event.data);
        
        let tecla = event.data;
        if(event.data.length > 1)
            tecla = event.data.substring(1, event.data.length)
        //console.log('test-lg: en inputMaskePress - tecla: ', tecla);
        //console.log('test-lg: en inputMaskePress - typeof tecla: ', isNumber(tecla));
    
        let adicionar = false;
        if(isNumber(tecla)){
            if(event.inputType == 'insertText'){
                adicionar = true;
            }if(event.data.length > 1 && event.inputType == 'insertCompositionText'){
                adicionar = true;
            }
        }else{
            adicionar = true;
        }

        if(adicionar){
            console.log('test-lg: en inputMaskePress - event.data: ', event.data);
            document.getElementById(idPasActuel).value = document.getElementById(idPasActuel).value + tecla
            console.log('test-lg: en inputMaskePress - data: ', document.getElementById(idPasActuel).value);
        }

        
    }
        
}

function inputMaskeUp(event){
    //console.log('test-lg: en inputMaskeUp: ', event);
    //console.log('test-lg: en inputMaskeUp: ', document.getElementById(idApellidoLogId).value);
    if(event){
        
        if(document.getElementById(idApellidoLogId).value == ''){
            document.getElementById(idPasActuel).value = ''
        }

        if(event.key == "Backspace" || event.key == "Delete"){
            document.getElementById(idPasActuel).value = document.getElementById(idPasActuel).value.substring(0, document.getElementById(idApellidoLogId).value.length);
        }else{
            //console.log('test-lg: en inputMaskeUp - texto: ', document.getElementById(idApellidoLogId).value);
            //console.log('test-lg: en inputMaskeUp - evento: ', event);
            //console.log('test-lg: en inputMaskeUp - key: ', event.key);
            //document.getElementById(idPasActuel).value = document.getElementById(idPasActuel).value + event.key
            //console.log('test-lg: en inputMaskeUp - data: ', document.getElementById(idPasActuel).value);

            let inputPs = document.getElementById(idApellidoLogId);
            inputPs.value = inputPs.value.replace(/./g, '*');
        }
    }
}

const inputPs = document.getElementById(idApellidoLogId);
inputPs.addEventListener("input", inputMaskePress);
inputPs.addEventListener("keyup", inputMaskeUp);




document.getElementById('_com_liferay_login_web_portlet_LoginPortlet_password').value


juparra@colfondos.com.co


