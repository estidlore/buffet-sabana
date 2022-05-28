import en from "../data/en.json";

const {beberages: pag} = en;

const Beberages = () => {
  return (
    <div className="mx2 my5">
      <h1 className="txt-center">{pag.title}</h1>
    </div>
  );
};

export default Beberages;
