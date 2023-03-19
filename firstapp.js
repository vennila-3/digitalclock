const a=document.querySelector('.clock');
function time(){
    var r=new Date();
    var h=r.getHours();
    var m=r.getMinutes();
    var s=r.getSeconds();
    var t="AM";
    if(h>12)
    {
        h=h-12;
        t="PM";
    }
    else if(h==0)
    {
        h=12;
        t="AM";
    }

h=h<10?'0'+h:h;
m=m<10?'0'+m:m;
s=s<10?'0'+s:s;
a.innerHTML=`${h} : ${m} : ${s}  ${t}`
}
setInterval(time,1000)
