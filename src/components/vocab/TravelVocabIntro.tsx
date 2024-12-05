import { Button } from "react-bootstrap";

// renders with state "regular-conjugartions-intro"

export default function TravelVocabIntro({
    setState
}: {
    setState: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
    return (
        <main>
            <div className="py-4">
                <p className="display-3 fw-semibold">
                    Travel Vocabulary
                </p>
            </div>

            <div className="py-4">
                <div className="container">
                    <p>
                        This lesson will cover essential travel vocabulary and phrases for navigating transportation and exploring new destinations especially in Spanish-speaking countries.
                    </p>

        

                    <Button
                        variant="primary"
                        onClick={() =>
                            setState("travel-vocab")
                        }
                    >
                        Continue
                    </Button>
                </div>
            </div>
        </main>
    );
}
