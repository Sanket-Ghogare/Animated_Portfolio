import "./heros.scss"

// textvarients = {
//   initial:{
//     x:-500,
//     opacity:0,

//   },
//   animate:{
//     x: 0,
//     opacity:1,
//     transition:{
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },

// };
const Heros = () => {
  return (
   <>
    <div className="heros">
      <div className="wrapper">
     
      </div>
      <div className="slidingtext">
        Coder an
        </div>
        <div className="imageContainers">
            <img src="/hero.png"/>
        </div>
    </div>
    <div className="textContainer">
    <h6>Ghogare Sanket</h6>
        <h1>Web Developer<br/> and UI Designer</h1>
       
        <div className="buttons">
          <button className="btn">See the latest Work</button>
          <button className="btn">Contact Me</button>
        </div>
       
      </div>
    </>
  )
}

export default Heros
