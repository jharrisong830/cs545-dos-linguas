import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Route, Link, Routes } from "react-router-dom";
import MultipleChoice from "../quiz/MultipleChoice";
import openEnded from "../quiz/OpenEnded";
import React, { useState } from "react";

// renders with state "regular-conjugartions-intro"

export default function Quiz({
    setState
}: {
    setState: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
    const questions = [
        {
            question: "What does desayuno translate to?",
            choices: ["lunch", "snack", "beer", "breakfast"],
            correctIndex: 3
        },
        {
            question: "Fill in the black: Un café (con ___________ )",
            choices: ["leche", "agua", "vino", "caña"],
            correctIndex: 0
        }
    ];

    let mcQuestions =
        questions &&
        questions.map((question) => {
            return (
                <MultipleChoice
                    choices={question.choices}
                    correctIndex={question.correctIndex}
                />
            );
        });

    return (
        <>
            <h1>Test Your Knowledge</h1>
            {questions.map((q, index) => (
                <div key={index}>
                    <h2>
                        {index + 1}. {q.question}
                    </h2>
                    {mcQuestions[index]}
                </div>
            ))}

            <br />
            <br />
            <br />
            <br />

            <Button // @ts-ignore
                as={Link}
                to="/"
                variant="primary"
                size="lg"
                className="mx-2"
            >
                Back to Home
            </Button>
        </>
    );
}
