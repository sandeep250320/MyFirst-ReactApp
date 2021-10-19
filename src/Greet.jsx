import react from "react";
function Greet() {
  let currdat = new Date();
  currdat = currdat.getHours();

  let greeting = "";

  const style1 = {};

  if (currdat >= 1 && currdat < 11) {
    greeting = "Good Morning";
    style1.color = "green";
  } else if (currdat > 11 && currdat <= 15) {
    greeting = "Good Afternoon";
    style1.color = "red";
  } else if (currdat > 15 && currdat <= 19) {
    greeting = "Good Evening";
    style1.color = "skyblue";
  } else {
    greeting = "Good Night";
    style1.color = "purple";
  }

  return (
    <>
    <p>
      <h1>
        Hello Sir ,<span style={style1}> {greeting}! </span>
      </h1>
    </p>

    </>
  );
}

export default  Greet;