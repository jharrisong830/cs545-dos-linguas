import { Button } from "react-bootstrap";

// renders with state "convo-quiz-intro"

export default function ConversationsIntro({
    setState
}: {
    setState: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
    return (
        <main>
            <div className="py-4">
                <p className="display-3 fw-semibold">Conversations Final Quiz</p>
            </div>

            <div className="py-4">
                <div className="container">
                    <p>
                        Welcome to the conversations quiz! Only take this quiz after all the other 
                        grammar and vocabulary lessons have been completed.
                    </p>

                    <Button
                        variant="primary"
                        onClick={() => setState("convo-quiz")}
                    >
                        Continue
                    </Button>
                </div>
            </div>
        </main>
    );
}
