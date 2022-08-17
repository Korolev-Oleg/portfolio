import React from 'react';
import {TilesDataType} from "./Types";

export default class Tiles extends React.Component {
  tilesData: TilesDataType[];

  constructor(props: { tilesData: TilesDataType[] }) {
    super(props);
    this.tilesData = props.tilesData;
  }

  doSome() {
    return console.log('doSome');
  }

  render() {
    return (
      <div className={'tiles'}>
        {this.tilesData.map((tile, index) =>
          <div className={'tile'} onClick={this.doSome} key={index}>
              <img src={tile.image} alt=""/>
              <div className={'tile-title'}>{tile.title}</div>
          </div>
        )}
      </div>
    )
  }
}
