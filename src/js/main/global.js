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
// Speech function 
if (annyang) {
  // Let's define a command.
    const commands = {
        'hello': () => {
            var contentShow = document.querySelector('#PostCategory');
            contentShow.innerHTML = `<h1 class="title--section text--center"> HELLO!!!</h1>`;
        },
        'music on': () => {
            var contentShow = document.querySelector('#PostCategory');
            contentShow.innerHTML = `<iframe width="50%" height="300" id="soundCloud" style="margin: 0 auto; display:block" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/75666326&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"></div>`;
        },
        'music off': () => {
            var contentShow = document.querySelector('#PostCategory');
            contentShow.innerHTML = ``;
        },
        'Ok': () => {
            var string = annyang.getSpeechRecognizer();
            console.log(string);
        },
        'show navbar': () => {
            var footerBtn = document.querySelector('.footer__btn');
            footerBtn.innerHTML = ` <div class="row-divide">
            <div class="col-divide-3 text--center">
                <button class="btn" aria-label="music-on">
                    <i class="fas fa-music icon text--light"></i>
                </button>
            </div>
            <div class="col-divide-3 text--center">
                <button class="btn" aria-label="event-on">
                    <i class="fas fa-calendar icon text--light"></i>
                </button>
            </div>
            <div class="col-divide-3 text--center">
                <button class="btn" aria-label="refesh-mirror">
                    <i class="fas fa-sync icon text--light"></i>
                </button>
            </div>
            <div class="col-divide-3 text--center">
                <button class="btn" aria-label="marcus-setting">
                    <i class="fas fa-cog icon text--light"></i>
                </button>
            </div>
        </div>`;
        var buttonMusic = document.querySelector('button[aria-label="music-on"]');
        var butttonReload = document.querySelector('button[aria-label="refesh-mirror"]');
        var contentShow = document.querySelector('#PostCategory');
        buttonMusic.onclick = () =>{
            contentShow.innerHTML = `<iframe width="50%" height="300" id="soundCloud" style="margin: 0 auto; display:block" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/75666326&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"></div>`;
        }
        butttonReload.onclick = () =>{
            location.reload();
        }
        },
        'hide navbar': () => {
            var footerBtn = document.querySelector('.footer__btn');
            footerBtn.innerHTML = ``;
        },
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening.
    annyang.start();
}
// Speech function 

