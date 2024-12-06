import { Button } from "react-bootstrap";
import ConjugationTable from "../ConjugationTable";
import { irVerbs } from "../../../data/verbs";
import HoverTooltip from "../../HoverTooltip";
import MultipleChoice from "../../quiz/MultipleChoice";
import OpenEnded from "../../quiz/OpenEnded";

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

                    <div>
                        <MultipleChoice
                            choices={[
                                "recibe",
                                "reciben",
                                "recibimos",
                                "recibo"
                            ]}
                            correctIndex={3}
                            questionNumber={1}
                            question={
                                <p>
                                    Conjugate{" "}
                                    <HoverTooltip
                                        tooltipText="to receive"
                                        content={
                                            <span className="fw-semibold text-primary">
                                                "recibir"
                                            </span>
                                        }
                                    />{" "}
                                    to the "yo" form.
                                </p>
                            }
                        />

                        <MultipleChoice
                            choices={[
                                "describir",
                                "describimos",
                                "bailamos",
                                "describen"
                            ]}
                            correctIndex={1}
                            questionNumber={2}
                            question={
                                <>
                                    <p>
                                        Fill in the blank: Nosotros ____ el
                                        presentación a la clase
                                    </p>
                                    <p>
                                        <HoverTooltip
                                            tooltipText={
                                                'This sentence should translate to: "We describe the presentation to the class."'
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

                        <OpenEnded
                            question={
                                <>
                                    <p>
                                        Fill in the blank: Ellas ____ los libros
                                        de sciencias.
                                    </p>
                                    <p>
                                        <HoverTooltip
                                            tooltipText={
                                                'This sentence should translate to: "The girls open the science books". "Abrir" is the verb for "to open".'
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
                            questionNumber={3}
                            correctAnswers={["abren"]}
                        />
                    </div>

                    <Button
                        variant="secondary"
                        onClick={() =>
                            setState("regular-conjugations-er-table")
                        }
                        className="mx-2"
                    >
                        Back
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() =>
                            setState("regular-conjugations-quiz-intro")
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
