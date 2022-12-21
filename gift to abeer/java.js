let a= prompt(" المهندسة المستقبليه");

let s=`<h1>سهام</h1>
<p> ${ a } اختي الصغيرة المدللا وانا احبها كثيرا و احب ازاعجها تبدو اللطف عندمت تغضب 
</p>

`, d= `<h1>عبير</h1>
<p>الف مبرووك نجاحك و اتمنى أن تصلي الى حلمك </p>
<p>وتحققي إنجازات كبيرة يعجز اللسان عن وصفها لأنك <span>اختي</span> العزيزة</p>
`;
switch(a) {
  case "عبير": 
  document.write(d);
  break;
  case "سهام" :
  case "سوسو" :
    document.write(s)
    break;
  default:alert("what is the name again");
}