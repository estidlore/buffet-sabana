import en from "../data/en.json";

const {beverages: pag} = en;

const Beverages = () => {
  return (
    <div className="mx2 my5">
      <h1 className="txt-center">{pag.title}</h1>
    </div>
  );
};

export default Beverages;
