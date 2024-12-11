import { Button } from "react-bootstrap";
import React, { useState } from "react";

// renders with state "regular-conjugartions-intro"
export interface OpenEndedProps {
    question: string | JSX.Element;
    correctAnswers: string[];
    questionNumber: number;
    setScore?: React.Dispatch<React.SetStateAction<number>>;
}

const OpenEnded: React.FC<OpenEndedProps> = ({
    question,
    correctAnswers,
    questionNumber,
    setScore
}) => {
    //make a form with a text input
    //send over a question and a list of correct answers as a prop
    //check to see if the answer matches any item in the list
    //if it does, make the question green
    //if it doesn't. make the question red
    //use state where unanswered == black text, red == incorrect, green == correct
    const [answer, setAnswer] = useState<string>("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setIsCorrect(correctAnswers.includes(answer.trim().toLowerCase()));
        if (setScore && correctAnswers.includes(answer.trim().toLowerCase())) { // set the correct index to send it back to the parent component
            setScore((curr) => curr + 1);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2
                style={{
                    color: isSubmitted ? (isCorrect ? "green" : "red") : "black"
                }}
            >
                {questionNumber}. {question}
            </h2>
            <div>
                <label
                    style={{
                        color: isSubmitted
                            ? isCorrect
                                ? "green"
                                : "red"
                            : "black",
                        marginTop: "7px"
                    }}
                >
                    <input
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        disabled={isSubmitted}
                    />
                </label>
            </div>
            <Button
                type="submit"
                disabled={isSubmitted}
                style={{ margin: "10px" }}
            >
                Submit
            </Button>
        </form>
    );
};

export default OpenEnded;
