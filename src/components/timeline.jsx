import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Northrop Grumman Space Systems<span> 2023-present</span></h2>
                        <p>Strategic Deterrent Systems Division Sr. Software Department Manager, leading a team of managers and software engineers across multiple programs within the division.</p>
                      </div>
                    </div>
                  </article>
                 <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Northrop Grumman Space Systems<span> 2020-2023</span></h2>
                        <p>OUTMATCH IRAD: Product Owner / Tech lead / Functional Manager on a team working on a digital modeling and simulation sandbox.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Northrop Grumman Space Systems<span> 2018-2020</span></h2>
                        <p>Nighthawk IRAD: Scrum Master / Tech lead / Functional Manager on a team working on advanced next gen radar software.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Northrop Grumman Mission Systems<span> 2017-2018</span></h2>
                        <p>REMIS: Team lead on an application improvement for the Air Force reporting software suite. <br></br>SMORS: Performed system level tests and checkouts to ensure test system was functioning as expected. Trained test team n the use of the system. <br></br>NGSA IRAD: Team lead on the design of a non-kinetic attack simulation tool. Scrum Master in a fully Agile environment working across engineering disciplines to ensure that all requirements were met and that all stakeholders were understood.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Northrop Grumman Aerospace Systems<span> 2010-2017</span></h2>
                        <p>Worked as a project manager in the Environmental test lab. Ran tests on aircraft components, managed lab scheduling and worked with manufacturing to keep testing aligned with product release.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduate at Arizona State University<span> 2011-2014</span></h2>
                        <p>I Earned my degree in Software Engineering with an emphasis on Mobile and Web Design with a Minor in Graphical User Interface design.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
