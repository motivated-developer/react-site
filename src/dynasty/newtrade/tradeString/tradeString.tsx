import React from 'react';
import './tradeString.css';

interface props {
  sendingTeam: string;
  sendingPlayers: string[];
  receivingPlayers: string[];
  sendingPicks: string[];
  receivingPicks: string[];
}

const mapToList = (list: string[]) => {
  return list.map(
    // if player/pick is an empty string '' then don"t make a list item
    (listItem) => {
      if (listItem) return <li key={listItem + Math.random()}>{listItem}</li>;
    }
  );
};

export default function TradeString(props: props) {
  const sendingPlayers = mapToList(props.sendingPlayers);
  const receivingPlayers = mapToList(props.receivingPlayers);
  const sendingPicks = mapToList(props.sendingPicks);
  const receivingPicks = mapToList(props.receivingPicks);

  return (
    <div className="trade-summary">
      <h3>
        <u>{props.sendingTeam}</u>
      </h3>
      <h4 className="sends-receives-content">
        <div className="sends-content">
          <b>Sends:</b>
          <div className="sends-receives-lists">
            <div className="assets-list">{sendingPlayers}</div>
            <div className="assets-list">{sendingPicks}</div>
          </div>
        </div>
        <div className="receives-content">
          <b>Receives:</b>
          <div className="sends-receives-lists">
            <div className="assets-list">{receivingPlayers}</div>
            <div className="assets-list">{receivingPicks}</div>
          </div>
        </div>
        {/* {props.players} and {props.picks.join(', ')} to {props.receivingTeam} */}
      </h4>
    </div>
  );
}
