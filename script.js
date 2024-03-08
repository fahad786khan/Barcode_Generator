let input = document.getElementById("input");
let btn = document.getElementById("btn-generate");
btn.addEventListener("click",() => {
    JsBarcode("#barcode",input.value,{
        format:"code128",
        displayValue: true,
        fontSize : 24,
        lineColor: "#000000",
    });
});
window.onload = (event) => {
    input.value = "";
};