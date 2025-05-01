
import './App.css'
import ListGroup from './Components/ListGroup'
import Alert from './Components/Alert'
import Button from './Components/button'
import { useState } from 'react'

function App() {

  const items = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']
  const heading = 'Cities'
  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  const [alertVisible, setAlertVisible] = useState(false)

  return (
    <>
      <ListGroup items={items} heading={heading} onSelectItem={handleSelectItem} />
      <Button onClick={() => setAlertVisible(true)}>Show Alert</Button>
      {
      alertVisible 
      && 
      <Alert onClose={() => setAlertVisible(false)}>
        <h1>World</h1>
        <p>This is a paragraph</p>
      </Alert>}
    </>
  )
}

export default App
