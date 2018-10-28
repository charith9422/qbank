export interface Question {
  questionDef: string;
  language: string;
  answer: string;
  moreAnswers: [
    {
      answer: string;
    }
  ];
}

export interface User {
  uid: string;
  email: string;
  registrationNo?: string;
  password?: string;
}
