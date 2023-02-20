import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 200px;
  border:1px solid black; 
  padding: 40px; 
  margin: 100px 
  
`;

export const SpanContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Picker = styled.button`
  display: inline-block;
  margin-top: 10px;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
`;
