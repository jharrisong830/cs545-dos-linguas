import { useSearchParams } from "react-router-dom";
import RegularConjugationsIntro from "./components/grammar/regular/RegularConjugationsIntro";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";
import RegularConjugationArTable from "./components/grammar/regular/RegularConjugationsArTable";

export default function Study() {
    const [params, _] = useSearchParams();
    const [state, setState] = useState<string | undefined>(undefined);

    useEffect(() => {
        const initialType = params.get("type");
        const initialCategory = params.get("category");
        if (initialType === "grammar" && initialCategory === "regular") {
            setState("regular-conjugations-intro");
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
            default:
                return <NotFound />;
        }
    };

    return <>{renderCurrentState(state)}</>;
}
