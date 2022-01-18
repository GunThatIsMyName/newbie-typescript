import React from "react";

type QuestionType = {
  question: string;
  answers: [];
  callback: any;
  userAnswer: string;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<QuestionType> = ({
  question,
  answers ,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions 
}) => {
  return <div></div>;
};

export default QuestionCard;
