// renders with state "regular-conjugartions-quiz"

import MultipleChoice, { MultipleChoiceProps } from "./components/quiz/MultipleChoice";
import OpenEnded, { OpenEndedProps } from "./components/quiz/OpenEnded";
import {
    arVerbs,
    erVerbs,
    irVerbs,
    generateConjugations
} from "./data/verbs";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ConversationsFinal({
    setState
}: {
    setState: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {


    const multipleChoiceQuestions: Array<MultipleChoiceProps> = [
        {
            question:` Él: ¡Hola! ¿Cómo ____?(how are you?)`,
            choices: [
                "eres",
                "estas",
                "esta",
                "estamos"
            ],
            correctIndex: 1,
            questionNumber: 1
        },
        {
            question: `Yo: ____ bien, ¿Y tú? (I am good, and you?)`,
            choices: [
                "soy",
                "es",
                "somos",
                "estoy"
            ],
            correctIndex: 3,
            questionNumber: 2
        },
        {
            question: `Él: Bien! Cómo es _____? (Good! How is the boss doing?)`,
            choices: [
                "la colega",
                "el maestro",
                "la jefa",
                "la abogada"
            ],
            correctIndex: 2,
            questionNumber: 3
        },
        {
            question: `Yo: ¡No sé! Yo la ______ (I don't know! I'll call her)`,
            choices: [
               "llamar",
               "llamo",
               "trabajo",
               "llama"
            ],
            correctIndex: 1,
            questionNumber: 4
        },
        {
            question: `Él: Bien, saldré a tomar una ______ ahora (Good, I will go out and have a beer now)`,
            choices: [
                "caña",
                "desayuno",
                "gazpacho",
                "café"
            ],
            correctIndex: 0,
            questionNumber: 5
        },
        {
            question: `Yo: ¿Dónde? ¿El bar con el buen bocadillo de _____ __ _____? (Where? The bar with the good ham & cheese sandwich?)`,
            choices: [
                "gazpacho y leche",
                "jamón y leche",
                "jamón y queso",
                "gazpacho y queso"
            ],
            correctIndex: 2,
            questionNumber: 6
        }
    ];

    const openEndedQuestions: Array<OpenEndedProps> = [
        {
            question: `Él: Sí! También _______ allí (Yes! I get lunch there too.)`,
            correctAnswers: ["almuerzo"],
            questionNumber: 7
        },
        {
            question: `Yo: Puedes darma las ________? (Can you give the directions?)`,
            correctAnswers: ["indicaciones"],
            questionNumber: 8
        },
        {
            question: `Él: Sí, ve al ____, ____, ____, y entonces _____ desde aquí! (Yes, go North, South, East, then West of here!)` ,
            correctAnswers: ["norte sur este oeste", "norte, sur, este, oeste"],
            questionNumber: 9
        }
    ];

    return (
        <main>
            <div className="py-4">
                <p className="display-3 fw-semibold">
                    Conversations Final Quiz
                </p>
            </div>

            <div className="py-4">
                {multipleChoiceQuestions.map((q: MultipleChoiceProps) => (
                    <MultipleChoice {...q} />
                ))}
                {openEndedQuestions.map((q: OpenEndedProps) => (
                    <OpenEnded {...q} />
                ))}
            </div>

            <Button
                variant="secondary"
                onClick={() => setState("convo-quiz-intro")}
                className="mx-2"
            >
                Back
            </Button>
            <Button // @ts-ignore
                as={Link}
                variant="primary"
                to="/"
                className="mx-2"
            >
                Complete Lesson
            </Button>
        </main>
    );
}
