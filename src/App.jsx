import 'terminal.css'
import './App.css'
function App() {
  return (
    <div className="App" id="up">
      <div className="container">
        <div className="terminal-nav">
          <div className="terminal-logo">
            <div className="logo terminal-prompt"><a href="#up" className="no-style">turing, innovation labs</a></div>
          </div>
          <nav className="terminal-menu">
            <ul>
              <li><a className="menu-item" href="#projects">Projects</a></li>
              <li><a className="menu-item" href="#technology">Technology</a></li>
              <li><a className="menu-item" href="#contacts">Contacts</a></li>
            </ul>
          </nav>
        </div>
        <section id="about">
          <h1>We are <span className="primary-color">turinglabs</span><br />we build innovation<br />with passion.</h1>
          <p>
            Since our birth, in late 2015, we build tecnological innovation across the globe.<br />
            We've worked with a lot of people and startups in different areas (SaaS, e-commerce, CRM, etc)<br />but now we're mainly focused on building <i>blockchain-based</i> projects.
          </p>
        </section>

        <section id="projects">
          <h1 style={{textAlign: "left"}}>
            These are some of the projects we're involved right now.<br></br>
            If you want to have an idea on what we do daily just jump to our <a href="https://github.com/turinglabsorg" rel="noreferrer" target="_blank">GitHub</a>.
          </h1>
          <div className="terminal-timeline">
            <div className="terminal-card">
              <header>NFT Studio</header>
              <div>
                <a href="https://nftstud.io" rel="noreferrer" target="_blank">NFT Studio</a> is an open-collective of artists and technologists that creates a new kind of art. NFT Studio creates an ensemble of experiences, emotions and sensations for artists of international level, making them free to express their art outside the rigid schemes of gallery owners and producers. <br></br>
              </div>
            </div>
            <div className="terminal-card">
              <header>Scrypta Blockchain</header>
              <div>
                We're actively working with <a href="https://scrypta.foundation" rel="noreferrer" target="_blank">Scrypta Foundation</a> building all its open-source projects.<br></br>
                Scrypta goal is to create a powerful decentralized network to run immutable and censorhip-resistant applications.
              </div>
            </div>
            <div className="terminal-card">
              <header>DigitalOracles</header>
              <div>
                We're working hard with <a href="https://beta.digitaloracles.com" rel="noreferrer" target="_blank">DigitalOracles</a> creating a platform where startups and investors can meet. All the platform is blockchain-based with an enhanced token-based ranking system and with an encrypted communication system between each party.
              </div>
            </div>
            <div className="terminal-card">
              <header>TheHUB</header>
              <div>
                <a href="https://thehub.host" rel="noreferrer" target="_blank">TheHUB</a> is a new generation hosting provider focused on blockchain products. It allows the creation and maintenance of multiple full-nodes instances allowing developers create their own infrastructure in minutes and using multiple providers to maintain decentralization. It can be used even to create staking nodes and masternodes without having technical knowledge.
              </div>
            </div>
            <div className="terminal-card">
              <header>Tatum</header>
              <div>
                <a href="https://tatum.io/" rel="noreferrer" target="_blank">Tatum</a> is an open-source API to build blockchain based application as faster as possible. We support them as <i>ambassadors</i> trying to share their platform and adding new supported blockchains.
              </div>
            </div>
          </div>
        </section>

        <section id="technology">
          <h1>Techonlogy we use</h1>
          <table>
            <thead>
              <tr>
                <th>Technology</th>
                <th style={{width:"150px", textAlign: "center"}}>Knowledge</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>NodeJS</td>
                <td style={{width:"150px", textAlign: "center"}}>10 / 10</td>
              </tr>
              <tr>
                <td>Databases (MySQL / MongoDB)</td>
                <td style={{width:"150px", textAlign: "center"}}>10 / 10</td>
              </tr>
              <tr>
                <td>Bitcoin-based cryptocurrencies</td>
                <td style={{width:"150px", textAlign: "center"}}>9 / 10</td>
              </tr>
              <tr>
                <td>Frontend frameworks (VueJS / React)</td>
                <td style={{width:"150px", textAlign: "center"}}>9 / 10</td>
              </tr>
              <tr>
                <td>Docker</td>
                <td style={{width:"150px", textAlign: "center"}}>8 / 10</td>
              </tr>
              <tr>
                <td>Ethereum / Solidity</td>
                <td style={{width:"150px", textAlign: "center"}}>7 / 10</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="contacts">
          <h1>Contact us.</h1>
          <p style={{textAlign:"left", fontSize:"25px", lineHeight:"30px"}}>
            Drop us a line at<br></br><a href="mailto:finance@turinglabs.org">finance@turinglabs.org</a>
          </p>
          <hr></hr>
          <p className="small">
            <b>turinglabs</b> is trademark of FUTURING SRL<br></br>
            Via Ercolano 62, Ragusa - Italy(IT)<br></br>
            IT01652950880 - #136424 C.C.I.A.A Ragusa
          </p>
          <br></br>
        </section>
      </div>
    </div>
  );
}

export default App;
