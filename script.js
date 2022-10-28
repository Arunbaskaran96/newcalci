function creatrButton(tagname,attrname,attrval,events,funcname,content){
    var element=document.createElement(tagname);
    element.setAttribute(attrname,attrval)
    element.innerHTML=content
    element.addEventListener(events,funcname)
    return element
}



function createDiv(tagname,attrname,attrval){
    var element=document.createElement(tagname)
    element.setAttribute(attrname,attrval)
    return element
}

function createBreak(taganme){
    var element=document.createElement(taganme)
    return element
}

function createRow(taganme,attrname,attrval){
    var element=document.createElement(taganme)
    element.setAttribute(attrname,attrval)
    return element
}



var head=document.createElement("h1")
head.innerHTML="Calculator"
head.setAttribute("id","title")
var container=createDiv("div","class","container")

var int=document.createElement("input")
int.setAttribute("type","text")
int.setAttribute("id","result")
var brr=createBreak("br")

var row1=document.createElement("div")



var button1=creatrButton("button","class","numbers","click",num9,9)
var button2=creatrButton("button","class","numbers","click",num8,8)
var button3=creatrButton("button","class","numbers","click",num7,7)
var buttonadd=creatrButton("button","id","add","click",add,"+")
var bk=createBreak("br")
var button5=creatrButton("button","class","numbers","click",num6,6)
var button6=creatrButton("button","class","numbers","click",num5,5)
var button7=creatrButton("button","class","numbers","click",num4,4)
var buttonsub=creatrButton("button","id","subtract","click",sub,"-")
var br2=createRow("br","class","br1")
var button8=creatrButton("button","class","numbers","click",num3,3)
var button9=creatrButton("button","class","numbers","click",num2,2)
var button10=creatrButton("button","class","numbers","click",num1,1)
var buttonmul=creatrButton("button","class","numbers","click",mul,"*")
var br3=createBreak("br")
var button11=creatrButton("button","id","clear","click",clr,"AC")
var button12=creatrButton("button","class","numbers","click",num0,0)
var buttondiv=creatrButton("button","class","numbers","click",div,"/")
var buttoneq=creatrButton("button","id","equal","click",calculate,"=")


row1.append(head,int,brr,button1,button2,button3,buttonadd,bk,button5,button6,button7,buttonsub,br2,button8,button9,button10,buttonmul,br3,button11,button12,buttondiv,buttoneq)
document.body.append(row1)


function clr(){
    document.getElementById("result").value=""
}

function calculate(){
        var x=document.getElementById("result").value
    var res=eval(x)
    document.getElementById("result").value=res
}

function num9(){
    document.getElementById("result").value+="9"
}
function num8(){
    document.getElementById("result").value+="8"
}
function num7(){
    document.getElementById("result").value+="7"
}
function add(){
    document.getElementById("result").value+="+"
}
function num6(){
    document.getElementById("result").value+="6"
}
function num5(){
    document.getElementById("result").value+="5"
}
function num4(){
    document.getElementById("result").value+="4"
}
function sub(){
    document.getElementById("result").value+="-"
}
function num3(){
    document.getElementById("result").value+="3"
}
function num2(){
    document.getElementById("result").value+="2"
}
function num1(){
    document.getElementById("result").value+="1"
}
function mul(){
    document.getElementById("result").value+="*"
}
function num0(){
    document.getElementById("result").value+="0"
}
function div(){
    document.getElementById("result").value+="/"
}