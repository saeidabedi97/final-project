import React, { useState, Component } from "react";
import "./App.css";
import useSWR from "swr";
import { SelectOption } from "./stories/Select";
import { Button } from "./stories/BTN";
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
  return <pre>{JSON.stringify(data.content)}</pre>;
};

// type FormState = 'inital' | 'accept' | 'decline'

function Comp1() {
  const [state, setState] = useState("");
  const [formState, setFormState] = useState("initial");

  return (
    <div id="API" data-testid="APIField">
      <div className="callout" data-closable>
        <ExitButton />
      </div>
      <p>Hey, can i tell you something?? </p>
      <br />
      <div id="answer-button-div">
        <YesButton onClick={() => setFormState("accept")} />
        <NoButton onClick={() => setFormState("decline")} />
        {formState === "accept" && (
          <SelectOption
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        )}
        {formState === "decline" && <pre>good bye!</pre>}
        {state && <InternationalizedQuote language={state} />}
        {/* <pre>{JSON.stringify({ state })}</pre> */}
      </div>
    </div>
    // </div>
  );
}

export default Comp1;
