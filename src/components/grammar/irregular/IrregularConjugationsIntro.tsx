import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { irregularVerbs } from "../../../data/verbs";
import ConjugationTable from "../ConjugationTable";

// renders with state "irregular-conjugartions-intro"

export default function IrregularConjugationsIntro({
    setState
}: {
    setState: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
    return (
        <main>
            <div className="py-4">
                <p className="display-3 fw-semibold">
                    Conjugation of Irregular Verbs
                </p>
            </div>

            <div className="py-4">
                <div className="container">
                    <p>
                        Irregular verbs have conjugation rules that differ from
                        those of regular verbs. Regular verbs have consistent
                        conjugations for verbs that share the same suffix.
                        Irregular verbs have inconsistent or unexpected
                        conjugations, despite their suffixes.
                    </p>

                    <p>
                        Here are some common irregular verbs that are used in
                        typical conversations. Notice how some have atypical
                        conjugations. <strong>ser</strong>, for example,
                        conjugates to <strong>eres</strong> in the{" "}
                        <strong>tu</strong> form. This is not consistent with
                        the infinitive form of the verb.
                    </p>

                    <ConjugationTable sampleVerbs={irregularVerbs} />

                    <Button // @ts-ignore
                        as={Link}
                        variant="secondary"
                        to="/grammar"
                        className="mx-2"
                    >
                        Back
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() =>
                            setState("irregular-conjugations-quiz-intro")
                        }
                        className="mx-2"
                    >
                        Continue to Quiz
                    </Button>
                </div>
            </div>
        </main>
    );
}
