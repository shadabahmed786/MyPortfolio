
var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+923015280623'> <div class='socialItem' id='call'><img class='socialItemI' src='download-compresskaru.com (3).png'/><label class='number'>03015280623</label></div> </a> <a href='G-mail:qazishadab2233@gmail.com'> <div class='socialItem'><img class='socialItemI' src='emailicon(1).jpg' alt=''></div> </a> <a target='_blank' href='Github'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/918600765857'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/vinayak_09'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://www.instagram.com/qazi.shadab_1?igsh=MXBqbTU3b2F2YnQ0eA=='> <div class='socialItem'><img class='socialItemI' src='download-compresskaru.com (1).png' alt=''> </div> </a> <a href='https://www.linkedin.com/public-profile/settings' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='download-compresskaru.com.png' alt=''></div> </a> </div>";
var resumeString = "<img src='resumeicon.jpg' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='pdficon.jpg'><label>QaziShadabAhmed Resume (1).pdf</label></div><a href='assets/Qazi Shadab Ahmed&#39;s Resume.pdf' download='QaziShadabAhmed Resume (1).pdf'><img class='download' src='downloadicon.jpg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/place/Khanpur+Haripur,+Haripur,+Khyber+Pakhtunkhwa/@33.8033473,72.9076796,16z/data=!3m1!4b1!4m6!3m5!1s0x38dfbacf1ffcd993:0xcc80c9aa96134096!8m2!3d33.8031749!4d72.9061903!16s%2Fg%2F11h9xll8qq?entry=ttu' class='map'></iframe></div><label class='add'><address>Moh Qazian Wala, <br>Khanpur.<br>Haripur, KPK , Pakistan.</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Qazi Shadab Ahmed</a>.</span><br><br>I am a Computer Science student at <span class='bold'>PAFIAST</span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the CS sphere.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I am currently pursuing BS degree in Computer Science.<br><br>I can comfortably write code in following languages :<br><span class='bold'>Java<br>C++<br>C<br>PHP<br>CSS<br>HTML</span><br><br>I've experiance with following frameworks :<span class='bold'><br>ReactJs<br>GTK</span><br><br>I use <span class='bold'>Visual Studio </span> as daily driver on my HP TouchSmart Core I7<br>OS:-<br>DE:Gnome(More often) Kde(often)<br>Favourite IDE:VSCode</span>");
            break;

        case "education":
            sendTextMessage("I am currently pusuing BS degree in Computer Science from <br> Pak-Austria Fachhochschule: Institute of Applied Sciences and Technology (PAFIAST) <br>Enrolled Year : 2023<br><br>I have completed my Inter from<br> Lahore Grammar School known as LGS-Wahcantt <br>Passing Year:2023");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript !<br><br> Designed and Developed by <a class='alink' target='_blank' href='https://www.instagram.com/qazi.shadab_1?igsh=MXBqbTU3b2F2YnQ0eA=='><span class='bold'>Qazi Shadab Ahmed</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my linkedin.<br><br><div class='social'><a target='_blank' href='https://www.linkedin.com/public-profile/settings'> <div class='socialItem'><img class='socialItemI' src='linkedln.jpg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
