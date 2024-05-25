import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import LernMore from "./components/LernMore";
import PageNotFound from "./components/PageNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import GlobalStyle from "./ui/GlobalStyle";
import CartPage from "./components/CartPage";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
    <GlobalStyle/>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/auth/coin/:id" element={<LernMore />} />
        </Routes>
      </Router>
      <Toaster position="top-center" gutter={2} containerStyle={{padding : "10px"}} />
    </QueryClientProvider>
    </>
  );
};

export default App;

//  "https://api.coingecko.com/api/v3/search/trending"
//    `https://api.coingecko.com/api/v3/coins/${id}`
