import 'terminal.css'
import './App.css'
function App() {
  return (
    <div className="App" id="up">
      <div className="container">
        <div class="terminal-nav">
          <div class="terminal-logo">
            <div class="logo terminal-prompt"><a href="#up" class="no-style">turing, innovation labs</a></div>
          </div>
          <nav class="terminal-menu">
            <ul>
              <li><a class="menu-item" href="#projects">Projects</a></li>
              <li><a class="menu-item" href="#technology">Technology</a></li>
              <li><a class="menu-item" href="#contacts">Contacts</a></li>
            </ul>
          </nav>
        </div>
        <section id="about">
          <h1>We are <span class="primary-color">turinglabs</span><br />we build innovation<br />with passion.</h1>
          <p>
            Since our birth, in late 2015, we build tecnological innovation across the globe.<br />
            We've worked with a lot of people and startups in different areas (SaaS, e-commerce, CRM, etc)<br />but now we're mainly focused on building <i>blockchain-based</i> projects.<br></br>
            We love open-source projects and we try to support everyone needs a concrete help.<br></br>
            Bitcoin is our currency and you should use it too.
          </p>
        </section>

        <section id="projects">
          <h1>Projects we're involved on at the moment.</h1>
          <div class="terminal-timeline">
            <div class="terminal-card">
              <header>Scrypta Blockchain</header>
              <div>
                We're actively working with <a href="https://scrypta.foundation" rel="noreferrer" target="_blank">Scrypta Foundation</a> building all its open-source projects.<br></br>
                Scrypta goal is to create a powerful decentralized network to run immutable and censorhip-resistant applications.
              </div>
            </div>
            <div class="terminal-card">
              <header>Tatum</header>
              <div>
                <a href="https://tatum.io/" rel="noreferrer" target="_blank">Tatum</a> is an open-source API to build blockchain based application as faster as possible. We support them as <i>ambassadors</i> trying to share their platform and adding new supported blockchains.
              </div>
            </div>
            <div class="terminal-card">
              <header>DigitalOracles</header>
              <div>
                We're working hard with <a href="https://beta.digitaloracles.com" rel="noreferrer" target="_blank">DigitalOracles</a> creating a platform where startups and investors can meet. All the platform is blockchain-based with an enhanced token-based ranking system and with an encrypted communication system between each party.
              </div>
            </div>
            <div class="terminal-card">
              <header>TheHUB</header>
              <div>
                <a href="https://thehub.host" rel="noreferrer" target="_blank">TheHUB</a> is a new generation hosting provider focused on blockchain products. It allows the creation and maintenance of multiple full-nodes instances allowing developers create their own infrastructure in minutes and using multiple providers to maintain decentralization. It can be used even to create staking nodes and masternodes without having technical knowledge.
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
                <td style={{width:"150px", textAlign: "center"}}>4 / 10</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="contacts">
          <h1>Contact us.</h1>
          <p style={{textAlign:"left"}}>
            Drop us a line at <a href="mailto:finance@turinglabs.org">finance.turinglabs.org</a>
          </p>
          <hr></hr>
          <p class="small">
            <b>turinglabs</b> is a trade mark of FUTURING SRL<br></br>
            Via Ercolano 62, Ragusa - Italy(IT)<br></br>
            IT01652950880 - #136424 C.C.I.A.A Ragusa
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
