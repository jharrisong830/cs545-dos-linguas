// import { Button } from "react-bootstrap";
// import React from "react";

// // renders with state "regular-conjugartions-intro"

// const MultipleChoice = () => {
//   return (
//     <div>
//       <h1>in the multiple choice</h1>
//     </div>
//   );
// };

// export default MultipleChoice;

import React, { useState } from "react";
import { Button } from "react-bootstrap";

export interface MultipleChoiceProps {
    question: string | JSX.Element;
    choices: string[];
    correctIndex: number;
    questionNumber: number;
}

const MultipleChoice: React.FC<MultipleChoiceProps> = ({
    question,
    choices,
    correctIndex,
    questionNumber
}) => {
    const [selected, setSelected] = useState<number | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setIsCorrect(selected === correctIndex);
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
            {choices.map((choice, index) => (
                <div key={index}>
                    <label
                        style={{
                            color: isSubmitted
                                ? index === correctIndex
                                    ? "green"
                                    : selected === index
                                      ? "red"
                                      : "black"
                                : "black"
                        }}
                    >
                        <input
                            type="radio"
                            name="choice"
                            value={index}
                            onChange={() => setSelected(index)}
                            disabled={isSubmitted}
                        />
                        {choice}
                    </label>
                </div>
            ))}
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

export default MultipleChoice;
