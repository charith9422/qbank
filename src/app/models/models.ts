export interface Question {
  id?:string,
  questionDef: string;
  language: string;
  answer: string;
  moreAnswers: [
    {
      answer: string;
    }
  ];
}



