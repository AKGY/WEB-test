
name = prompt("학생 이름은?");
    //name = "AKGY"
kor = prompt("국어 성적은?");
    //kor = 100;
eng = prompt("영어 성적을 입력하시오.");
    //eng = 100;
math = prompt("수학 성적은?");
    //math = 90;

total = parseInt(kor) + parseInt(eng) + parseInt(math);
ave = total / 3;

document.write("<table border=1><caption><h3>성적 처리 결과</h3></caption>");
document.write("<tr><td>이름 : </td><td>", name, "</td></tr>");
document.write("<tr><td>국어 : </td><td>", kor, "</td></tr>");
document.write("<tr><td>영어 : </td><td>", eng, "</td></tr>");
document.write("<tr><td>수학 : </td><td>", math, "</td></tr>");
document.write("<tr><td>총점 : </td><td>", total, "</td></tr>");
document.write("<tr><td>평균 : </td><td>", ave, "</td></tr>");
document.write("</table>");
