import React=require("react");

export interface PlayerViewProbs {
  firstname: string,
  middlenames?: string[],
  lastname: string
}

export default function PlayerView({firstname, middlenames = [], lastname}: PlayerViewProbs) {

    return (

      <div className="player">

        <div className="fullName">

          <span className="firstname">
            {firstname}
          </span>

          <span className="lastname">
            {lastname}
          </span>

        </div>

      </div>

    );

}