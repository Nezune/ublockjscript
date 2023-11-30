/// youtube.js
if(window.location.toString().match("/shorts/")){
window.location.replace(window.location.toString().replace('/shorts/', '/watch?v='));
}
