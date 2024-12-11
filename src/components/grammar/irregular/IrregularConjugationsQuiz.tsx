// renders with state "irregular-conjugartions-quiz"

import { useState } from "react";
import MultipleChoice, { MultipleChoiceProps } from "../../quiz/MultipleChoice";
import OpenEnded, { OpenEndedProps } from "../../quiz/OpenEnded";
import { irregularVerbs } from "../../../data/verbs";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function IrregularConjugationsQuiz({
    setState
}: {
    setState: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
    const multipleChoiceQuestions: Array<MultipleChoiceProps> = [
        {
            question: `Conjugate ${irregularVerbs[0].infinitive} to the "yo" form.`,
            choices: [
                irregularVerbs[0].elEllaUsted!,
                irregularVerbs[0].yo!,
                irregularVerbs[0].ellosEllasUstedes!,
                irregularVerbs[0].infinitive
            ],
            correctIndex: 1,
            questionNumber: 1
        },
        {
            question: `Conjugate ${irregularVerbs[1].infinitive} to the "tu" form.`,
            choices: [
                irregularVerbs[1].ellosEllasUstedes!,
                irregularVerbs[1].yo!,
                irregularVerbs[1].tu!,
                irregularVerbs[1].yo!
            ],
            correctIndex: 2,
            questionNumber: 2
        },
        {
            question: `Conjugate ${irregularVerbs[0].infinitive} to the "el/ella/usted" form.`,
            choices: [
                irregularVerbs[0].elEllaUsted!,
                irregularVerbs[0].ellosEllasUstedes!,
                irregularVerbs[0].tu!,
                irregularVerbs[0].yo!
            ],
            correctIndex: 0,
            questionNumber: 3
        },
        {
            question: `Conjugate ${irregularVerbs[2].infinitive} to the "nosotros" form.`,
            choices: [
                irregularVerbs[2].ellosEllasUstedes!,
                irregularVerbs[2].nosotros!,
                irregularVerbs[2].elEllaUsted!,
                irregularVerbs[2].tu!
            ],
            correctIndex: 1,
            questionNumber: 4
        }
    ];

    const openEndedQuestions: Array<OpenEndedProps> = [
        {
            question: `Conjugate ${irregularVerbs[0].infinitive} to the "tu" form.`,
            correctAnswers: [irregularVerbs[0].tu!],
            questionNumber: 5
        },
        {
            question: `Conjugate ${irregularVerbs[3].infinitive} to the "ellos/ellas/ustedes" form.`,
            correctAnswers: [irregularVerbs[3].ellosEllasUstedes!],
            questionNumber: 6
        }
    ];

    const totalQuestions = multipleChoiceQuestions.length + openEndedQuestions.length;
    const [score, setScore] = useState(0);

    return (
        <main>
            <div className="py-4">
                <p className="display-3 fw-semibold">
                    Conjugation of Irregular Verbs - Quiz
                </p>
            </div>

            <div className="py-4">
                <p className={`display-6 fw-semibold${score === totalQuestions ? " text-body-success" : ""}`}>Score: {score} / {totalQuestions}</p>
            </div>

            <div className="py-4">
                {multipleChoiceQuestions.map((q: MultipleChoiceProps) => (
                    <MultipleChoice {...q} setScore={setScore} />
                ))}
                {openEndedQuestions.map((q: OpenEndedProps) => (
                    <OpenEnded {...q} setScore={setScore}/>
                ))}
            </div>

            <Button
                variant="secondary"
                onClick={() => setState("irregular-conjugations-quiz-intro")}
                className="mx-2"
            >
                Back
            </Button>
            <Button // @ts-ignore
                as={Link}
                variant="primary"
                to="/grammar"
                className="mx-2"
            >
                Complete Lesson
            </Button>
        </main>
    );
}
