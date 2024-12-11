// renders with state "regular-conjugartions-quiz"

import { useState } from "react";
import MultipleChoice, { MultipleChoiceProps } from "../../quiz/MultipleChoice";
import OpenEnded, { OpenEndedProps } from "../../quiz/OpenEnded";
import {
    arVerbs,
    erVerbs,
    irVerbs,
    generateConjugations
} from "../../../data/verbs";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function RegularConjugationsQuiz({
    setState
}: {
    setState: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
    const arConj = generateConjugations(arVerbs.slice(0, 3));
    const erConj = generateConjugations(erVerbs.slice(0, 3));
    const irConj = generateConjugations(irVerbs.slice(0, 3));

    const multipleChoiceQuestions: Array<MultipleChoiceProps> = [
        {
            question: `Conjugate ${arConj[0].infinitive} to the "yo" form.`,
            choices: [
                arConj[0].elEllaUsted!,
                arConj[0].yo!,
                arConj[0].ellosEllasUstedes!,
                arConj[0].infinitive
            ],
            correctIndex: 1,
            questionNumber: 1
        },
        {
            question: `Conjugate ${arConj[1].infinitive} to the "tu" form.`,
            choices: [
                arConj[1].ellosEllasUstedes!,
                arConj[1].yo!,
                arConj[1].tu!,
                arConj[1].yo!
            ],
            correctIndex: 2,
            questionNumber: 2
        },
        {
            question: `Conjugate ${erConj[0].infinitive} to the "el/ella/usted" form.`,
            choices: [
                erConj[0].elEllaUsted!,
                erConj[0].ellosEllasUstedes!,
                erConj[0].tu!,
                erConj[0].yo!
            ],
            correctIndex: 0,
            questionNumber: 3
        },
        {
            question: `Conjugate ${erConj[1].infinitive} to the "nosotros" form.`,
            choices: [
                erConj[1].ellosEllasUstedes!,
                erConj[1].nosotros!,
                erConj[1].elEllaUsted!,
                erConj[1].tu!
            ],
            correctIndex: 1,
            questionNumber: 4
        },
        {
            question: `Conjugate ${irConj[0].infinitive} to the "nosotros" form.`,
            choices: [
                irConj[0].elEllaUsted!,
                irConj[0].yo!,
                irConj[0].ellosEllasUstedes!,
                irConj[0].nosotros!
            ],
            correctIndex: 3,
            questionNumber: 5
        },
        {
            question: `Conjugate ${irConj[1].infinitive} to the "ellos/ellas/ustedes" form.`,
            choices: [
                irConj[1].elEllaUsted!,
                irConj[1].yo!,
                irConj[1].ellosEllasUstedes!,
                irConj[1].tu!
            ],
            correctIndex: 2,
            questionNumber: 6
        }
    ];

    const openEndedQuestions: Array<OpenEndedProps> = [
        {
            question: `Conjugate ${arConj[2].infinitive} to the "tu" form.`,
            correctAnswers: [arConj[2].tu!],
            questionNumber: 7
        },
        {
            question: `Conjugate ${erConj[2].infinitive} to the "ellos/ellas/ustedes" form.`,
            correctAnswers: [erConj[2].ellosEllasUstedes!],
            questionNumber: 8
        },
        {
            question: `Conjugate ${irConj[2].infinitive} to the "nosotros" form.`,
            correctAnswers: [irConj[2].nosotros!],
            questionNumber: 9
        }
    ];

    const totalQuestions = multipleChoiceQuestions.length + openEndedQuestions.length;
    const [score, setScore] = useState(0);

    return (
        <main>
            <div className="py-4">
                <p className="display-3 fw-semibold">
                    Conjugation of Regular Verbs - Quiz
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
                    <OpenEnded {...q} setScore={setScore} />
                ))}
            </div>

            <Button
                variant="secondary"
                onClick={() => setState("regular-conjugations-quiz-intro")}
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
