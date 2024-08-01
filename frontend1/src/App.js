import React, { useState, useMemo } from "react";

import { MainLayout } from "./styles/Layouts";
import bg from "./img/bg.png";
import styled from "styled-components";
import Orb from "./components/Orb/Orbb";
import Navigation from "/Users/dheerajpatwal/Documents/MERN/ExpenseTracker/Expense_Tracker/frontend1/src/Navigation/Navigation.js";
import Dashboard from "./components/Dashboard/Dashboard";
import Expenses from "./components/Expenses/Expenses";
import Income from "./components/Income/Income";
import { useGlobalContext } from "./context/GlobalContext";
import GlobalContext from "./context/GlobalContext";

function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  // console.log(global);

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>{displayData()}</main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
