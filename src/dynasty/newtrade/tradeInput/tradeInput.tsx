import React, { useState } from 'react';
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
  const [teamName, setTeamName] = useState<any>();
  const [selectedPlayers, pushSelectedPlayer] = useState<
    [{ label: string; value: string }] | any
  >([{ label: 'Select...', value: '' }]);
  const [selectedPicks, pushSelectedPick] = useState<
    [{ label: string; value: string }] | any
  >([{ label: 'Select...', value: '' }]);
  const [playerSelections, addPlayerSelection] = useState<number>(1);
  const [pickSelections, addPickSelection] = useState<number>(1);

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
        onChange={(selection) => {
          setTeamName(selection);
          props.updateTrade(selection, props.updateValues[0]);
        }}
      ></Select>
      <p className="trade-input-text">sends</p>
      <div className="players-group">
        {
          // Dynamically create select components for each player selected
          Array.from(Array(playerSelections)).map((_, index) => (
            <div className="player-selections" key={Math.random() + index}>
              <Select
                styles={selectStyle}
                options={props.roster}
                // The first value in the selected Players array reads:
                // "Please Select a team", so that's why the value
                // holds the index + 1
                value={
                  !teamName
                    ? selectedPlayers[index]
                    : selectedPlayers[index + 1]
                }
                isDisabled={!teamName}
                onChange={(selection) => {
                  pushSelectedPlayer([...selectedPlayers, selection]);
                  addPlayerSelection(playerSelections + 1);
                  props.updateTrade(selection, props.updateValues[1]);
                }}
              ></Select>
            </div>
          ))
        }
      </div>
      <p className="trade-input-text">&</p>
      <div className="picks-group">
        {
          // Dynamically create select components for each pick selected
          Array.from(Array(pickSelections)).map((_, index) => (
            <div className="pick-selections" key={Math.random() + index}>
              <Select
                styles={selectStyle}
                options={props.draftPicks}
                // The first value in the selected Picks array reads:
                // "Please Select a team", so that's why the value
                // holds the index + 1
                value={
                  !teamName ? selectedPicks[index] : selectedPicks[index + 1]
                }
                isDisabled={!teamName}
                onChange={(selection) => {
                  pushSelectedPick([...selectedPicks, selection]);
                  addPickSelection(pickSelections + 1);
                  props.updateTrade(selection, props.updateValues[1]);
                }}
              ></Select>
            </div>
          ))
        }
      </div>
      {props.receivingTeam ? (
        <p className="trade-input-text">to {props.receivingTeam}</p>
      ) : null}
    </div>
  );
}
