import { Button } from "react-bootstrap";
import { conjugationTable } from "../../../data/verbs";

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
                    <p>TABLE GOES HERE</p>

                    <p>{JSON.stringify(conjugationTable)}</p>

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
