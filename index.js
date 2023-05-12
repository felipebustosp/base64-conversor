// Obtener los elementos del DOM
const base64Txt = document.getElementById('base64-txt');
const inputTxt = document.getElementById('input-content-txt');
const jsonContentTxt = document.getElementById('json-content-txt');
const outputContentTxt = document.getElementById('output-content-txt');
const convertJsonBtn = document.getElementById('convert-json-btn');
const convertBase64Btn = document.getElementById('convert-base64-btn');
const formatJsonInputBtn = document.getElementById('format-input-json-btn');
const formatJsonOutputBtn = document.getElementById('format-output-json-btn');
const clearInputBtn = document.getElementById('clear-input-btn');
const clearOutputBtn = document.getElementById('clear-output-btn');


// Añadir el evento click al botón de convertir
convertJsonBtn.addEventListener('click', function() {
    try{
        const json = inputTxt.value;
        const decodedJson = JSON.parse(atob(json));
        outputContentTxt.value = JSON.stringify(decodedJson);
    }catch(error){
        const errorTag = document.getElementById('errors');
        errorTag.value = "Cannot format JSON";
    }
});

convertBase64Btn.addEventListener('click', function(){
    try {
        const json = JSON.parse(inputTxt.value);
        const jsonString = JSON.stringify(json);
        const base64String = btoa(jsonString);
        outputContentTxt.value = base64String;
    } catch(error){
        console.error('Invalid Json',error);
        outputContentTxt.value = "Invalid JSON";
    }
});

formatJsonInputBtn.addEventListener('click',function(){
    const jsonString = inputTxt.value;
    try{
        const parsedJson = JSON.parse(jsonString);
        const formtattedJson = JSON.stringify(parsedJson,null,2);
        inputTxt.value = formtattedJson;

    }catch(error){
        const errorTag = document.getElementById('errors');
        errorTag.value = "Cannot format JSON";
    }

});

formatJsonOutputBtn.addEventListener('click',function(){
    const jsonString = outputContentTxt.value;
    try{
        const parsedJson = JSON.parse(jsonString);
        const formtattedJson = JSON.stringify(parsedJson,null,2);
        outputContentTxt.value = formtattedJson;

    }catch(error){
        const errorTag = document.getElementById('errors');
        errorTag.value = "Cannot format JSON";
    }

});

clearInputBtn.addEventListener('click', function(){
    inputTxt.value="";
});

clearOutputBtn.addEventListener('click',function(){
    outputContentTxt.value="";
});