import * as tf from "@tensorflow/tfjs";
import * as nsfwjs from "nsfwjs";
// import "./styles.css";
const img = document.getElementById("questionable");
nsfwjs.load().then(net => {
  console.log("model is loaded");
  net.classify(img).then(result => {
    console.log(result);
  });
});

document.getElementById("app").innerHTML = `
<h1>Tensorflow.js v${tf.version.tfjs}</h1>

`;
