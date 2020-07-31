import * as React from 'react';
// import Particles from 'react-particles-js';
import { useState, useEffect } from 'react';
import Particles from "react-tsparticles";


export const UserListBackGround = (props: any) => {
  // console.log('UserListBackGroundのprops.listHeight', props.listHeight)
  console.log('UserListBackGroundのprops.userListHeight', props.userListHeight)

  useEffect(() => {
    // props.setNowLoading(true);
    if (props.userListHeight != 0) {
      console.log('useEffect内props.userListHeight', props.userListHeight)
      var particleHeight = document.getElementById('userlist-tsparticles')

      particleHeight.style.setProperty('--about-tsparticles-height', props.userListHeight + 'px', "important");
      props.setNowLoading(false);
    }
  }, [props.userListHeight])
  props.setNowLoading(false);

  return (

    <div className="userlist-background">
      <Particles
        // style={memberListStyle}
        className=""
        id="userlist-tsparticles"
        // style={heightStyle}
        // style={{ height: '8000px !impotant' }}
        // style={{ height: props.userListHeight }}

        // style={{ height: "1000px !impotant" }}
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
              "value": 700,
              "density": {
                "enable": true,
                "value_area": 868.0624057955
              }
            },
            "color": {
              "value": "#0d21af"
              // "value": "#004BB5"

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
              "value": 4,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 2,
                "size_min": 10,
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
              "speed": 2,
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
