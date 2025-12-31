import { BrowserRouter, Routes, Route } from 'react-router';
import Index from './ui/layout/Index';
import NotFound from './ui/pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
