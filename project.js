// document.getElementById('cameraButton').addEventListener('click', function() {
  
//     const videoElement = document.getElementById('videoElement');
    
    
//     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//         navigator.mediaDevices.getUserMedia({ video: true })
//             .then(function(stream) {
                
//                 videoElement.srcObject = stream;
//             })
//             .catch(function(err) {
//                 console.error("Error accessing the camera: " + err);
//                 alert("Error accessing the camera: " + err.message);
//             });
//     } else {
//         alert("Your browser does not support camera access.");
//     }
//   });


// document.getElementById("myButton").addEventListener("click", function() {
//     alert("You clicked the button!");
// });