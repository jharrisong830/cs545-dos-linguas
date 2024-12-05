import { Button } from "react-bootstrap";

// renders with state "work-vocab-intro"

export default function WorkVocabIntro({
    setState
}: {
    setState: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
    return (
        <main>
            <div className="py-4">
                <p className="display-3 fw-semibold">Workplace Vocabulary</p>
            </div>

            <div className="py-4">
                <div className="container">
                    <p>
                        This lesson will go over common jobs you need to know,
                        along with some basic phrases to discuss work with
                        others.
                    </p>

                    <Button
                        variant="primary"
                        onClick={() => setState("work-vocab")}
                    >
                        Continue
                    </Button>
                </div>
            </div>
        </main>
    );
}
