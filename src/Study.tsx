import { useSearchParams } from "react-router-dom";
import RegularConjugationsIntro from "./components/grammar/regular/RegularConjugationsIntro";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";
import RegularConjugationArTable from "./components/grammar/regular/RegularConjugationsArTable";
import RegularConjugationErTable from "./components/grammar/regular/RegularConjugationsErTable";
import RegularConjugationIrTable from "./components/grammar/regular/RegularConjugationsIrTable";
import DiningVocab from "./components/vocab/DiningVocab";
import DiningVocabIntro from "./components/vocab/DiningVocabIntro";
import Quiz from "./components/vocab/VocabQuiz";
import WorkVocabIntro from "./components/vocab/WorkVocabIntro";
import WorkVocab from "./components/vocab/WorkVocab";
import TravelVocabIntro from "./components/vocab/TravelVocabIntro";
import TravelVocab from "./components/vocab/TravelVocab";
import RegularConjugationsQuiz from "./components/grammar/regular/RegularConjugationsQuiz";
import RegularConjugationsQuizIntro from "./components/grammar/regular/RegularConjugationsQuizIntro";

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
        if (initialType === "vocab" && initialCategory === "travel") {
            setState("travel-vocab-intro");
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
            case "regular-conjugations-er-table":
                return <RegularConjugationErTable setState={setState} />;
            case "regular-conjugations-ir-table":
                return <RegularConjugationIrTable setState={setState} />;
            case "regular-conjugations-quiz-intro":
                return <RegularConjugationsQuizIntro setState={setState} />;
            case "regular-conjugations-quiz":
                return <RegularConjugationsQuiz setState={setState} />;
            case "dining-vocab-intro":
                return <DiningVocabIntro setState={setState} />;
            case "dining-vocab":
                return <DiningVocab setState={setState} />;
            case "dining-quiz":
                return <Quiz setState={setState} type="dining" />;
            case "work-vocab-intro":
                return <WorkVocabIntro setState={setState} />;
            case "work-vocab":
                return <WorkVocab setState={setState} />;
            case "work-quiz":
                return <Quiz setState={setState} type="work" />;
            case "travel-vocab-intro":
                return <TravelVocabIntro setState={setState} />;
            case "travel-vocab":
                return <TravelVocab setState={setState} />;
            case "travel-quiz":
                return <Quiz setState={setState} type="travel" />;
            default:
                return <NotFound />;
        }
    };

    return <>{renderCurrentState(state)}</>;
}
