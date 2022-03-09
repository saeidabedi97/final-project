import React, { useState, Component } from "react";
import "./App.css";
import useSWR from "swr";
import { YesButton, NoButton, ExitButton } from "./stories/BTN.stories";
import { SelectOption2 } from "./stories/Select.stories";
const headers = {
  "x-rapidapi-key": "48d30276b0msha480ba075aefe4bp1f70f0jsn8a952842dfc7",
  "x-rapidapi-host": "quotes15.p.rapidapi.com",
};
const fetcher = async (endpoint) =>
  await fetch(endpoint, { headers }).then((x) => x.json());

const endpoint = "https://quotes15.p.rapidapi.com/quotes/random/";

function Comp1() {
  const { data, error } = useSWR(endpoint, fetcher);
  const { state, setState } = useState("");

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // const noButtonClickHandler = ({ state }) => {
  //   return <div>Alright have a good day</div>;
  // };

  // const yesButtonClickHandler = ({ state }) => {
  //   return console.log("salam");
  // };

  return (
    <div id="API">
      <div class="callout" data-closable>
        <ExitButton />
        {/* <button
          class="close-button"
          aria-label="Close alert"
          type="button"
          data-close
        >
          <span aria-hidden="true" style={{ color: "white" }}>
            &times;
          </span>
        </button> */}
      </div>
      <p>Hey, can i tell you something?? </p>
      <br />
      <div id="answer-button-div">
        <YesButton />
        <NoButton />
        <SelectOption2 />
        {/* <button
          id="yes-button"
          onClick={(e) => {
            yesButtonClickHandler(e);
          }}
        >
          yes
        </button> */}
        {/* <button
          id="no-button"
          onClick={(e) => {
            // eslint-disable-next-line no-lone-blocks
            {
              noButtonClickHandler(e);
            }
          }}
          value={state}
        >
          No
        </button> */}

        {/* <div id="langauge-selection-div"> */}
        {/* <div>
            {" "}
            <select id="language-selection">
              <option>English</option>
              <option>Hungarian</option>
              <option>Spanish</option>
              <option>Italian</option>
            </select> */}

        {/* {JSON.stringify(data.content)} */}
      </div>
    </div>
    // </div>
  );
}

export default Comp1;
