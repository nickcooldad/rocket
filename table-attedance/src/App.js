
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [moth, setMoth] = useState('January')


  const mothList =
   [
    'January', 
    'February', 
    'March', 
    'April', 
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  console.log(moth)
  const numberDaysMoth =
    {
      January:31, 
      February: 29, 
      March: 31, 
      April: 30, 
      May: 31,
      June: 30,
      July: 31,
      August: 31,
      September: 30,
      October: 31,
      November: 30,
      December: 31
    }
    console.log(numberDaysMoth.moth)
  const employees = [
  {
    name: "Andrew Clark",
    vacations: [
      ["21.04.24", "24.04.24"],
      ["06.05.24", "13.05.24"],
      ["24.05.24", "08.06.24"],
      ["28.06.24", "18.07.24"],
    ],
  },
  {
    name: "Dan Abramov",
    vacations: [
      ["12.05.24", "20.05.24"],
      ["04.05.24", "06.05.24"],
      ["25.05.24", "26.05.24"],
    ],
  },
  {
    name: "Jason Bonta",
    vacations: [
      ["13.05.24", "16.05.24"],
      ["11.06.24", "12.06.24"],
      ["26.05.24", "26.05.24"],
      ["25.05.24", "26.05.24"],
    ],
  },
  {
    name: "Joe Savona",
    vacations: [
      ["04.04.24", "06.05.24"],
      ["26.05.24", "01.06.24"],
      ["13.05.24", "16.05.24"],
    ],
  },
];



console.log(new Array(numberDaysMoth[mothList[0]]))

  return (
    <div className="App">
      <div className="table">
        <div className="topBlock">
          <button className='buttonLeft'>
              <img src='/images/arrow.svg' alt='arrowLeft' className="imgButtonLeft"/>
          </button>
          <div className="mothYear">{`${moth} 2024`}</div>
          <button className='buttonRight'>
              <img  src='/images/arrow.svg' alt='arrowRight' className="imgButtonRight"/>
          </button>
        </div>
        <div className='dayInMoth'>{
         new Array(numberDaysMoth[mothList[0]]).fill(null).map((day, index) => {
          console.log("+++")
            return <div>
              {index + 1}
            </div>
          })
          }</div>
      </div>
    </div>
  );
}

export default App;
