// import React from 'react'

// function Header({student}) {
//   return (
//     <main>
//       {student.map((e) => (
//         <p>
//           {e.name}
//         </p>
//       ))}
//     </main>
//   )
// }

// export default Header






// import React from 'react'

// function Header({show}) {
//   return (
//     <main>
//       <button onClick={show}>Click Me</button>
//     </main>
//   )
// }

// export default Header











function Conclud({ expenses }) {

  return (
    <div>
      {expenses.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <p>{item.category}</p>
        </div>
      ))}
    </div>
  );
}

export default Conclud;