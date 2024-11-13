// intro title 타이핑
const $txt = document.querySelector(".txt-title");
const content = "안녕하세요 \n장형준 Portfolio 입니다.";
let contentIndex = 0;

let typing = function(){
    $txt.innerHTML += content[contentIndex];
    contentIndex++;
    if(content[contentIndex] === "\n"){
        $txt.innerHTML += "<br />";
        contentIndex++;
    }
    if(contentIndex > content.length){
        $txt.textContent = "";
        contentIndex = 0;
    }
};

setInterval(typing, 200);