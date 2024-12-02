import { Button } from "react-bootstrap";

// renders with state "regular-conjugartions-intro"

export default function DiningVocabIntro({
    setState
}: {
    setState: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
    return (
        <main>
            <div className="py-4">
                <p className="display-3 fw-semibold">Dining Vocabulary</p>
            </div>

            <div className="py-4">
                <div className="container">
                    <p>
                        This lesson will go over the basic meals of the day,
                        common drinks, and common dishes found in Spanish
                        restaurants. These include <b>tapas</b>, or small dishes
                        to taste, and <b>racións</b>, which are plates of small
                        bites to share.
                    </p>

                    <Button
                        variant="primary"
                        onClick={() => setState("dining-vocab")}
                    >
                        Continue
                    </Button>
                </div>
            </div>
        </main>
    );
}
