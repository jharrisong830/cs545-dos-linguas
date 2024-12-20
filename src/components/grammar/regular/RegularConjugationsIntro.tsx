import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HoverTooltip from "../../HoverTooltip";

// renders with state "regular-conjugartions-intro"

export default function RegularConjugationsIntro({
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
                        Regular verbs have consistent conjugations based on the
                        suffix for the verb.
                    </p>

                    <p>
                        All verbs that end with <strong>-ar</strong>, for
                        example, will all have the same conjugations. This means
                        we only have to know a few substitutions in order to
                        conjugate regular verbs.
                    </p>

                    <p>
                        This lesson will cover the basic conjugation rules for
                        regular verbs ending with <strong>-ar</strong>,{" "}
                        <strong>-er</strong>, and <strong>-ir</strong>.
                    </p>

                    <p>
                        Need some help during the lesson? Hover over{" "}
                        <HoverTooltip
                            tooltipText="Hi! Tooltips will contain translations and examples to help you out."
                            content={
                                <span className="fw-semibold text-primary">
                                    blue text
                                </span>
                            }
                        />{" "}
                        to get some helpful hints and translations.
                    </p>

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
                            setState("regular-conjugations-ar-table")
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
