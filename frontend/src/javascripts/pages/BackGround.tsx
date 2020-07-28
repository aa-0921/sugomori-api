import * as React from 'react';
// import Particles from 'react-particles-js';
import Particles from "react-tsparticles";


export const BackGround = () => {

  return (

    <div className="h-screen">
      <Particles
        className="h-screen"
        id="tsparticles"
        options={{
          background: {
            color: {

              value: "#a3bffa",

            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          "particles": {
            "number": {
              "value": 19,
              "density": {
                "enable": true,
                "value_area": 868.0624057955
              }
            },
            "color": {
              // "value": "#0d21af"
              "value": "#004BB5"

            },
            "shape": {
              "type": ["triangle", "polygon"],
              // "type": "polygon",

              "stroke": {
                "width": 0,
                "color": "#000"
              },
              "polygon": {
                "nb_sides": 4
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 59.186073122420446,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 10,
                "size_min": 40,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 200,
              "color": "#ffffff",
              "opacity": 1,
              "width": 2
            },
            "move": {
              "enable": true,
              "speed": 8,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },

          detectRetina: true,
        }}
      />

    </div>

  );

}
