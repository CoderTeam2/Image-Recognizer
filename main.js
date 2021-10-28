Webcam.set({
    width : 350,
    height : 300,
    image_format : "png",
    png_quality : 90
});
Webcam.attach("#webcam");
camera = document.getElementById("webcam");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("preview").innerHTML = "<img id='img' src="+data_uri+">";
    })
}

console.log("ML5 version : ", ml5.version);
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/xaXX3Wl0p/model.json", ready);
function ready(){
    console.log("Yay! Model ready!");
}

function check(){
    img = document.getElementById('img');
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("output").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
