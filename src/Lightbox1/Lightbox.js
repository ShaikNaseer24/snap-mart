import React from 'react'
import "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import imgv2 from '../images/imgv2.jpg';
import imgd from '../images/imgd.jpg';
import imgv3 from '../images/imgv3.jpg';
import imgf2 from '../images/imgf2.jpg';
import imgf3 from '../images/imgf3.jpg';
import img2 from '../images/img2.jpg';
export default function Lightbox1() {
  const main = document.getElementById("lighthouse-bg");
const images = document.querySelector(".images")
const tiles = document.querySelectorAll(".images img");
tiles.forEach(function (a, i) {
    tiles[i].onclick = function () {
        if (!main.classList.contains("lighthouse")) {
            main.style.visibility = "visible"
            main.appendChild(this)
            main.classList.add("lighthouse")
        }
        else {
        
            main.classList.remove("lighthouse")
         
            images.insertBefore(this, images.children[i])
        }
    }
}
)
  return (
    <div class="container">
    </div>
  )
}
