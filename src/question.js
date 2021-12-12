import Display from "./display";
const Question = ({ data }) => {
  return (
    <div className="questions">
      {data.map((question) => (
        <Display key={question.id} question={question} />
      ))}
    </div>
  );
};
export default Question;
