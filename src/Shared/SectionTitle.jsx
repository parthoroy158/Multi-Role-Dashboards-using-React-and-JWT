
const SectionTitle = ({ heading, SbuHeading }) => {

    return (
        <div className="text-center">
            <h2 className="text-amber-700">-----{SbuHeading}-----</h2>
            <h2 className="text-2xl font-bold border-t-2 border-base-300 w-65 mx-auto mt-2 border-b-2 pb-3">{heading}</h2>
        </div>
    );
};

export default SectionTitle;