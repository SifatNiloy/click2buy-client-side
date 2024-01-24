const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      <p className="text-3xl uppercase border-y-4 py-4">--{heading}--</p>
      <p className="text-yellow-600 mb-2">--{subheading}--</p>
    </div>
  );
};

export default SectionTitle;
