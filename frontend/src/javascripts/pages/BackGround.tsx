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
              // value: "#6C8AC1",
              value: "#E2F1FF",
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
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              // enable: true,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              // direction: "none",
              direction: "top",

              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            // shape: {
            //   type: 'images',
            //   image: [
            //     { src: 'https://icooon-mono.com/i/icon_15173/icon_151731_64.png', height: 500, width: 500 },
            //     { src: 'https://icooon-mono.com/i/icon_14421/icon_144211_64.png', height: 500, width: 500 },
            //     { src: 'https://icooon-mono.com/i/icon_12767/icon_127671_64.png', height: 500, width: 500 },
            //     { src: 'https://icooon-mono.com/i/icon_13120/icon_131201_64.png', height: 500, width: 500 },
            //     { src: 'https://icooon-mono.com/i/icon_13330/icon_133301_64.png', height: 500, width: 500 },
            //   ]
            // },
            // size: {
            //   random: true,
            //   value: 5,
            // },
            "size": {
              "value": 30,
              "random": false,
              "anim": {
                "enable": true,
                "speed": 4,
                "size_min": 20,
                "sync": false
              }
            }
          },
          detectRetina: true,
        }}
      />

    </div>

  );

}
// import * as React from 'react';

// import Particles from 'react-particles-js';

// class App extends Component {

//   render() {
//     return (
//       <Particles />
//     );
//   };

// }
