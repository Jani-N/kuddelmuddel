import { useState } from 'react';
import React=require('react');
import PlayerView, { PlayerViewProbs } from './PlayerView';

const examplePlayers: PlayerViewProbs[] =
    [
      {
        firstname: "Max",
        lastname: "Mustermann"
      },
      {
        firstname: "Maria",
        middlenames: ["Julia", "Jasmin"],
        lastname: "Musterfrau"
      }
    ];

export default function PlayerList() {

  const [players, setPlayers] = useState<PlayerViewProbs[]>(examplePlayers);

  const firstPlayer = players[0];

  return (
    <PlayerView firstname={firstPlayer.firstname} lastname={firstPlayer.lastname} />
  );

}