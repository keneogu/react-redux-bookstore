import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import Header from './Header';
import '../App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
