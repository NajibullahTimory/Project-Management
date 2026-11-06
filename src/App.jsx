// // import {useState} from 'react'


// // const App = () => {

// //   const [price, setPrice] = useState('')
// //   const [showPrice, setShowPrice] = useState('')
  
// //   const handleSubmit = () => {
// //     setShowPrice(price)
// //   }



// //   return (

// //     <main className='bg-gray-400 h-screen flex justify-center items-center'>
// //       <div className='h-100 w-120 bg-gray-100 p-4'>
// //         <p className='font-bold flex justify-center items-center text-2xl p-6'>TODO List</p>
// //           <input type="text" className='font-bold text-2xl p-2' 
// //           value={price}
// //           onChange={(e) => setPrice(e.target.value)}
// //           placeholder='Add Task...'/>

// //           <button onClick={handleSubmit} className='bg-orange-500 w-20 rounded-2xl'>Click Me</button>

// //           <table className='border-2 w-full h-20'>
// //             <tr className='border-2'>
// //               <th className='border-2'>Task</th>
// //               <th className='border-2'>
// //                 <th>Delete</th>
// //               </th>
// //               <th>Edite</th>
// //             </tr>
// //             <tr className='border-2'>
// //               <td className='border-2'>{showPrice}</td>
// //               <td className='border-2'>
// //                 <button>Delete</button>
// //               </td>
// //               <td>
// //                 <button>Edite</button>
// //               </td>
// //             </tr>
// //           </table>
          

// //         {/* <p>{showPrice}</p> */}
// //       </div>
// //     </main>
// //   )
// // }

// // export default App







// import React from 'react'
// import Header from './Header'

// function App() {

//     const student = [
//         {
//             id: 1,
//             name: 'Najibullah',
//             lastName: 'Timory',
//             age: 20
//         },
//         {
//             id: 2,
//             name: 'Omid',
//             lastName: 'Tahry',
//             age: 19
//         },
//         {
//             id: 3,
//             name: 'Ali',
//             lastName: 'Barikzay',
//             age: 22
//         },
//     ]
//   return (
//     <main>
//         <Header student={student}/>
//     </main>
//   )
// }

// export default App








// import React from 'react'
// import Header from './Header'

// function App() {
    
//     const show = () => {
//         alert('Hello How are you')
//     }
//   return (
//     <main>
//         <Header show={show}/>
//     </main>
//   )
// }

// export default App










import Conclud from './Conclud'
function App() {

  const expenses = [
    {
      name: "Laptop",
      price: 500,
      category: "Education"
    },
    {
      name: "Food",
      price: 100,
      category: "Food"
    }
  ];

  return <Conclud expenses={expenses} />;
}
export default App