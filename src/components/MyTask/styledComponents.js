import styled from 'styled-components'

export const CreatTaskContainer = styled.div`
  background-color: #323f4b;
  height: 100vh;
  width: 40%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CreatTaskHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  color: #f3aa4e;
`
export const CreatTaskLabel = styled.label`
  font-family: 'Roboto';
  font-size: 18px;
  color: #f1f5f9;
  padding: 16px;
`
export const TasksHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: #f1f5f9;
  padding: 16px;
`

export const CreatTaskInput = styled.input`
  border-radius: 8px;
  outline: none;
  border: 0px;
  width: 320px;
  padding: 12px;
`
export const AddTaskBtn = styled.button`
  border-radius: 8px;
  outline: none;
  border: 0px;
  width: 100px;
  padding: 12px;
  color: #f1f5f9;
  background-color: #f3aa4e;
  margin-top: 32px;
`
export const GeneratedTaskContainer = styled.div`
  background-color: #131213;
  height: 100vh;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
`
export const GeneratedTaskBtn = styled.button`
  border-radius: 8px;
  outline: none;
  border: 1px solid #f3aa4e;
  width: 120px;
  padding: 12px;
  color: #f1f5f9;
  background-color: ${props => (props.onClicked ? '#f3aa4e' : 'transparent')};
  margin-right: 16px;
`
export const CurrentList = styled.li`
  background-color: #1a171d;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
`

export const TagStyling = styled.p`
  border-radius: 22px;
  background-color: #f3aa4e;
  width: 120px;
  height: 40px;
  padding: 8px;
  color: #f1f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1a171d;
  font-weight: bold;
`
