import { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);

    console.log('effect is firing!');

  }, [monsters, searchField]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users));
  });

  return (
    <div className='App'>
      {/* App Title */}
      <h1 className='app-title'>Monsters Rolodex</h1>
      {/* Search Bar */}
      <SearchBox
        className='monsters-search-box'
        onChangeHandler={ onSearchChange }  
        placeholder={ 'Search Monsters' }
      />
      {/* Mapping through Monsters */}
      <CardList monsters={ filteredMonsters }/>
    </div>
  );
};

export default App;
