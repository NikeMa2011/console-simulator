// 决策树
var githubLink = "https;//github.com/NikeMa2011/";
var email = "huz193py@outlook.com";

let year, month, day, weekday, minute, second, millisecond;

function run(keyWords) {
    if(keyWords[0] == undefined) {
        addParagraph();
    } else if(keyWords[0] == "introduce") {// 介绍
        if(keyWords[1] == undefined) addParagraph("Error: no language string, type language to define output language, 2 options available: english, chinese");
        else if(keyWords[1] == "english") {
            text = `
                Welcome to the console simulator!<br>
                this is a project only for practice<br>
                by Nike Ma<br>
                source code: ${githubLink}<br>
                contact: ${email}`;
            addParagraph(text);
        } else if(keyWords[1] == "chinese") {
            text = `
                欢迎来到 控制台模拟器!<br>
                这只是一个拿来实践的项目<br>
                由Nike Ma制作<br>
                源代码: ${githubLink}<br>
                联系方式: ${email}`;
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
        `;
        addParagraph(text);
    } else if(keyWords[0] == "open") {//打开网站
        var link = keyWords[1];
        if(link[5] == ':' || link[6] == ':') {
            addParagraph("opening " + keyWords[1]);
            setTimeout(() => {
                window.open(keyWords[1]);
            }, 1000);
        } else {
            addParagraph(`Warning: didnt define the http<br>opening ${keyWords[1]}`);
            setTimeout(() => {
                window.open("http://" + keyWords[1]);
            }, 1000);
        }
    } else if(keyWords[0] == "date") {// 日期
        if(keyWords[1] == undefined) addParagraph("Error: no option string, 5 options available: year, month, day, full and all");
        else if(keyWords[1] == "year") addParagraph(year);
        else if(keyWords[1] == "month") addParagraph(month + 1);
        else if(keyWords[1] == "day") addParagraph(day);
        else if(keyWords[1] == "weekday") addParagraph(weekday);
        else if(keyWords[1] == "full") {
            text = year + '-' + (month + 1) + '-' + day;
            addParagraph(text);
        } else if(keyWords[1] == "all") {
            text = year + '-' + (month + 1) + '-' + day + ' ' + weekday;
            addParagraph(text);
        } else err();
    } else if(keyWords[0] == "time") {// 时间
        if(keyWords[1] == undefined) addParagraph("Error: no option string, 6 options available: hour, minute, second, millisecond, full and all");
        else if(keyWords[1] == "hour") addParagraph(hour);
        else if(keyWords[1] == "minute") addParagraph(minute);
        else if(keyWords[1] == "second") addParagraph(second);
        else if(keyWords[1] == "millisecond") addParagraph(millisecond);
        else if(keyWords[1] == "full") {
            text = hour + ':' + minute + ':' + second;
            addParagraph(text);
        } else if(keyWords[1] == "all") {
            text = hour + ':' + minute + ':' + second + ':' + millisecond;
            addParagraph(text);
        } else err();
    } else if(keyWords[0] == "when") {
        text = year + '-' + (month + 1) + '-' + day + " " + hour + ':' + minute + ':' + second + ':' + millisecond;
        addParagraph(text);
    } else if(keyWords[0] == "time-count") {// 计时
        if(keyWords[1] == undefined) addParagraph("Error: no option string, 3 options available: hour, minute and second");
        else if(keyWords[1] == "hour") {
            if(keyWords[2] <= 4 && keyWords[2] > 0) {
                coutTime();
                setTimeout(() => {
                    addParagraph("time count out");
                }, keyWords[2] * 60 * 60 * 1000);
            }
            else if(keyWords[2] > 4) addParagraph("Error: maxium input is 4");
            else if(keyWords[2] <= 0) addParagraph("Error: input cannot be or smaller than 0");
            else err();
        }
        else if(keyWords[1] == "minute") timeCount(60);
        else if(keyWords[1] == "second") timeCount(60);
        else err();
    } else if(keyWords[0] == "print") {// 输出
        if(keyWords[1] == undefined) addParagraph("Error: no string to output");
        else addParagraph(keyWords[1]);
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
function timeCount(inputNum) {
    if(keyWords[2] <= inputNum && keyWords[2] > 0) {
        coutTime();
        setTimeout(() => {
            addParagraph("time count out");
        }, keyWords[2] * 60 * 1000);
    }
    else if(keyWords[2] > inputNum) addParagraph("Error: maxium input is " + inputNum);
    else if(keyWords[2] <= 0) addParagraph("Error: input cannot be or smaller than 0");
    else err();
}
setInterval(() => {
    let date = new Date;
    year = date.getFullYear();
    month = (date.getMonth() + 1);
    day = date.getDate();
    weekday = date.getHours();
    hour = date.getHours();
    minute = date.getMinutes()
    second = date.getSeconds();
    millisecond = date.getMilliseconds();
}, 1000);
