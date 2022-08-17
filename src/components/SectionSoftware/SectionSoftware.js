import React from 'react';
import './Software.css';
import Tiles from "./Tiles";
import priceOfferGenerator from "./images/priceOfferGenerator.png";
import tendmanager from './images/tendmanager.png';
import zenMoney from './images/zenMoney.png';
import prodlogisticaMobile from './images/prodlogisticaMobile.png';

const SoftwarePortfolio = [
  {
    title: 'Tend manager',
    image: tendmanager,
    description: 'Tend manager is a web application that allows you to manage your tenders. You can create tenders, add tenders to your cart, and pay for them.',
    githubLink: '',
  },
  {
    title: 'Prodlogistica Mobile App',
    image: prodlogisticaMobile,
    description: '',
    githubLink: '',
  },
  {
    title: 'Price Offer Generator',
    image: priceOfferGenerator,
    description: '',
    githubLink: '',
  },
  {
    title: 'ZenMoney',
    image: zenMoney,
    description: '',
    githubLink: '',
  }
]

export default class SectionSoftware extends React.Component {
  render () {
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
