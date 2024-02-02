import {Component} from 'react'
import {v4} from 'uuid'
import {
  CreatTaskContainer,
  CreatTaskHeading,
  CreatTaskLabel,
  CreatTaskInput,
  AddTaskBtn,
  GeneratedTaskContainer,
  GeneratedTaskBtn,
  CurrentList,
  TagStyling,
  TasksHeading,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTask extends Component {
  state = {
    allTasks: [],
    userTask: '',
    onclick: false,
    userTag: tagsList[0].displayText,
    activeTag: tagsList[0].optionId,
  }

  getTagData = id => {
    this.setState(prev => ({activeTag: id, onclick: !prev.onclick}))
  }

  isAddTask = event => {
    event.preventDefault()
    const {userTag, userTask} = this.state
    const data = {
      id: v4(),
      task: userTask,
      tag: userTag,
    }
    this.setState(prev => ({
      allTasks: [...prev.allTasks, data],
      userTask: '',
      userTag: tagsList[0].displayText,
    }))
  }

  getTask = event => {
    this.setState({userTask: event.target.value})
  }

  getSelected = event => {
    this.setState({userTag: event.target.value})
  }

  creatTask = () => {
    const {userTag, userTask} = this.state
    return (
      <>
        <CreatTaskContainer onSubmit={this.isAddTask} as="form">
          <CreatTaskHeading>Create a task!</CreatTaskHeading>
          <div
            style={{display: 'flex', flexDirection: 'column', padding: '16px'}}
          >
            <CreatTaskLabel htmlFor="task">Task</CreatTaskLabel>
            <CreatTaskInput
              onChange={this.getTask}
              value={userTask}
              id="task"
              type="text"
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '16px',
            }}
          >
            <CreatTaskLabel htmlFor="tags">Tags</CreatTaskLabel>
            <CreatTaskInput
              value={userTag}
              onChange={this.getSelected}
              placeholder="Enter the task here"
              as="select"
              id="tags"
              type="text"
            >
              {tagsList.map(items => (
                <option value={items.optionId} key={items.optionId}>
                  {items.displayText}
                </option>
              ))}
            </CreatTaskInput>
          </div>
          <AddTaskBtn type="submit">Add Task</AddTaskBtn>
        </CreatTaskContainer>
      </>
    )
  }

  generatedTask = () => {
    const {allTasks, activeTag, onclick} = this.state
    const filtered = allTasks.filter(
      items => items.tag.toUpperCase() === activeTag,
    )
    const renderData = onclick ? filtered : allTasks
    return (
      <>
        <GeneratedTaskContainer>
          <CreatTaskLabel as="h1">Tags</CreatTaskLabel>
          <ul style={{display: 'flex', paddingLeft: '0px'}}>
            {tagsList.map(items => (
              <li style={{listStyleType: 'none'}} key={items.optionId}>
                <GeneratedTaskBtn
                  onClicked={filtered.tag === items.displayText}
                  onClick={() => this.getTagData(items.optionId)}
                  type="button"
                >
                  {items.displayText}
                </GeneratedTaskBtn>
              </li>
            ))}
          </ul>
          <TasksHeading>Tasks</TasksHeading>
          {allTasks.length === 0 ? (
            <CreatTaskLabel style={{textAlign: 'center'}} as="p">
              No Tasks Added Yet
            </CreatTaskLabel>
          ) : (
            <ul>
              {renderData.map(items => (
                <CurrentList key={items.id}>
                  <CreatTaskLabel as="p">{items.task}</CreatTaskLabel>
                  <TagStyling>{items.tag}</TagStyling>
                </CurrentList>
              ))}
            </ul>
          )}
        </GeneratedTaskContainer>
      </>
    )
  }

  render() {
    const {userTag} = this.state
    console.log(userTag)
    return (
      <div style={{display: 'flex'}}>
        <>{this.creatTask()}</>
        <>{this.generatedTask()}</>
      </div>
    )
  }
}
export default MyTask
