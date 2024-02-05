import "./heros.scss"

const Heros = () => {
  return (
    <div className="heros">
      <div className="wrapper">
      <div className="textContainer">
        <h2>Ghogare Sanket</h2>
        <h1>Web Developer and UI Designer</h1>
        <div className="buttons">
          <button>See the Work</button>
          <button>Contact Me</button>
        </div>
        <img src="/scroll.png"/>
      </div>
      </div>
        <div className="imageContainers">
            <img src="/hero.png"/>
        </div>
    </div>
  )
}

export default Heros
