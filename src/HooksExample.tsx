import React, { useEffect, useState } from "react";

export default function UseStateExample() {
  const styles = {
    button: {
      width: "50px",
      margin: "10px",
    },
  };
  const [count, setCount] = useState(0);
  const [type, setType] = useState("");
  // Runs every time after return
  useEffect(() => {
    console.log(
      new Date().toLocaleTimeString(),
      " - This block will be called everytime. Similar to componentDidUpdate"
    );
  });
  // Runs dependency value change
  useEffect(() => {
    if (type) console.log("You clicked", type, "button");
  }, [type]);

  // Runs only once
  useEffect(() => {
    console.log(
      "This block will be called only once. Similar to componentDidMount"
    );
  }, []);
  // Cleanup
  useEffect(
    () => () => {
      alert("Cleanup. Similar to componentDidUnmount");
    },
    []
  );
  console.log("Render");
  return (
    <>
      Count: {count}
      <br />
      <input
        type={"button"}
        value="+"
        onClick={() => {
          setCount(count + 1);
          setType("increment");
        }}
        style={styles.button}
      />
      <input
        type={"button"}
        value="-"
        onClick={() => {
          setCount(count - 1);
          setType("decrement");
        }}
        style={styles.button}
      />
    </>
  );
}
