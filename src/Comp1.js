import React, { useState } from "react";
import "./App.css";
import useSWR from "swr";
import { SelectOption } from "./stories/Select";
import { Button } from "./stories/BTN";
// import HideShowDiv from "./HideShowDiv";
const headers = {
  "x-rapidapi-key": "48d30276b0msha480ba075aefe4bp1f70f0jsn8a952842dfc7",
  "x-rapidapi-host": "quotes15.p.rapidapi.com",
};
const fetcher = async (endpoint) =>
  await fetch(endpoint, { headers }).then((x) => x.json());

const endpoint = "https://quotes15.p.rapidapi.com/quotes/random/";

export const YesButton = (props) => <Button label="Yes" {...props} />;
export const NoButton = (props) => <Button label="No" {...props} />;
export const ExitButton = (props) => <Button label="X" {...props} />;

const InternationalizedQuote = ({ language }) => {
  const { data, error } = useSWR(
    `${endpoint}?language_code=${language}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <span id="API-text">{JSON.stringify(data.content)}</span>;
};

// type FormState = 'inital' | 'accept' | 'decline'

function Comp1({ onClose }) {
  const [state, setState] = useState("");
  const [formState, setFormState] = useState("initial");

  return (
    <div id="API" data-testid="APIField">
      <div className="callout" data-closable>
        <ExitButton
          className={"exitbutton"}
          onClick={onClose}
          // onClick={(e) => this.hideComponent("showHideComp1")}
          data-testid={"exitbuttonTest"}
        />
      </div>
      <div id="Can-I">
        <p>Hey, can i tell you something?? </p>
      </div>
      <br />
      <div id="answer-button-div">
        <div id="yes-and-no-button">
          <YesButton
            onClick={() => setFormState("accept")}
            className={"yesbutton"}
            data-testid={"yesbuttonTest"}
          />
          <NoButton
            onClick={() => setFormState("decline")}
            className={"nobutton"}
            data-testid={"nobuttonTest"}
          />
        </div>
        <div>
          {formState === "accept" && (
            <SelectOption
              value={state}
              onChange={(e) => setState(e.target.value)}
              data-testid="selectTest"
            />
          )}
        </div>
        <pre data-testid="selected-language">{state}</pre>
        <div data-testid="noTextTest">
          <br />
          {formState === "decline" && (
            <span
              style={{
                fontFamily: "Sansita Swashed",
                color: "whitesmoke",
                fontSize: "25px",
              }}
            >
              Alright then. Enjoy exploring.
            </span>
          )}
        </div>
        <br />
      </div>
      <div className={"kirekhar"}>
        {" "}
        {state && <InternationalizedQuote language={state} />}
      </div>
    </div>
    // </div>
  );
}

export default Comp1;
