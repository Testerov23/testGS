function testGS(){

const url = "https://script.google.com/macros/s/AKfycbw9jL_AJB_A73auGSk29W_x-E4QRICKsDUSOsNwGuXyK0k_d4bL/exec";


fetch(url).then(d => d.json()).then(d =>{

	document.getElementById("app").textConten = d[0].status;

});

}
document.getElementById("btn").addEventListener("click",testGS);

