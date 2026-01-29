let btn = document.querySelector('#btn')
let content = document.querySelector('#content')
let voice = document.querySelector('#voice')

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang="en-IN"
    //text_speak.lang="hi-IN"
   // text_speak.lang="en-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day = new Date()
    let hours = day.getHours()
   // console.log(hours)
   if(hours >= 0 && hours < 12){
    speak("Good Morning Sruti")
   }
   else if(hours >= 12 && hours < 16){
    speak("Good Afternoon Sruti")
   }
   else{
    speak("Good Evening Sruti")
   }
}

window.addEventListener('load',()=>{
    wishMe()
})

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event)=>{
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
  // console.log(event) 
  takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})

 function takeCommand(message){
    btn.style.display = "flex"
    voice.style.display = "none"
    message = message.toLowerCase().trim();
    // console.log("Received message:", message);
    if(message.includes("hello") || message.includes("hey")){
        speak("hello sruti,what can i help you?");
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant ,created by sruti")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://www.facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://www.instagram.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator...")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp...")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
       let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
       speak(time)
    }
    else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
     }
     else if(message.includes("what is my name")){
        speak("You are SRUTI");
    }
     else if(message.includes("what is your name")){
        speak("I am Shifra");
    }
    
    
    else{
        speak(`this is what i found on internet regarding ${message.replace("shifra","")||message.replace("shipra","")}`)
        window.open(`https://www.google.com/search?q=${message.replace("shifra","")||message.replace("shipra","")}`)
    }
 }




