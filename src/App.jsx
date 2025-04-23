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
            Since I started my professional career in late 2012, I've been building innovative products across the globe. I've built websites, apps, blockchains, and even a few games. I'm a full-stack developer proficient in most common programming languages, and I've been passionate about blockchain technology since discovering Bitcoin. When it comes to smart contracts, I'm all about Solidity - it's my go-to for building secure and efficient blockchain solutions. For high-performance systems, I turn to Rust, appreciating its safety guarantees and zero-cost abstractions. And for web development, TypeScript is my trusted companion, bringing type safety and modern JavaScript features to every project.
          </p>
        </section>
        <hr></hr>
        <section id="contacts">
          <h1 style={{ textAlign: "left" }}>Explore my work on <a href="https://github.com/turinglabsorg">GitHub</a> for more details.</h1>
          <p style={{ textAlign: "left", fontSize: "25px", lineHeight: "30px" }}>
            Drop a line at <a href="mailto:seb@turinglabs.org">seb@turinglabs.org</a>
          </p>
          <hr></hr>
          <p className="small">
            follow me on <a href="https://twitter.com/turinglabsorg">X</a>.
          </p>
          <br></br>
        </section>
      </div>
    </div>
  );
}

export default App;
