import React, { useState, useEffect } from "react";
import "./styles.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Massage from "./massage";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
export default function App() {
  const [input, setInput] = useState("");
  const [massages, setMassage] = useState([]);
  const [userName, setUsername] = useState("");
  useEffect(() => {
    db.collection("massage")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setMassage(
          snapshot.docs.map((doc) => ({ id: doc.id, massage: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("plesae enter your name"));
  }, []);
  console.log(massages);
  // console.log(input);
  const sendMassage = (e) => {
    e.preventDefault();

    db.collection("massage").add({
      userName: userName,
      massage: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    //  setMassage([...massage, { userName: userName, massage: input }]);
    setInput("");
  };
  return (
    <div className="App">
      <h2>Welcome {userName}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter the massage</InputLabel>
          <Input
            type="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMassage}
          >
            send massage
          </Button>
        </FormControl>
      </form>
      <FlipMove>
        {massages.map(({ id, massage }) => (
          <Massage userName={userName} massage={massage} key={id} />
        ))}
      </FlipMove>
    </div>
  );
}
