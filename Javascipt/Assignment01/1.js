var sub1=91;
var sub2=90;
var sub3=90;
var sub4=90;
var sub5=90;
var sum = sub1+sub2+sub3+sub4+sub5;
var per = sum/5;
if(per>90 && per<100){
    console.log("Grade A");
}
if(per>80 && per<=90){
    console.log("Grade B");
}
if(per>70 && per<=80){
    console.log("Grade C");
}
if(per>60 && per<=70){
    console.log("Grade D");
}
if(per<60){
    console.log("Fail");
}