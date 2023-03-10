import { useState } from 'react';
import PropTypes from 'prop-types';
import { x } from '@xstyled/styled-components';

import { SResultCard } from './styles';
import BeerExtraDetails from './BeerExtraDetails';
import RatingContainer from './RatingContainer';
import Button from './Button';

const BeerDetails = ({ beer, addBeer, removeBeer, isRemove }) => {
  const [showBeerData, setShowBeerData] = useState(0);
  return (
    <x.div
      margin="5px"
      bg="dark400"
      color="primary"
      textAlign="center"
      display="flex"
      alignItems="center"
      flexDirection="column"
      boxShadow="up"
      border="1px solid"
      borderColor="light"
      justifyContent="space-between"
      key={beer.beer.bid}
      as={SResultCard}
    >
      <x.div display="flex" flexDirection="column" alignItems="center" padding="0 20px">
        <x.h3 margin="24px 0px 5px">{beer.beer.beer_name}</x.h3>
        {beer.checkin_count.toLocaleString('nl-NL')} checkins
        <x.br />
        <x.img
          margin="10px 0"
          border="10px solid"
          borderColor="light"
          src={beer.beer.beer_label}
          alt=""
        />
        <x.span display="block" margin="10px 0" fontWeight="bold">
          {beer.brewery.brewery_name}
        </x.span>
      </x.div>
      <x.div w="100%">
        {isRemove ? (
          <RatingContainer beerData={beer.beer} />
        ) : (
          <x.div>
            {showBeerData == beer.beer.bid ? (
              <BeerExtraDetails beerId={beer.beer.bid} />
            ) : (
              <Button onClick={() => setShowBeerData(beer.beer.bid)}>Show rating</Button>
            )}
          </x.div>
        )}
        <Button onClick={() => (!isRemove ? addBeer(beer) : removeBeer(beer))}>
          {!isRemove ? 'Add to list' : 'Remove from list'}
        </Button>
      </x.div>
    </x.div>
  );
};

BeerDetails.propTypes = {
  beer: PropTypes.object.isRequired,
  addBeer: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
  removeBeer: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
  isRemove: PropTypes.bool,
};

BeerDetails.defaultProps = {
  addBeer: undefined,
  removeBeer: undefined,
  isRemove: false,
};

export default BeerDetails;
