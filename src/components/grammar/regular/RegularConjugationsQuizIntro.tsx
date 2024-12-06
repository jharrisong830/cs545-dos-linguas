// renders with state "regular-conjugartions-intro"

import { Button } from "react-bootstrap";

export default function RegularConjugationsQuizIntro({
    setState
}: {
    setState: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
    return (
        <main>
            <div className="py-4">
                <p className="display-3 fw-semibold">
                    Conjugation of Regular Verbs - Quiz
                </p>
            </div>

            <div className="py-4">
                <div className="container">
                    <p>
                        It's time to test your knowledge! Try out the following
                        quiz to make sure you've mastered conjugating regular
                        verbs!
                    </p>

                    <Button
                        variant="secondary"
                        onClick={() => {
                            setState("regular-conjugations-ir-table");
                        }}
                        className="mx-2"
                    >
                        Back
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => setState("regular-conjugations-quiz")}
                        className="mx-2"
                    >
                        Continue
                    </Button>
                </div>
            </div>
        </main>
    );
}
