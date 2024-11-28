// 决策树
var githubLink = "https;//github.com/NikeMa2011/";
var email = "huz193py@outlook.com";

let date = new Date;//初始化

function run(keyWords) {
    if(keyWords[0] == "introduce") {// 介绍
        if(keyWords[1] == undefined) {
            text = `Error: no language string, type language to define output language, 2 options available: english, chinese`;
            addParagraph(text);
        } else if(keyWords[1] == "english") {
            text = `
                Welcome to the console simulator!<br>
                this is a project only for practice<br>
                by Nike Ma<br>
                source code: ` + githubLink + `<br>
                contact: ` + email;
            addParagraph(text);
        } else if(keyWords[1] == "chinese") {
            text = `
                欢迎来到 控制台模拟器!<br>
                这只是一个拿来实践的项目<br>
                由Nike Ma制作<br>
                源代码: ` + githubLink + `<br>
                联系方式h: ` + email;
            addParagraph(text);
        } else err();
    } else if(keyWords[0] == "help") {// 帮助
        text = `
            helps:<br>
            clear  ^clear console<br>
            when  ^show all date and time<br>
            date  ^show date, includes year, month, day, weekday or all<br>
            time  ^show time, includes hour, minute, second, millisecond, full or all<br>
            time-count ^count down time, includes hour minute and second<br>
            help  ^find for help<br>
            introduce "language"  ^introduce this website<br>
            open  "http link"  ^open a website, able compare do http defined or not<br>
            print  ^print text
        `;//    <br>
        addParagraph(text);
    } else if(keyWords[0] == "open") {//打开网站
        var link = keyWords[1];
        if(link[5] == ':' || link[6] == ':') {
            addParagraph("opening " + keyWords[1]);
            setTimeout(() => {
                window.open(keyWords[1]);
            }, 1000);
        } else {
            addParagraph("Warning: didnt define the http<br>opening " + keyWords[1]);
            setTimeout(() => {
                window.open("http://" + keyWords[1]);
            }, 1000);
        }
    } else if(keyWords[0] == "date") {// 日期
        if(keyWords[1] == undefined) {
            addParagraph("Error: no option string, 5 options available: year, month, day, full and all");
        } else if(keyWords[1] == "year") {
            addParagraph(date.getFullYear());
        } else if(keyWords[1] == "month") {
            addParagraph(date.getMonth() + 1);
        } else if(keyWords[1] == "day") {
            addParagraph(date.getDate());
        } else if(keyWords[1] == "weekday") {
            addParagraph(date.getDay());
        } else if(keyWords[1] == "full") {
            text = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
            addParagraph(text);
        } else if(keyWords[1] == "all") {
            text = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getDay();
            addParagraph(text);
        } else err();
    } else if(keyWords[0] == "time") {// 时间
        if(keyWords[1] == undefined) {
            addParagraph("Error: no option string, 6 options available: hour, minute, second, millisecond, full and all");
        } else if(keyWords[1] == "hour") {
            addParagraph(date.getHours());
        } else if(keyWords[1] == "minute") {
            addParagraph(date.getMinutes());
        } else if(keyWords[1] == "second") {
            addParagraph(date.getSeconds());
        } else if(keyWords[1] == "millisecond") {
            addParagraph(date.getMilliseconds());
        } else if(keyWords[1] == "full") {
            text = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
            addParagraph(text);
        } else if(keyWords[1] == "all") {
            text = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ':' + date.getMilliseconds();
            addParagraph(text);
        } else err();
    } else if(keyWords[0] == "when") {
        text = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ';//日期
        text += (date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());//时间
        addParagraph(text);
    } else if(keyWords[0] == "time-count") {// 计时
        if(keyWords[1] == undefined) {
            addParagraph("Error: no option string, 3 options available: hour, minute and second");
        } else if(keyWords[1] == "hour") {
            if(keyWords[2] <= 4 && keyWords[2] > 0) {
                coutTime();
                setTimeout(() => {
                    addParagraph("time count out");
                }, keyWords[2] * 60 * 60 * 1000);
            } else if(keyWords[2] > 4) {
                addParagraph("Error: maxium input is 4");
            } else if(keyWords[2] <= 0) {
                addParagraph("Error: input cannot be or smaller than 0");
            } else err();
        } else if(keyWords[1] == "minute") {
            if(keyWords[2] <= 60 && keyWords[2] > 0) {
                coutTime();
                setTimeout(() => {
                    addParagraph("time count out");
                }, keyWords[2] * 60 * 1000);
            } else if(keyWords[2] > 60) {
                addParagraph("Error: maxium input is 60");
            } else if(keyWords[2] <= 0) {
                addParagraph("Error: input cannot be or smaller than 0");
            } else err();
        } else if(keyWords[1] == "second") {
            if(keyWords[2] <= 60 && keyWords[2] > 0) {
                coutTime();
                setTimeout(() => {
                    addParagraph("time count out");
                }, keyWords[2] * 60 * 1000);
            } else if(keyWords[2] > 60) {
                addParagraph("Error: maxium input is 60");
            } else if(keyWords[2] <= 0) {
                addParagraph("Error: input cannot be or smaller than 0");
            } else err();
        } else err();
    } else if(keyWords[0] == "print") {// 输出
        if(keyWords[1] == undefined) {
            addParagraph("Error: no string to output");
        } else {
            addParagraph(keyWords[1]);
        }
    } else if(keyWords[0] == "hello") {// 你好世界
        addParagraph("world!");
    } else if(keyWords[0] == "clear") {// 清空
        index.innerHTML = null;
        addParagraph(firstText);
    } else err();
}
function err() {
    addParagraph("Error: invalid input");
}
function coutTime() {
    cout("time: " + keyWords[2] + keyWords[1] + "counting");
}
