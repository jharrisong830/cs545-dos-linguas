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
                    <p>
                        Here are some common verbs ending with the{" "}
                        <strong>-ar</strong> suffix.
                    </p>

                    <p>
                        For <strong>-ar</strong> verbs, simply replace{" "}
                        <strong>-ar</strong> with the appropriate conjugation
                        ending, depending on the subject.
                    </p>

                    <p>
                        To say "I work", we take "trabaj<strong>ar</strong>",
                        and replace <strong>-ar</strong> with{" "}
                        <strong>-o</strong>. "Yo trabaj<strong>o</strong>"
                        translates to "I work".
                    </p>

                    <p>
                        The same steps can be used for any other subject. To say
                        "we work", we take "trabaj<strong>ar</strong>", and
                        replace <strong>-ar</strong> with <strong>-amos</strong>
                        . "Nosotros trabaj<strong>amos</strong>" translates to
                        "we work".
                    </p>

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
