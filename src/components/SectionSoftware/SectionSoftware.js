import React from 'react';
import './Software.css';
import Tiles from "./Tiles";
import SoftwarePortfolio from "./PortfolioData";
import scrollDownImg from './images/scroll-down.svg';

export default class SectionSoftware extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      isSwitchingScroll: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  switchScroll(){
    this.isSwitchingScroll = !this.state.isSwitchingScroll;
    this.setState({clicked: !this.state.clicked});
    let titlePosition;
    let scrollPosition;
    let rotate;
    let textContent;
    if (this.state.clicked) {
      titlePosition = "-133px";
      scrollPosition = 0;
      rotate = "0deg"
      textContent = "Software development"
    } else {
      titlePosition = "0";
      scrollPosition = window.innerHeight;
      rotate = "180deg"
      textContent = "Web development"
    }

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
    let title = document.getElementById('software-title-scroll')
    title.style.top = titlePosition;
    title.children[1].style.rotate = rotate;
  }
  handleClick(e) {
      this.switchScroll();
  }
  handleScroll(e) {
    if (!this.state.isSwitchingScroll) {
      this.switchScroll()
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  render() {
    return (
      <section className={'software'}>
        <div className="wrapper">
          <div id={'software-title-scroll'} className="software-title-wrapper">
            <h2 className={'software-title title'}>Software development</h2>
            <div onClick={this.handleClick} className={"scroll-down"}>
              <img src={scrollDownImg} alt=""/>
            </div>
          </div>
          <Tiles tilesData={SoftwarePortfolio}/>
        </div>
      </section>
    )
  }
}
