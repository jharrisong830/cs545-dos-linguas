import { Button } from "react-bootstrap";
import ConjugationTable from "../ConjugationTable";
import { arVerbs } from "../../../data/verbs";
import MultipleChoice from "../../quiz/MultipleChoice";
import HoverTooltip from "../../HoverTooltip";

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

                    <div>
                        <MultipleChoice
                            choices={[
                                "trabajo",
                                "trabaja",
                                "trabajas",
                                "trabajan"
                            ]}
                            correctIndex={2}
                            questionNumber={1}
                            question={
                                <p>Conjugate "trabajar" to the "tu" form.</p>
                            }
                        />

                        <MultipleChoice
                            choices={["ayuda", "ayudamos", "ayudas", "ayudo"]}
                            correctIndex={0}
                            questionNumber={2}
                            question={
                                <p>
                                    Conjugate{" "}
                                    <HoverTooltip
                                        tooltipText="to help"
                                        content={
                                            <span className="fw-semibold text-primary">
                                                "ayudar"
                                            </span>
                                        }
                                    />{" "}
                                    to the "ell/ella/usted" form.
                                </p>
                            }
                        />
                    </div>

                    <Button
                        variant="secondary"
                        onClick={() => setState("regular-conjugations-intro")}
                        className="mx-2"
                    >
                        Back
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() =>
                            setState("regular-conjugations-er-table")
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
