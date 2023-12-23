import { useState } from 'react';
import './App.css';
import Info from './components/InfoList/Info';
import Form from './components/form/form';


function App() {

  const DummyData = [
    {
      id: 'e1',
      Name: 'Karan',
      Age: 22
    },
    {
      id: 'e2',
      Name: 'Arun',
      Age: 25
    }

  ]

  const [formData, setFormData] = useState(DummyData)


  const OnfinalDataValue = (infoData) => {
    setFormData((prev) => {
      return [...prev, infoData]
    })
  }

  return (
    <div>
      <Form OnfinalDataValue={OnfinalDataValue} />
      <Info data={formData} />
    </div>

  )
}

export default App;
