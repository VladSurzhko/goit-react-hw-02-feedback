import Feedback from "./feedback/feedback"



export const App = () => {
  return (
    <div
      style={{
        padding: '60px',
        backgroundColor:" azure", 
        height: '100vh',
        // display: 'flex',
        fontSize: 50,
        // color: '#010101'
      }}
    >
      < Feedback
      />      
    </div>
  );
};






// export const App = () => {
//   return (
//     <div>
//       <Feedbacks
//         state={{
//           good: 0,
//           neutral: 0,
//           bad: 0
//         }}
//     />
//     </div>
//   );
// };
