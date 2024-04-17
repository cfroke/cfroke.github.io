import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a Sr. Software Engineering Manager from Falcon, Colorado.I love exploring new technologies and am often amazed by the progress we as a human species have made so far. I am a self starter that works well in both independent and team environments. Fast paced and dynamic environments are where I thrive. I greatly enjoy helping others build out their career plans as well as help to develop engineering teams.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some things I have experience with</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-user" />
                </span>
                <div className="desc">
                    <h3>People Management </h3>
                    <p>In my current position I manage a software department that includes 23 managers and 350 engineers across multiple programs.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-html-five2" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building websites using JavaScript,React,HTML,CSS.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-world" />
                </span>
                <div className="desc">
                    <h3>Radar Systems</h3>
                    <p>In my current position I am working on the next generation radar.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-git" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>I use tools like Jenkins, Fisheye, Crucible, Bitbucket, Git. I have had some experience using Fortify.</p>
                </div>
                </div>
            </div>
            
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Agile</h3>
                    <p>I have held positions as Product Owner, Scrum Master, as well as being a stakeholder within the Agile and Scrum methodologies.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-scissors" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My minor in college was Graphic Information Technology and I hold a certification in Computer Graphic Design. I have designed multiple front end solutions for software projects in my current company and like to play around with web design as a hobby.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-9">
                <span className="icon">
                    <i className="icon-user" />
                </span>
                <div className="desc">
                    <h3>Project Management</h3>
                    <p>I have led many Software teams through all stages of the project life-cycle as well as being the Project Manager for the environmental test lab in Rancho Bernardo, CA for Northrop Grumman.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
