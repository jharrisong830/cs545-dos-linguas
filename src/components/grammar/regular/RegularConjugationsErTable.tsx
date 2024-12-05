import { Button } from "react-bootstrap";
import ConjugationTable from "./ConjugationTable";
import { erVerbs } from "../../../data/verbs";

// renders with state "regular-conjugations-er-table"

export default function RegularConjugationErTable({
    setState
}: {
    setState: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
    return (
        <main>
            <div className="py-4">
                <p className="display-3 fw-semibold">
                    Conjugation of Regular Verbs
                </p>
            </div>

            <div className="py-4">
                <div className="container">
                    <p>
                        Here are some common verbs ending with the{" "}
                        <strong>-er</strong> suffix.
                    </p>

                    <ConjugationTable sampleVerbs={erVerbs.slice(0, 3)} />

                    <Button
                        variant="secondary"
                        onClick={() =>
                            setState("regular-conjugations-ar-table")
                        }
                        className="mx-2"
                    >
                        Back
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() =>
                            setState("regular-conjugations-ir-table")
                        }
                        className="mx-2"
                    >
                        Continue
                    </Button>
                </div>
            </div>
        </main>
    );
}
