import { generateConjugations, Verb } from "../../data/verbs";
import { Table } from "react-bootstrap";

export default function ConjugationTable({
    sampleVerbs
}: {
    sampleVerbs: Array<Verb>;
}) {
    if (sampleVerbs[0].suffix !== "irregular")
        sampleVerbs = generateConjugations(sampleVerbs);
    console.log(sampleVerbs);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Subject</th>
                    {sampleVerbs.map((v) => (
                        <th>
                            {v.infinitive} ({v.english})
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>yo (I)</th>
                    {sampleVerbs.map((v) => (
                        <td>{v.yo}</td>
                    ))}
                </tr>
                <tr>
                    <th>tu (you) </th>
                    {sampleVerbs.map((v) => (
                        <td>{v.tu}</td>
                    ))}
                </tr>
                <tr>
                    <th>el/ella/usted (he/she/you)</th>
                    {sampleVerbs.map((v) => (
                        <td>{v.elEllaUsted}</td>
                    ))}
                </tr>
                <tr>
                    <th>nosotros (us)</th>
                    {sampleVerbs.map((v) => (
                        <td>{v.nosotros}</td>
                    ))}
                </tr>
                <tr>
                    <th>ellos/ellas/ustedes (they, they, you)</th>
                    {sampleVerbs.map((v) => (
                        <td>{v.ellosEllasUstedes}</td>
                    ))}
                </tr>
            </tbody>
        </Table>
    );
}
