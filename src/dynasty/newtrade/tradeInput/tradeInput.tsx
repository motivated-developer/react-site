import React from 'react';
import Select, { StylesConfig } from 'react-select';
import './tradeInput.css';

interface Props {
  receivingTeam: string;
  teams: object[];
  roster: object[];
  draftPicks: object[];
  updateValues: string[];
  updateTrade: (e: any, updateCategory: string) => {};
}

export default function TradeInput(props: Props) {
  const selectStyle: StylesConfig = {
    option: (provided) => ({
      ...provided,
      color: 'black',
    }),
  };

  return (
    <div className="trade-input">
      <Select
        styles={selectStyle}
        options={props.teams}
        onChange={(selection) =>
          props.updateTrade(selection, props.updateValues[0])
        }
      ></Select>
      <p className="trade-input-text">sends</p>
      <Select
        styles={selectStyle}
        options={props.roster}
        onChange={(selection) =>
          props.updateTrade(selection, props.updateValues[1])
        }
      ></Select>
      <p className="trade-input-text">&</p>
      <Select
        styles={selectStyle}
        options={props.draftPicks}
        onChange={(selection) =>
          props.updateTrade(selection, props.updateValues[2])
        }
      ></Select>
      {props.receivingTeam ? (
        <p className="trade-input-text">to {props.receivingTeam}</p>
      ) : null}
    </div>
  );
}
