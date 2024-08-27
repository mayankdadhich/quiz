import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 20px;
  background-color: #f7f9fc;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2f80ed;
  padding: 15px;
  border-radius: 8px;
  color: white;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const Navbar = styled.div`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.div`
  cursor: pointer;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  &:hover {
    background-color: #1c6ed9;
  }
`;

const MainContent = styled.div`
  margin-top: 20px;
`;

const ChallengeCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChallengeInfo = styled.div`
  flex: 1;
`;

const ChallengeStatus = styled.div`
  flex: 0.1;
  text-align: center;
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${(props) => (props.open ? '#2f80ed' : '#bdbdbd')};
  color: white;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button`
  border: none;
  background-color: #e0e0e0;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #bdbdbd;
  }
`;

const Dashboard = () => {
  const challenges = [
    { id: 1, title: 'Challenge 1', status: 'Closed', questions: 1 },
    { id: 2, title: 'Challenge 2', status: 'Open', questions: 2 },
    { id: 3, title: 'Challenge 3', status: 'Open', questions: 2 },
    { id: 4, title: 'Challenge 4', status: 'Open', questions: 2 },
    { id: 5, title: 'Challenge 5', status: 'Closed', questions: 1 },
    { id: 6, title: 'Challenge 6', status: 'Open', questions: 2 },
  ];

  return (
    <DashboardContainer>
      <Header>
        <Title>LoremIpsum</Title>
        <Navbar>
          <NavItem>Home</NavItem>
          <NavItem>GameMaster</NavItem>
          <NavItem>Participant</NavItem>
          <NavItem>Judge</NavItem>
        </Navbar>
        <div>Utkarsh</div>
      </Header>
      <MainContent>
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.id}>
            <ChallengeInfo>
              <h3>{challenge.title}</h3>
              <p>Total Questions: {challenge.questions}</p>
              <p>Background Details: What needs to be done and why.</p>
            </ChallengeInfo>
            <ChallengeStatus>
              <StatusBadge open={challenge.status === 'Open'}>
                {challenge.status}
              </StatusBadge>
            </ChallengeStatus>
            <ActionButtons>
              <ActionButton>Edit</ActionButton>
              <ActionButton>Delete</ActionButton>
              <ActionButton>View</ActionButton>
            </ActionButtons>
          </ChallengeCard>
        ))}
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;
