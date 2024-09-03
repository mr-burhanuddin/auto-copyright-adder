
/*

**  File Name:        App.tsx

**

**  Description:      Sdasd

**

**    Author:               Kalu

**  Creation Date:  2024-09-03

**

******************************************************************************

**                                                                            **

**                          COPYRIGHT                                         **

**                                                                            **

** (C) Copyright 2024                                                         **

** Cygnus Compliance Consulting, Inc.                                        **

**                                                                            **

** This software is furnished under a license for use only on a single       **

** computer system and may be copied only with the inclusion of the  above    **

** copyright notice. This software or any other copies thereof, may not be **

** provided or otherwise made available to any other person  except for use     **

** on such system and to one who agrees to these license terms. title and   **

** ownership of the software shall at all times remain in                   **

** Cygnus Compliance Consulting, Inc.                                       **

**                                                                            **

** The information in this software is subject to change without notice and **

** should not be construed as a commitment by                                **

** Cygnus Compliance Consulting, Inc.                                       **

******************************************************************************

                                                     

******************************************************************************

                              Maintenance History                         

-------------|----------|----------------------------------------------------

    Date     |  Person  |  Description of Modification                   

-------------|----------|----------------------------------------------------
-------------|----------|----------------------------------------------------
    2024-09-03  |  Kasd  |  Jkas                    
-------------|----------|----------------------------------------------------
-------------|----------|----------------------------------------------------
    2024-09-03  |  Jass  |  Ndasd                    
-------------|----------|----------------------------------------------------
-------------|----------|----------------------------------------------------
    2024-09-03  |  Kaju  |  Kaju Ki Test                    
-------------|----------|----------------------------------------------------
-------------|----------|----------------------------------------------------
    2024-09-03  |  Kas  |  ksada                    
-------------|----------|----------------------------------------------------
-------------|----------|----------------------------------------------------
    2024-09-03  |  Bujso  |  Test for All                    
-------------|----------|----------------------------------------------------
-------------|----------|----------------------------------------------------
    2024-09-03  |  Remove  |  Remove Space In App.css                    
-------------|----------|----------------------------------------------------
-------------|----------|----------------------------------------------------
    2024-09-03  |  Some  |  Nosma                    
-------------|----------|----------------------------------------------------
-------------|----------|----------------------------------------------------
    2024-09-03  |  Sonu  |  jassa                    
-------------|----------|----------------------------------------------------
-------------|----------|----------------------------------------------------
    2024-09-03  |  Buhe  |  haksd                    
-------------|----------|----------------------------------------------------
-------------|----------|----------------------------------------------------
    2024-09-03  |  Bhus  |  Kels                    
-------------|----------|----------------------------------------------------














*/
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
