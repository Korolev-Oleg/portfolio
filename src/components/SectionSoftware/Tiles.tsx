import React, {Component, MouseEvent} from 'react';
import {TilesDataType} from './Types';
import './Modal.css'

interface TilesProps {
  tilesData: TilesDataType[];
}

interface TilesState {
  showModal: boolean;
  activeTile: TilesDataType | null;
}

export default class Tiles extends Component<TilesProps, TilesState> {
  constructor(props: TilesProps) {
    super(props);
    this.state = {
      showModal: false,
      activeTile: null,
    };
  }

  showPopup = (tile: TilesDataType) => (event: MouseEvent) => {
    this.setState({
      showModal: true,
      activeTile: tile,
    });
  };

  closePopup = () => {
    this.setState({
      showModal: false,
      activeTile: null,
    });
  };

  render() {
    return (
      <div className={'tiles'}>
        {this.props.tilesData.map((tile, index) => (
          <>
            <div>
              <div className={'tile'} onClick={this.showPopup(tile)} key={index}>
                <img src={tile.image} alt=""/>
                <div className={'tile-title'}>
                  {tile.title}
                </div>
              </div>
            </div>
          </>
        ))}

        {this.state.showModal && (
          <div className='modal'>
            <div className='modal-content'>
              <span className='close' onClick={this.closePopup}>&times;</span>
              <p>{this.state.activeTile?.title}</p>
              <img src={this.state.activeTile?.image} alt=""/>
              <p>{this.state.activeTile?.description}</p>
              <ul className={'stack-list'}>
                {this.state.activeTile?.stack.map((item, index) => (
                  <li className={'stack-item'} key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}
