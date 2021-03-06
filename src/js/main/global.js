var protocol = window.location.protocol;
var hostname = window.location.hostname;
var urlIMages = ``;
if(protocol === "http:" && hostname === "localhost"){
    urlIMages =`${protocol}//${hostname}/smart-mirror/wp-content/themes/smart-mirror/dist/images/`;
}else if (protocol === "http:" || protocol === "https:") {
    urlIMages =`${protocol}//${hostname}/wp-content/themes/smart-mirror/dist/images/`;
}
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
                    content += `<a href="javascript:void(0)" class="post__item d--block">
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
            contentShow.innerHTML = `<div class="text--center"><img style="width: 400px" src="${urlIMages}giphy.webp" alt="hello-word" ></div>`;
            setTimeout(() => {
                contentShow.innerHTML =`<div id="event" style="max-width:500px; margin: 0 auto;">`;
            },5000)
        },
        'music on': () => {
            var contentShow = document.querySelector('#PostCategory');
            contentShow.innerHTML = `<div class="bounce-in-top"><iframe width="80%" height="300" id="soundCloud" style="margin: 0 auto; display:block" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/75666326&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"></div></div>`;
        },
        'music off': () => {
            var contentShow = document.querySelector('#PostCategory');
            contentShow.innerHTML = `<div id="event" style="max-width:500px; margin: 0 auto;">`;
        },
        'open video': () => {
            var contentShow = document.querySelector('#PostCategory');
            contentShow.innerHTML = `<div class="bounce-in-top"> <iframe style="margin-top:20px;margin:0 auto;display:block;" width="560" height="315" src="https://www.youtube.com/embed/T0sHaz4H9MQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
        },
        'off video': () => {
            var contentShow = document.querySelector('#PostCategory');
                contentShow.innerHTML =`<div id="event" style="max-width:500px; margin: 0 auto;">`;
        },
        'Ok': () => {
            var string = annyang.getSpeechRecognizer();
            console.log(string);
        },
        'menu on': () => {
            var string = annyang.getSpeechRecognizer();
            console.log(string);
            var footerBtn = document.querySelector('.footer__btn');
            footerBtn.innerHTML = ` <div class="row-divide">
            <div class="col-divide-2 text--center slide-in-top">
                <button class="btn" aria-label="music-on">
                    <i class="fas fa-music icon text--light"></i>
                </button>
            </div>
            <div class="col-divide-2 text--center slide-in-top">
                <button class="btn" aria-label="event-on">
                    <i class="fas fa-calendar icon text--light"></i>
                </button>
            </div>
            <div class="col-divide-2 text--center slide-in-top">
                <button class="btn" aria-label="refesh-mirror">
                    <i class="fas fa-sync icon text--light"></i>
                </button>
            </div>
            <div class="col-divide-2 text--center slide-in-top">
                <button class="btn" aria-label="marcus-setting">
                    <i class="fas fa-cog icon text--light"></i>
                </button>
            </div>
            <div class="col-divide-2 text--center slide-in-top">
                <button class="btn" aria-label="video-on">
                    <i class="fab fa-youtube icon text--light"></i>
                </button>
            </div>
            <div class="col-divide-2 text--center slide-in-top">
                <button class="btn" aria-label="image-on">
                    <i class="fas fa-newspaper icon text--light"></i>
                </button>
            </div>
        </div>`;
        var buttonMusic = document.querySelector('button[aria-label="music-on"]');
        var butttonReload = document.querySelector('button[aria-label="refesh-mirror"]');
        var butttonEvent = document.querySelector('button[aria-label="event-on"]');
        var butttonVideo = document.querySelector('button[aria-label="video-on"]');
        var butttonImage = document.querySelector('button[aria-label="image-on"]');
        var contentShow = document.querySelector('#PostCategory');
        buttonMusic.onclick = () =>{
            contentShow.innerHTML = `<iframe width="80%" height="300" id="soundCloud" style="margin: 0 auto; display:block" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/75666326&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"></div>`;
        }
        butttonReload.onclick = () =>{
            location.reload();
        }
        butttonEvent.onclick = () =>{               
            var eventShow = document.querySelector('#event');
            eventShow.innerHTML = `<h1 class="text--center" >Lịch trình hôm nay</h1>
            <ul>
              <li class="text--light title--item">Sáng đi học</li>
              <li class="text--light title--item">Chiều đi ngủ</li>
              <li class="text--light title--item">Tối đi Chơi</li>
            </ul>`;
        }
        butttonImage.onclick = () =>{               
            var imageShow = document.querySelector('#event');
            imageShow.innerHTML = `<div class="row"> 
            <div class="column">
              <img src="https://www.w3schools.com/w3images/wedding.jpg" style="width:100%">
              <img src="https://www.w3schools.com/w3images/rocks.jpg" style="width:100%">
              <img src="https://www.w3schools.com/w3images/falls2.jpg" style="width:100%">
              <img src="https://www.w3schools.com/w3images/paris.jpg" style="width:100%">
              <img src="https://www.w3schools.com/w3images/nature.jpg" style="width:100%">
              <img src="https://www.w3schools.com/w3images/mist.jpg" style="width:100%">
              <img src="https://www.w3schools.com/w3images/paris.jpg" style="width:100%">
            </div>
            <div class="column">
              <img src="https://www.w3schools.com/w3images/underwater.jpg" style="width:100%">
              <img src="https://www.w3schools.com/w3images/ocean.jpg" style="width:100%">
              <img src="https://www.w3schools.com/w3images/wedding.jpg" style="width:100%">
              <img src="https://www.w3schools.com/w3images/mountainskies.jpg" style="width:100%">
              <img src="https://www.w3schools.com/w3images/rocks.jpg" style="width:100%">
              <img src="https://www.w3schools.com/w3images/underwater.jpg" style="width:100%">
            </div>  
            <div class="column">
              <img src="https://www.w3schools.com/w3images/wedding.jpg" style="width:100%">
              <img src="https://www.w3schools.com/w3images/rocks.jpg" style="width:100%">
              <img src="https://www.w3schools.com/w3images/falls2.jpg" style="width:100%">
              <img src="https://www.w3schools.com/w3images/paris.jpg" style="width:100%">
              <img src="https://www.w3schools.com/w3images/nature.jpg" style="width:100%">
              <img src="https://www.w3schools.com/w3images/mist.jpg" style="width:100%">
              <img src="https://www.w3schools.com/w3images/paris.jpg" style="width:100%">
            </div>`;
        }
        },
        'close menu': () => {
            var footerBtn = document.querySelector('.footer__btn');
            footerBtn.innerHTML = ``;
        },
        'close event': () => {            
            var eventShow = document.querySelector('#event');
            eventShow.innerHTML = ``;
        },
        'picture off': () => {            
            var eventShow = document.querySelector('#event');
            eventShow.innerHTML = ``;
        },
        'turn on': () => {            
            let apiUrlMail = ``;
            if(protocol === "http:" && hostname === "localhost"){
                apiUrlMail =`${protocol}//${hostname}/smart-mirror/wp-json/mirror-api/v1/submit-voice`;
            }else if (protocol === "http:" || protocol === "https:") {
                apiUrlMail =`${protocol}//${hostname}/wp-json/mirror-api/v1/submit-voice`;
            }
            fetch(apiUrlMail,{
                method: 'POST',
                mode:    'cors',
                headers: {
                'Content-Type': 'application/json',  // sent request
                'Accept':       'application/json'   // expected data sent back
                },
                body: JSON.stringify({'command': "Turn off"})
            })
            .then(response => response.json())
            .then(data => {
                var contentShow = document.querySelector('#PostCategory');
                contentShow.innerHTML = `Turn on`;
            })            
        },
        'turn off': () => {            
            let apiUrlMail = ``;
            if(protocol === "http:" && hostname === "localhost"){
                apiUrlMail =`${protocol}//${hostname}/smart-mirror/wp-json/mirror-api/v1/submit-voice`;
            }else if (protocol === "http:" || protocol === "https:") {
                apiUrlMail =`${protocol}//${hostname}/wp-json/mirror-api/v1/submit-voice`;
            }
            fetch(apiUrlMail,{
                method: 'POST',
                mode:    'cors',
                headers: {
                'Content-Type': 'application/json',  // sent request
                'Accept':       'application/json'   // expected data sent back
                },
                body: JSON.stringify({'command': "Turn off"})
            })
            .then(response => response.json())
            .then(data => {
                var contentShow = document.querySelector('#PostCategory');
                contentShow.innerHTML = `Turn off`;
                return contentShow;
            })
            .then((contentShow)=>{
                setTimeout(()=>{contentShow.innerHTML = ``;},3000)
            })     
        },
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening.
    annyang.start();
}
// Speech function 

