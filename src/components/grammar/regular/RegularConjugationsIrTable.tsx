import { Button } from "react-bootstrap";
import ConjugationTable from "./ConjugationTable";
import { irVerbs } from "../../../data/verbs";

// renders with state "regular-conjugations-ir-table"

export default function RegularConjugationIrTable({
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
                        <strong>-ir</strong> suffix.
                    </p>

                    <ConjugationTable sampleVerbs={irVerbs.slice(0, 3)} />

                    <Button
                        variant="secondary"
                        onClick={() =>
                            setState("regular-conjugations-er-table")
                        }
                        className="mx-2"
                    >
                        Back
                    </Button>
                </div>
            </div>
        </main>
    );
}
