import "terminal.css";
import "./App.css";
function App() {
  return (
    <div
      className="App"
      id="up"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "contain",
      }}
    >
      <div className="container">
        <section id="about">
          <br></br>
          <img src="/bg.png" style={{ width: "100%" }} alt="me" />
          <br></br>

          <h1>
            Call me <span className="primary-color">turinglabs</span>
            <br />
            and yes, I'm a nerd.
          </h1>
          <p>
            Since I started my professional career in late 2012,{" "}
            <a
              href="https://en.wikipedia.org/wiki/Alan_Turing"
              rel="noopener noreferrer"
              target="_blank"
            >
              Alan Turing
            </a>{" "}
            wasn't so famous yet and no one really found his name cool enough
            like me, so at some point around 2014 I've decided to create my new
            personal brand: turinglabs. I've been building innovative products
            across the globe. I've built websites, apps, blockchains, and even a
            few games.<br></br><br></br>I'm a full-stack developer proficient in most common
            programming languages, and I've been passionate about blockchain
            technology since discovering Bitcoin. When it comes to smart
            contracts, I'm all about Solidity - it's my go-to for building
            secure and efficient blockchain solutions. For high-performance
            systems, I turn to Rust, appreciating its safety guarantees and
            zero-cost abstractions. And for web development, TypeScript is my
            trusted companion, bringing type safety and modern JavaScript
            features to every project.
            <br></br>
            <br></br>I've worked (and still work with some of them) with
            interesting people and projects around the world, including:
            <br></br>
            <br></br>-{" "}
            <a
              href="https://protocol.ai"
              rel="noopener noreferrer"
              target="_blank"
            >
              Protocol Labs
            </a>
            <br></br>-{" "}
            <a
              href="https://polygon.technology"
              rel="noopener noreferrer"
              target="_blank"
            >
              Polygon DAO
            </a>
            <br></br>-{" "}
            <a
              href="https://quadrans.io"
              rel="noopener noreferrer"
              target="_blank"
            >
              Quadrans
            </a>
            <br></br>-{" "}
            <a
              href="https://fakewhale.xyz"
              rel="noopener noreferrer"
              target="_blank"
            >
              Fakewhale
            </a>
            <br></br>-{" "}
            <a
              href="https://factor.fi"
              rel="noopener noreferrer"
              target="_blank"
            >
              Factor
            </a>
            <br></br>-{" "}
            <a
              href="https://17tons.earth"
              rel="noopener noreferrer"
              target="_blank"
            >
              17tons
            </a>
            <br></br>-{" "}
            <a
              href="https://rifaisicilia.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Rifai Sicilia
            </a>
            <br></br>-{" "}
            <a
              href="https://v3.veracura.network"
              rel="noopener noreferrer"
              target="_blank"
            >
              Vera3
            </a>
            <br></br>
            <br></br>I've also co-founded several projects, including:
            <br></br>
            <br></br>-{" "}
            <a
              href="https://blockpos.xyz"
              rel="noopener noreferrer"
              target="_blank"
            >
              Block!POS
            </a>
            <br></br>-{" "}
            <a
              href="https://yomi.digital"
              rel="noopener noreferrer"
              target="_blank"
            >
              YOMI
            </a>
            <br></br>-{" "}
            <a
              href="https://niftyz.io"
              rel="noopener noreferrer"
              target="_blank"
            >
              Niftyz
            </a>
            <br></br>-{" "}
            <a
              href="https://mego.tickets"
              rel="noopener noreferrer"
              target="_blank"
            >
              MEGO Tickets
            </a>
            <br></br>
            <br></br>
            <br></br>
            Since we entered this AI era, I've been studying AI ethics by
            reading tons of books, and understood that my position in this area
            is more of a teacher for the new generations to come. I'm doing this
            actively with{" "}
            <a
              href="https://nocodelab.ai/"
              rel="noopener noreferrer"
              target="_blank"
            >
              NoCodeLab
            </a>{" "}
            - if you're interested in learning more about it, check it out.
          </p>
        </section>
        <hr></hr>
        <section id="contacts" style={{ textAlign: "left" }}>
          <img
            src="/me.png"
            style={{ width: "128px", marginLeft: "-28px" }}
            alt="ai"
          />
          <h1 style={{ textAlign: "left" }}>
            Explore my work on{" "}
            <a href="https://github.com/turinglabsorg">GitHub</a> for more
            details.
          </h1>
          <p
            style={{ textAlign: "left" }}
          >
            Drop a line at{" "}
            <a href="mailto:seb@turinglabs.org">seb@turinglabs.org</a>
          </p>
          <hr></hr>
          <p className="small">
            Follow me on <a href="https://twitter.com/turinglabsorg">X</a>.
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
