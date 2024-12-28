import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelloWorld } from "../../features/hello-world";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HelloWorld />} />
      </Routes>
    </BrowserRouter>
  );
};
