import Feedbacks from "./feedback/feedback.jsx"


export const App = () => {
  return (
    <div>
      <Feedbacks
        state={{
          good: 0,
          neutral: 0,
          bad: 0
        }}
    />
    </div>
  );
};
