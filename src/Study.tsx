import { useSearchParams } from "react-router-dom";
import RegularConjugationsIntro from "./components/grammar/regular/RegularConjugationsIntro";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";
import RegularConjugationArTable from "./components/grammar/regular/RegularConjugationsArTable";
import DiningVocab from "./components/vocab/DiningVocab";
import DiningVocabIntro from "./components/vocab/DiningVocabIntro";
import Quiz from "./components/vocab/VocabQuiz";
import WorkVocabIntro from "./components/vocab/WorkVocabIntro";
import WorkVocab from "./components/vocab/WorkVocab";

export default function Study() {
    const [params, _] = useSearchParams();
    const [state, setState] = useState<string | undefined>(undefined);

    useEffect(() => {
        const initialType = params.get("type");
        const initialCategory = params.get("category");
        if (initialType === "grammar" && initialCategory === "regular") {
            setState("regular-conjugations-intro");
        }
        if (initialType === "vocab" && initialCategory === "dining") {
            setState("dining-vocab-intro");
        }
        if (initialType === "vocab" && initialCategory === "work") {
            setState("work-vocab-intro");
        }
    }, [params]);

    const renderCurrentState = (currState?: string) => {
        switch (currState) {
            case undefined:
                return <></>;
            case "regular-conjugations-intro":
                return <RegularConjugationsIntro setState={setState} />;
            case "regular-conjugations-ar-table":
                return <RegularConjugationArTable setState={setState} />;
            case "dining-vocab-intro":
                return <DiningVocabIntro setState={setState}/>;
            case "dining-vocab":
                return <DiningVocab setState={setState}/>;
            case "dining-quiz":
                return <Quiz setState={setState} type="dining"/>;
            case "work-vocab-intro":
                return <WorkVocabIntro setState={setState} />;
            case "work-vocab":
                return <WorkVocab setState={setState}/>;
            case "work-quiz":
                return <Quiz setState={setState} type="work"/>;
            default:
                return <NotFound />;
        }
    };

    return <>{renderCurrentState(state)}</>;
}
