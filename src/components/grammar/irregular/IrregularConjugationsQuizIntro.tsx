// renders with state "irregular-conjugartions-intro"

import { Button } from "react-bootstrap";

export default function IrregularConjugationsQuizIntro({
    setState
}: {
    setState: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
    return (
        <main>
            <div className="py-4">
                <p className="display-3 fw-semibold">
                    Conjugation of Irregular Verbs - Quiz
                </p>
            </div>

            <div className="py-4">
                <div className="container">
                    <p>
                        It's time to test your knowledge! Be sure to study the
                        table one last time before continuing to the quiz to
                        make sure you understand the different conjugations.
                    </p>

                    <Button
                        variant="secondary"
                        onClick={() => {
                            setState("irregular-conjugations-intro");
                        }}
                        className="mx-2"
                    >
                        Back
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => setState("irregular-conjugations-quiz")}
                        className="mx-2"
                    >
                        Continue
                    </Button>
                </div>
            </div>
        </main>
    );
}
