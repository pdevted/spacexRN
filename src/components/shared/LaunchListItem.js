import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { showDate } from '../../utils/showDate';

const Container = styled.View`
  flex-direction: row;

  margin-left: 20px;
  margin-right: 20px;
  padding-top: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  background-color: white;
  border-top-left-radius: ${props => props.first ? 20 : 0}px;
  border-top-right-radius: ${props => props.first ? 20 : 0}px;
  border-bottom-left-radius: ${props => props.last ? 20 : 0}px;
  border-bottom-right-radius: ${props => props.last ? 20 : 0}px;

  height: 80px;
  align-items: center;
  justify-content: center;
`;

const NameText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: black;
  margin-top: -6px;
`;

const DateText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: grey;
`;

const StatusText = styled.Text`
  font-size: 12px;
  font-weight: 700;
  color: blue;
  text-align: right;
  color: ${({ upcoming, success }) => {
    return upcoming ? 'blue' : success ? 'green' : 'red';
  }};
`;

const MissionImage = styled.Image`
  width: 56px;
	height: 56px;
`;

const MissionImagePlaceHolder = styled.View`
  width: 56px;
	height: 56px;
  border-radius: 28px;
  background-color: grey;
`;

function LaunchListItem(props) {
  const { launch, first, last, onPress } = props;
  
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Container first={first} last={last}>
        {launch.links.mission_patch_small ? (
          <MissionImage source={{ uri: launch.links.mission_patch_small }} />
        ) : (
          <MissionImagePlaceHolder />
        )}
        <View style={{ marginLeft: 10, flex: 1 }}>
          <StatusText upcoming={launch.upcoming} success={launch.launch_success}>
            {launch.upcoming ? 
              'Upcoming' : 
              launch.launch_success ? 'Successful' : 'Failed'
            }
          </StatusText>
          <NameText ellipsizeMode="tail" numberOfLines={1}>{launch.mission_name}</NameText>
          <DateText>{showDate(launch.launch_date_utc)}</DateText>
        </View>   
      </Container>
    </TouchableOpacity>
  );
}

export default LaunchListItem;
