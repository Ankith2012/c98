var speechRecognition = window.webkitSpeechRecognition
voiceRecognition= new speechRecognition()
 function start(){
    document.getElementById('textbox').innerHTML=""
voiceRecognition.start()
 }
 
 voiceRecognition.onresult= function(event) {

    console.log(event)
    var result= event.results[0][0].transcript
     console.log(result)

     document.getElementById('textbox').innerHTML= result
 }