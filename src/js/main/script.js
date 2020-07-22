
const video = document.getElementById('video')
let protocol = window.location.protocol;
let hostname = window.location.hostname;
if(protocol === "http:" && hostname === "localhost"){
  Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/smart-mirror/wp-content/themes/smart-mirror/src/js/main/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/smart-mirror/wp-content/themes/smart-mirror/src/js/main/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/smart-mirror/wp-content/themes/smart-mirror/src/js/main/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/smart-mirror/wp-content/themes/smart-mirror/src/js/main/models'),
    faceapi.nets.ageGenderNet.loadFromUri('/smart-mirror/wp-content/themes/smart-mirror/src/js/main/models'),
    console.log(faceapi.nets)
  ]).then(startVideo)
}else if (protocol === "http:" || protocol === "https:") {
  Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/wp-content/themes/smart-mirror/src/js/main/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/wp-content/themes/smart-mirror/src/js/main/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/wp-content/themes/smart-mirror/src/js/main/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/wp-content/themes/smart-mirror/src/js/main/models'),
    faceapi.nets.ageGenderNet.loadFromUri('/wp-content/themes/smart-mirror/src/js/main/models'),
    console.log(faceapi.nets)
  ]).then(startVideo)
}

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}

video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  document.body.append(canvas)
  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)
  setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions().withAgeAndGender()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    faceapi.draw.drawDetections(canvas, resizedDetections)
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
    console.log(resizedDetections)

    const age = resizedDetections[0].age
    console.log(age)
    // const interpolatedAge = interpolateAgePredictions(age)
    const bottomRight = {
      x: resizedDetections[0].detection.box.bottomRight.x - 50,
      y: resizedDetections[0].detection.box.bottomRight.y
    };

    new faceapi.draw.DrawTextField(
      [`${faceapi.utils.round(age, 0)} years`],
      bottomRight
    ).draw(canvas);
  }, 100)
  
});
// function interpolateAgePredictions(age) {
//   predictedAges = [age].concat(predictedAges).slice(0, 30);
//   const avgPredictedAge =
//   age.reduce((total, a) => total + a) / predictedAges.length;
//   return avgPredictedAge;
// }
