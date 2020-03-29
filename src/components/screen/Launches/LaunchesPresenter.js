import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import LaunchListItem from '../../shared/LaunchListItem';

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const StyledFlatList = styled.FlatList`
  flex: 1;
`;

const SeparatorView = styled.View`
  height: 1px;
  width: 5%;
  background-color: white;
  margin-left: 20px;
`;

function LaunchesPresenter(props) {
  const { loading, launches, error } = props;
  const navigation = useNavigation();

  const onItemClick = (itemId, rocket) => {
    navigation.push('RockerDetails', {
      launchId: itemId,
      rocket
    })
  }
  const renderItem = ({ item, index }) => {
    return (
      <LaunchListItem
        launch={item}
        first={index === 0}
        last={index === launches.length - 1}
        onPress={() => onItemClick(item._id, item.rocket)}
      />
    )
  };

  // TODO: show loading and error
  if (loading || error) return null;

  return (
    <Container>
      <StyledFlatList 
        data={launches}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        ItemSeparatorComponent={SeparatorView}
      />
    </Container>
  );
}

export default LaunchesPresenter;
