import React from "react";
import  sun  from './assets/sun.png'
import land from './assets/land.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
function App() {
  return (
    <div>
      <Parallax pages={3} >
      <ParallaxLayer  className="moon"
       offset={0}
        speed={2}
        sticky={{ start: 0, end: .1 }}
        style={{
            backgroundImage: `url(${sun})`,
            backgroundSize: '160px',
          }} >
      </ParallaxLayer>

      <ParallaxLayer 
      offset={.4}
      speed={1}
       style={{
        backgroundImage: `url(${land})`,
        backgroundSize: 'cover',
      }} >
      </ParallaxLayer>

      <ParallaxLayer 
     offset={.6} speed={-2} factor={3.5} horizontal >
        <span style={{ fontSize: "30px", position: "flex" , marginTop: '20px'}}>Let me show you scroll animation 😀</span>
      </ParallaxLayer>

      <ParallaxLayer 
     offset={1} speed={-2} factor={3.5}>
        <span style={{ fontSize: "30px", display: 'flex' , justifyContent: 'center' ,  textAlign: 'center'}}>keep scrolling 😀</span>
      </ParallaxLayer>
      <ParallaxLayer 
     offset={1} speed={1} factor={1} >
        <span style={{ fontSize: "30px", display: 'flex' , justifyContent: 'center' ,  textAlign: 'center'}}>With hard work and effort, you can achieve anything.</span>
      </ParallaxLayer>
      <ParallaxLayer 
     offset={1.9} speed={1} factor={1} >
        <span style={{ fontSize: "30px", display: 'flex' , justifyContent: 'center' ,  textAlign: 'center'}}>Winners embrace hard work. They love the discipline of it, the trade-off they’re making to win. Losers, on the other hand, see it as punishment. And that’s the difference.</span>
      </ParallaxLayer>
      <ParallaxLayer 
     offset={2.5} speed={1} factor={1} >
        <span style={{ fontSize: "30px", display: 'flex' , justifyContent: 'center' ,  textAlign: 'center'}}>Happiness is the real sense of fulfillment that comes from hard work.</span>
      </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
