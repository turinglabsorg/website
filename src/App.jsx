import 'terminal.css'
import './App.css'
function App() {
  return (
    <div className="App" id="up">
      <div className="container">
        <section id="about">
          <br></br>
          <img src="/me.png" style={{ width: "240px", borderRadius: "240px" }} alt="me" /><br></br>
          <h1>Call me <span className="primary-color">turinglabs</span><br />and yes, I'm a nerd.</h1>
          <p>
            Since my professional birth, in late 2012, I build innovative products across the globe. I've built websites, apps, blockchains, and even a few games. I'm a full-stack developer, my stack contains most common languages and I simply love the blockchain since I heard about Bitcoin.
          </p>
        </section>
        <hr></hr>
        <section id="contacts">
          <h1 style={{ textAlign: "left" }}>Look at my <a href="https://github.com/turinglabsorg">github</a> or <a href="https://www.linkedin.com/in/sebastiano-cataudo-1b404165/">linkedin</a> if you want to go deep.</h1>
          <p style={{ textAlign: "left", fontSize: "25px", lineHeight: "30px" }}>
            Drop a line at <a href="mailto:seb@turinglabs.org">seb@turinglabs.org</a>
          </p>
          <hr></hr>
          <p className="small">
            follow me on <a href="https://twitter.com/turinglabsorg">twitter</a>.
          </p>
          <br></br>
        </section>
      </div>
    </div>
  );
}

export default App;
