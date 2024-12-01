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

import React, { useState } from 'react';
import { Button } from "react-bootstrap";

interface MultipleChoiceProps {
    choices: string[];
    correctIndex: number;
}

const MultipleChoice: React.FC<MultipleChoiceProps> = ({ choices, correctIndex }) => {
    const [selected, setSelected] = useState<number | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <form onSubmit={handleSubmit}>
            {choices.map((choice, index) => (
                <div key={index}>
                    <label style={{ color: isSubmitted ? (index === correctIndex ? 'green' 
                        : (selected === index ? 'red' : 'black')) 
                        : 'black' }}>
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
            <Button type="submit" disabled={isSubmitted}>Submit</Button>
        </form>
    );
};

export default MultipleChoice;