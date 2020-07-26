import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
// import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';
// import vanta from './vanta.net.min.js';
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

import FOG from '../../vanta.fog.min.js';

class BackGroundVanta extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = FOG({
      el: this.vantaRef.current,
      THREE: THREE,
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header" ref={this.vantaRef}>
          <div className="App">
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </header>
      </div>
    );
  }
}

export default BackGroundVanta;

// export const BackGroundVanta = (props) => {
//   const [vantaEffect, setVantaEffect] = useState(0);
//   const myRef = useRef(null);
//   useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(
//         FOG({
//           el: myRef.current,
//         }),
//       );
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [vantaEffect]);
//   return <div ref={myRef}>Foreground content goes here</div>;
// };

// export const BackGroundVanta = (props: any) => {

//   const element = useRef()
//   useLayoutEffect(() => {
//     FOG({
//       el: element.current
//     })
//   })
//   return (
//     <React.Fragment>
//       <div ref={element}></div>
//     </React.Fragment>

//   )
// }

// export class BackGroundVanta extends React.Component {
//   constructor() {
//     super()
//     this.vantaRef = React.createRef()
//   }
//   componentDidMount() {
//     this.vantaEffect = BIRDS({
//       el: this.vantaRef.current
//     })
//   }
//   componentWillUnmount() {
//     if (this.vantaEffect) this.vantaEffect.destroy()
//   }
//   render() {
//     return <div ref={this.vantaRef}>
//       Foreground content goes here
//     </div>
//   }
// }
