import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import "./App.css";

const queryClient = new QueryClient();

// ************************************************************************************************************
//   Moze jos mnogo bolje, nego nisam imao dovoljno vremena :)  !!!
// ************************************************************************************************************

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <div className="pages">
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </div>
  );
}

export default App;
