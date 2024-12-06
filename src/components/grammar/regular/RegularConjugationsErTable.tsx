import { Button } from "react-bootstrap";
import ConjugationTable from "../ConjugationTable";
import { erVerbs } from "../../../data/verbs";
import MultipleChoice from "../../quiz/MultipleChoice";
import HoverTooltip from "../../HoverTooltip";

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

                    <div>
                        <MultipleChoice
                            choices={["bebe", "beben", "bebes", "bebo"]}
                            correctIndex={3}
                            questionNumber={1}
                            question={
                                <p>
                                    Conjugate{" "}
                                    <HoverTooltip
                                        tooltipText="to drink"
                                        content={
                                            <span className="fw-semibold text-primary">
                                                "beber"
                                            </span>
                                        }
                                    />{" "}
                                    to the "yo" form.
                                </p>
                            }
                        />

                        <MultipleChoice
                            choices={["vendemos", "vendes", "venden", "vende"]}
                            correctIndex={2}
                            questionNumber={2}
                            question={
                                <p>
                                    Conjugate{" "}
                                    <HoverTooltip
                                        tooltipText="to sell"
                                        content={
                                            <span className="fw-semibold text-primary">
                                                "vender"
                                            </span>
                                        }
                                    />{" "}
                                    to the "ellos/ellas/ustedes" form.
                                </p>
                            }
                        />

                        <MultipleChoice
                            choices={["comemos", "comes", "como", "comen"]}
                            correctIndex={0}
                            questionNumber={3}
                            question={
                                <>
                                    <p>
                                        Fill in the blank: Nosotros ____ en el
                                        noche.{" "}
                                    </p>
                                    <p>
                                        <HoverTooltip
                                            tooltipText={
                                                'This sentence should translate to: "We eat in the night."'
                                            }
                                            content={
                                                <span className="fw-semibold text-primary">
                                                    Need help?
                                                </span>
                                            }
                                        />{" "}
                                    </p>
                                </>
                            }
                        />
                    </div>

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
