

const newLocal = "get-width";
let elements = document.getElementsByClassName(newLocal);
for(element of elements){
    element.textContent = element.textContent+' '+element.clientWidth+'px';
}
window.addEventListener("resize", function () {
    console.log(window.outerWidth);
    elementWidth = this.document.getElementById("window-outer-width");
    elementWidth.textContent = window.outerWidth+'px';

    for(element of elements){
        let legend = element.textContent;
        legend = legend.replace(/[\d]{2,}.+px/gm, element.clientWidth+'px');
        element.textContent = legend;
    }
});