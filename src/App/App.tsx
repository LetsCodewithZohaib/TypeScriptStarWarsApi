import { QueryClient, QueryClientProvider } from 'react-query';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { Persons } from 'pages';
import { PersonDetail } from 'pages/PersonDetail';

import Theme from '../theme/Theme';

import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <Router basename={`/${process.env.PUBLIC_URL}`}>        
          <Routes>
            <Route path="/" element={<Navigate to="characters" />} />
            <Route path="characters" element={<Persons />}>
              <Route path=":id" element={<PersonDetail />} />
            </Route>
          </Routes>
        </Router>
      </Theme>
    </QueryClientProvider>
  );
};
