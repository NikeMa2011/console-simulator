const index = document.getElementById("index");
const body = document.body;
let selectLine, selectInput, selectNum = -1;
let inputLengh, inputString = '';

let newElement;
const version = "Beta 0.4.6";
const firstText = `
Console Simulator [version ` + version + `], By Nike Ma<br>
type "introduce" or "help" for more information
`;
var text, title = '';

const specialKeys = ["CapsLock", "Shift", "Control", "Alt", "Meta", "Tab", "Escape", "Enter", "Backspace","Arrow"];

// 文本/段落添加
function addParagraph(text) {// 文本/段落
    selectNum++;
    newElement = "<p id=\"" + selectNum + "\">" + text + "</p>";
    index.innerHTML += newElement;
    addInputLine();
}
function addInputLine() {// 输入行
    selectNum++;
    newElement = "<p id=\"" + selectNum + "\">" + title + "&gt;" + "<span id=\"" + selectNum + "_inp" + "\"></span></p>";
    index.innerHTML += newElement;
    getLine();
}
function getLine() {// 获取新添加的元素
    selectLine = document.getElementById(selectNum);
    selectInput = document.getElementById( selectNum + "_inp");
    getLineLength();
    inputString = selectInput.innerHTML;
}
function getLineLength(){
    inputLengh = selectInput.innerHTML.length;
}
function refresh(){
    selectInput.innerHTML = inputString;
}
// 测试用
function cout(object) {
    console.log(object);
}
// 初始化
addParagraph(firstText);

// 监听事件
window.addEventListener("keydown", function(event) {
    if(event.key == "Enter") {
        if(inputString == null) {
            addInputLine();
        } else {
            searchKeyWords(inputString);
        }
    } else if(event.key == "Backspace") {
        getLineLength();
        inputString = inputString.slice(0, - 1);
        refresh();
    } else if(!specialKeys.includes(event.key)) {// 判断是否为特殊输入
        inputString += event.key;
        refresh();
        getLineLength();
    }
});
//主要判断
function searchKeyWords(input) {// 检测关键字算法
    var keyWords = {}, keyWordNum = 0;
    for(var i = 0; i < inputLengh; i++) {
        if(input[i] === ' ') {
            keyWordNum++;
            continue;
        } else {
            if (!keyWords[keyWordNum]) {
                keyWords[keyWordNum] = '';
            }
            keyWords[keyWordNum] += input[i];
        }
    }
    run(keyWords);
}