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
            <br></br>
            I'm building open source AI agents and blockchain tools:
            <br></br>
            <br></br>-{" "}
            <a
              href="https://github.com/turinglabsorg/grog"
              rel="noopener noreferrer"
              target="_blank"
            >
              Grog
            </a>{" "}
            — an autonomous GitHub issue solver. Point it at an issue, and it
            uses Claude to analyze code, implement fixes, and open pull requests
            without human intervention.
            <br></br>-{" "}
            <a
              href="https://github.com/turinglabsorg/openbowie"
              rel="noopener noreferrer"
              target="_blank"
            >
              OpenBowie
            </a>{" "}
            — an autonomous agent that runs in Docker containers, connecting LLM
            providers with MCP servers. Give it a task, and it builds a roadmap
            and executes autonomously. Built in Go and Python.
            <br></br>-{" "}
            <a
              href="https://github.com/turinglabsorg/wachi"
              rel="noopener noreferrer"
              target="_blank"
            >
              Wachi
            </a>{" "}
            — a blockchain transaction OSINT tool built in Rust. It traces fund
            flows, identifies contracts, profiles addresses, and follows the
            money across chains. Runs as an MCP server, powered by alloy-rs.
            <br></br>-{" "}
            <a
              href="https://github.com/turinglabsorg/mollie"
              rel="noopener noreferrer"
              target="_blank"
            >
              Mollie
            </a>{" "}
            — a high-performance Rust CLI that derives Ethereum addresses from
            BIP39 mnemonics and checks balances across Ethereum, Base, and
            Arbitrum simultaneously using parallel processing.
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
            <a href="mailto:seb@turinglabs.org">seb@turinglabs.org</a> or a message on <a href="https://t.me/turinglabs" rel="noopener noreferrer" target="_blank">Telegram</a>.
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
