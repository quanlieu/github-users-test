import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            users={['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh']}
          />
        }
      />
      <Route path="/user/:name" element={<User />} />
    </Routes>
  );
}

export default App;
