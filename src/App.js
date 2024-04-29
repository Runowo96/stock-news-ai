import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
