import { PipeTransform, Pipe } from '@angular/core';
import { Question } from '../models/models';

@Pipe({
    name:'questionFilter'
})

export class QuestionFilterPipe implements PipeTransform {
    transform(questions: Question[], searchTerm: string): Question[] {
        if (!questions || !searchTerm) {
            return questions;
        }
        return questions.filter(question => 
            question.language.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
    }
}