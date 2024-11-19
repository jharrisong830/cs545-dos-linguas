import { Button } from "react-bootstrap";
import ConjugationTable from "./ConjugationTable";
import { arVerbs } from "../../../data/verbs";

// renders with state "regular-conjugations-ar-table"

export default function RegularConjugationArTable({
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
                    <ConjugationTable sampleVerbs={arVerbs.slice(0, 3)} />

                    <Button
                        variant="secondary"
                        onClick={() => setState("regular-conjugations-intro")}
                    >
                        Back
                    </Button>
                    {/* <Button variant="primary" onClick={() => setState("")}>Continue</Button> */}
                </div>
            </div>
        </main>
    );
}
