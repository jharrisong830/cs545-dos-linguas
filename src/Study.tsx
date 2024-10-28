import { useSearchParams } from "react-router-dom";

export default function Study() {
    const [params, setParams] = useSearchParams();

    return <p>{params}</p>;
}
