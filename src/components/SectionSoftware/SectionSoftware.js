import React from 'react';
import './Software.css';
import Tiles from "./Tiles";
import SoftwarePortfolio from "./PortfolioData";


export default class SectionSoftware extends React.Component {
  render() {
    return (
      <section className={'software'}>
        <div className="wrapper">
          <h2 className={'software-title title'}>Software development</h2>
          <Tiles tilesData={SoftwarePortfolio}/>
        </div>
      </section>
    )
  }
}
