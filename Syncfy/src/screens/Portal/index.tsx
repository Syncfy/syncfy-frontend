import React, {useState} from 'react';
import {
  Container,
  SearchContainer,
  SearchInput,
  IconContainer,
  SearchIcon,
  ShoppingCartIconContainer,
  ShoppingCartIcon,
} from './style';

const Portal: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    // Logic to handle search
  };

  return (
    <Container>
      <SearchContainer>
        <IconContainer>
          <SearchIcon source={require('../../assets/icons/search-icon.png')} />
        </IconContainer>
        <SearchInput
          value={searchQuery}
          onChangeText={handleSearchChange}
          placeholder="Buscar um produto no Syncfy"
          clearButtonMode="while-editing"
        />
      </SearchContainer>
      <ShoppingCartIconContainer>
        <ShoppingCartIcon
          source={require('../../assets/icons/shopping-cart.png')}
        />
      </ShoppingCartIconContainer>
    </Container>
  );
};

export default Portal;
