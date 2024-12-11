import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Route, Link, Routes } from "react-router-dom";
import MultipleChoice from "../quiz/MultipleChoice";
import OpenEnded from "../quiz/OpenEnded";
import React, { useState } from "react";

// renders with state "regular-conjugartions-intro"

export default function Quiz({
    setState,
    type
}: {
    setState: React.Dispatch<React.SetStateAction<string | undefined>>;
    type: String;
}) {
    let mcQuestionsList: any[] = [];
    let oeQuestionsList: any[] = [];

    if (type == "dining") {
        mcQuestionsList = [
            {
                question: "What does desayuno translate to?",
                choices: ["lunch", "snack", "beer", "breakfast"],
                correctIndex: 3,
                questionNumber: 1
            },
            {
                question: "Fill in the black: Un café (con ___________ )",
                choices: ["leche", "agua", "vino", "caña"],
                correctIndex: 0,
                questionNumber: 2
            }
        ];
        oeQuestionsList = [
            {
                question: "What does almuerzo translate to?",
                correctAnswers: ["lunch", "Lunch", "LUNCH"],
                questionNumber: 3
            },
            {
                question: "What does cena translate to?",
                correctAnswers: ["dinner", "Dinner", "DINNER"],
                questionNumber: 4
            }
        ];
    } else if (type == "work") {
        mcQuestionsList = [
            {
                question: "What does abogado translate to?",
                choices: ["chef", "teacher", "trucker", "lawyer"],
                correctIndex: 3,
                questionNumber: 1
            },
            {
                question: "Fill in the black: Llamada de ___________ ",
                choices: ["Zoom", "jefe", "colega", "entrevista"],
                correctIndex: 0,
                questionNumber: 2
            }
        ];
        oeQuestionsList = [
            {
                question: "What does entrevista translate to?",
                correctAnswers: ["interview", "Interview", "INTERVIEW"],
                questionNumber: 3
            },
            {
                question: "What does la presentación translate to?",
                correctAnswers: [
                    "presentation",
                    "Presentation",
                    "PRESENTATION"
                ],
                questionNumber: 4
            }
        ];
    } else if (type == "travel") {
        mcQuestionsList = [
            {
                question: "What does 'Suitcase' translate to?",
                choices: ["avióno", "maleta", "reserva", "suitcasa"],
                correctIndex: 1,
                questionNumber: 1
            },
            {
                question: "Fill in the black: Tiene ___________ ",
                choices: ["las indicaciones", "norte", "dónde", "este"],
                correctIndex: 0,
                questionNumber: 2
            }
        ];
        oeQuestionsList = [
            {
                question: "What does 'North' translate to?",
                correctAnswers: ["norte", "Norte", "NORTE"],
                questionNumber: 3
            },
            {
                question: "What does 'avióno' translate to?",
                correctAnswers: ["airplane", "Airplane", "AIRPLANE"],
                questionNumber: 4
            }
        ];
    }

    const [score, setScore] = useState(0);

    let mcQuestions =
        mcQuestionsList &&
        mcQuestionsList.map((question) => {
            return (
                <MultipleChoice
                    question={question.question}
                    choices={question.choices}
                    correctIndex={question.correctIndex}
                    questionNumber={question.questionNumber}
                    setScore={setScore}
                />
            );
        });

    let oeQuestions =
        oeQuestionsList &&
        oeQuestionsList.map((question) => {
            return (
                <OpenEnded
                    question={question.question}
                    correctAnswers={question.correctAnswers}
                    questionNumber={question.questionNumber}
                    setScore={setScore}
                />
            );
        });

    const totalQuestions = mcQuestions.length + oeQuestions.length;

    return (
        <>
            <h1>Test Your Knowledge</h1>

            <div className="py-4">
                <p className={`display-6 fw-semibold${score === totalQuestions ? " text-body-success" : ""}`}>Score: {score} / {totalQuestions}</p>
            </div>

            {mcQuestionsList.map((q, index) => (
                <div key={index}>
                    {mcQuestions[index]}
                    <br />
                </div>
            ))}

            {oeQuestionsList.map((q, index) => (
                <div key={index}>
                    {oeQuestions[index]}
                    <br />
                </div>
            ))}

            <br />
            <br />
            <br />
            <br />

            <Button // @ts-ignore
                as={Link}
                to="/"
                variant="success"
                size="lg"
                className="mx-2"
            >
                Back to Home
            </Button>
        </>
    );
}
