import React from 'react'
import "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import imgv2 from '../images/imgv2.jpg';
import imgd from '../images/imgd.jpg';
import imgv3 from '../images/imgv3.jpg';
import imgf2 from '../images/imgf2.jpg';
import imgf3 from '../images/imgf3.jpg';
import img2 from '../images/img2.jpg';
import $ from 'jquery';
export default function Lightbox1() {
  $(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });
  return (
    <div class="container">
  <div class="row">
    <a href="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
      <img src="https://unsplash.it/600.jpg?image=251" class="img-fluid rounded"/>
    </a>
    <a href="https://unsplash.it/1200/768.jpg?image=252" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
      <img src="https://unsplash.it/600.jpg?image=252" class="img-fluid rounded"/>
    </a>
    <a href="https://unsplash.it/1200/768.jpg?image=253" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
      <img src="https://unsplash.it/600.jpg?image=253" class="img-fluid rounded"/>
    </a>
  </div>
  <div class="row">
    <a href="https://unsplash.it/1200/768.jpg?image=254" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
      <img src="https://unsplash.it/600.jpg?image=254" class="img-fluid rounded"/>
    </a>
    <a href="https://unsplash.it/1200/768.jpg?image=255" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
      <img src="https://unsplash.it/600.jpg?image=255" class="img-fluid rounded"/>
    </a>
    <a href="https://unsplash.it/1200/768.jpg?image=256" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
      <img src="https://unsplash.it/600.jpg?image=256" class="img-fluid rounded"/>
    </a>
  </div>
</div>
  )
}
