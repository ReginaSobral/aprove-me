
import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/menu';
import AddAssignor from './pages/assignor/assignor';
import AssignorList from './pages/assignorList/assignorList';
import AddPayable from './pages/payable/payable';
import PayableList from './pages/payableList/payableList';
const App: FC = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>

        <Route path="/">
          <Route index element={<AddPayable />} />
          <Route path="List" element={<PayableList />} />
          <Route path="Assignor" element={<AssignorList />} />
          <Route path="AddAssignor" element={<AddAssignor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;