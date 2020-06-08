import { Result } from "..";

const ResultsCard = ({ results }) => {
    const items = results.map((result) => (
        <Result key={result.id} result={result} />
    ));

    return <div>{items}</div>;
};

export default ResultsCard;
