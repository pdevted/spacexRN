import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding-top: 10px;
  padding-left: 20px;
`;

const RocketName = styled.Text`
  font-size: 18px;
  margin-top: 10px;
`;

const RocketText = styled.Text`
  font-size: 14px;
  margin-top: 10px;
`;

function RocketDetails(props) {
  const { rocket } = props.route.params;

  return (
    <Container>
      <RocketName>
        {`Rocket Name: ${rocket.rocket_name}`}
      </RocketName>
      <RocketText>
        {`Rocket Type: ${rocket.rocket_type}`}
      </RocketText>
      <RocketText>
        {`Reused: ${rocket.first_stage.cores[0].reused ? 'Applicable' : 'Not applicable'}` }
      </RocketText>
    </Container>
  )
}

export default RocketDetails;