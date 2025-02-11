// import Body from "@/CustomComponents/Body";
// import { Toaster } from "react-hot-toast";

// function App() {
//   return (
//     <div className="bg-red-800">
//       <Body />
//       <Toaster />
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "@/CustomComponents/MainComponents/Layout";

function App() {
  return (
    <Router>
      <Layout />
      <Toaster />
    </Router>
  );
}

export default App;
