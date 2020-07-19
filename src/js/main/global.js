var protocol = window.location.protocol;
var hostname = window.location.hostname;
// show clock 
    tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
    
    function GetClock(){
    var d=new Date();
    var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getYear();
    var showClockHTML = document.getElementById('clockbox');
    if(nyear<1000) nyear+=1900;
    var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;
    
    if(nhour==0){ap=" AM";nhour=12;}
    else if(nhour<12){ap=" AM";}
    else if(nhour==12){ap=" PM";}
    else if(nhour>12){ap=" PM";nhour-=12;}
    
    if(nmin<=9) nmin="0"+nmin;
    if(nsec<=9) nsec="0"+nsec;
    showClockHTML.innerHTML=`<div>${tday[nday]}, ${tmonth[nmonth]}, ${ndate}, ${nyear}</div>`;
    showClockHTML.innerHTML+= '<div class="clock--big"> '+nhour+":"+nmin+":"+nsec+ap+"</div>";
    }
    
    window.onload=function(){
    GetClock();
    setInterval(GetClock,1000);
    }
// show clock 

// Call Api to show header
let apiUrl = `https://wolfactive.dev/wp-json/blog-api/v1/blog/offset=1&category=web-development`;
let newsShowHeader = document.querySelector('.header__news');
fetch(apiUrl)
        .then(response => response.json())
        .then(data =>{
            let content = ``;
            data.forEach((item,index)=>{
                if(index < 3){
                    content += `<a href="${item.url}" class="post__item d--block">
                                <div class="post__item-img">
                                    ${item.thumbnail}
                                </div>
                                <div class="post__item-title">
                                    ${item.title}
                                </div>
                            </a>`;
                }
            })
            newsShowHeader.innerHTML= content;
        })
// Call Api to show header
