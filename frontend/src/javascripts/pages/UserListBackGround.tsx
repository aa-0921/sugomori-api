import * as React from 'react';
import Particles from "react-tsparticles";

export const UserListBackGround = () => {

  return (
    <div className="h-screen">
      <Particles
        className="h-screen"
        id="userlist-tsparticles"
        options={{
          background: {
            color: {

              value: "#a3bffa",

            },
          },
          fpsLimit: 60,
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                // "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "particles": {
            "number": {
              "value": 166,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#0d21af"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 126.26362266116361,
              "color": "#0d21af",
              "opacity": 0.45770563214671817,
              "width": 0.8
            },
            "move": {
              "enable": true,
              "speed": 1.5782952832645452,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "bounce",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 6628.840189711091,
                "rotateY": 7812.5616521595
              }
            }
          },

          detectRetina: true,
        }}
      />

    </div>

  );

}
