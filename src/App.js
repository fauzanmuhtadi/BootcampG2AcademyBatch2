import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <div>
      <div className="Wdt100prn Mrgn-top100px">
        <img className="Brd-rds50prn Ctr-img" src="foto.jpeg"></img>
      </div>
      <div className="Mrgn-btm50px">
        <h1 className="Txt-alg-ctr">FAUZAN MUHTADI</h1>
        {/* <h3 className="Txt-alg-ctr">Jakarta, 17 November 1995</h3> */}
      </div>
      <div className="Flt-lft Wdt35prn">
        <div className="Mrgn-btm50px">
          <h2 className="Txt-alg-ctr">Contact</h2>
          <ol>
            <li>fauzan.muhtadi@gmail.com</li><br></br>
            <li>+62 857-2416-4498</li><br></br>
            <li>Komp.DKI, Cipedak, Jagakarsa, South Jakarta</li>
          </ol>
        </div>
        <div className="Mrgn-btm50px">
          <h2 className="Txt-alg-ctr">Profile</h2>
          <ol>
            <li>Jakarta, Nov 17th 1995</li><br></br>
            <li>Islam</li><br></br>
            <li>Male</li><br></br>
            <li>Indonesia</li><br></br>
          </ol>
        </div>
        <div className="Mrgn-btm50px Mrgn-rgt50px">
          <h2 className="Txt-alg-ctr">Skills</h2>
          <ol>
            <li>Microsoft Office</li>
              <div class="container">
                <div class="skills mso">90%</div>
              </div><br></br>
            <li>Surfer</li>
              <div class="container">
                <div class="skills srf">90%</div>
              </div><br></br>
            <li>Res2DInv</li>
              <div class="container">
                <div class="skills rdi">90%</div>
              </div><br></br>
            <li>Multisim</li>
              <div class="container">
                <div class="skills mlt">90%</div>
              </div><br></br>
            <li>Corel Draw</li>
              <div class="container">
                <div class="skills crd">90%</div>
              </div><br></br>
          </ol>
        </div>
        <div className="Mrgn-btm50px Mrgn-rgt50px">
          <h2 className="Txt-alg-ctr">Language</h2>
          <ol>
            <li>Bahasa Indonesia</li>
              <div class="container">
                <div class="skills ind">100%</div>
              </div><br></br>
            <li>English</li>
              <div class="container">
                <div class="skills eng">80%</div>
              </div><br></br>
            <li>Arabic</li>
              <div class="container">
                <div class="skills arb">80%</div>
              </div><br></br>
          </ol>
        </div>
      </div>
      <div className="Flt-lft Wdt645prn Bdr-lft">
        <div className="Mrgn-btm50px Mrgn-rgt50px">
          <h2 className="Txt-alg-ctr">EDUCATION</h2>
          <ol>
            <li className="Ls-stl-sqr">2013-2018 <b>UNIVERSITAS ABC</b></li>
            <p className="Txt-alg-jtf"><b>UNIVERSITAS</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><br></br>
            <li className="Ls-stl-sqr">2010-2013 <b>SMA ABC</b></li>
            <p className="Txt-alg-jtf"><b>SEKOLAH MENENGAH ATAS</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><br></br>
            <li className="Ls-stl-sqr">2007-2010 <b>SMP ABC</b></li>
            <p className="Txt-alg-jtf"><b>SEKOLAH MENENGAH PERTAMA</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><br></br>
            <li className="Ls-stl-sqr">2001-2007 <b>SD ABC</b></li>
            <p className="Txt-alg-jtf"><b>SEKOLAH DASAR</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><br></br>
          </ol>
        </div>
        <div className="Mrgn-btm50px Mrgn-rgt50px">
          <h2 className="Txt-alg-ctr">ORGANIZATION & EVENT</h2>
          <ol>
            <li className="Ls-stl-sqr">2017 <b>ORGANIZATION 1</b></li>
            <p className="Txt-alg-jtf Pdg40px">The Chairman of Organization 1</p><br></br>
            <li className="Ls-stl-sqr">2016 <b>ORGANIZATION 2</b></li>
            <p className="Txt-alg-jtf Pdg40px">The Chairman of Organization 2</p><br></br>
            <li className="Ls-stl-sqr">2015 <b>EVENT 1</b></li>
            <p className="Txt-alg-jtf Pdg40px">The Chairman of Event 1</p><br></br>
            <li className="Ls-stl-sqr">2014 <b>EVENT 2</b></li>
            <p className="Txt-alg-jtf Pdg40px">The Chairman of Event 2</p><br></br>
          </ol>
        </div>
        <div className="Mrgn-btm50px Mrgn-rgt50px">
          <h2 className="Txt-alg-ctr">WORK EXPERIENCE</h2>
          <ol>
            <li className="Ls-stl-sqr">February-April 2020 <b>PT. Unggul Berkah Sejahtera</b></li>
            <p className="Txt-alg-jtf Pdg40px">Technical Application & Sales Engineer</p><br></br>
            <li className="Ls-stl-sqr">March 2019-January 2020 <b>PT. Poin Industria</b></li>
            <p className="Txt-alg-jtf Pdg40px">Automation Engineer</p><br></br>
            <li className="Ls-stl-sqr">October-February 2019 <b>PT. Rumah Sains Indonesia</b></li>
            <p className="Txt-alg-jtf Pdg40px">Head of Marketing</p><br></br>
            <li className="Ls-stl-sqr">March-September 2018 | <b>LPDP Kemenkeu RI</b></li>
            <p className="Txt-alg-jtf Pdg40px">Business Development</p><br></br>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default App;
