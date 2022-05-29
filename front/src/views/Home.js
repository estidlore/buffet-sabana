import en from "../data/en.json";

const {home: pag} = en;

const Home = () => (
  <div className="px2 my5 wp-600">
    <h1 className="mb2 txt-center">{pag.title}</h1>
    <h3 className="mb5 txt-center i">{pag.subtitle}</h3>
    <p>{pag.introduction}</p>
    <h2 className="txt-center mt5 mb3">{pag.essays.title}</h2>
    <div className="d-flex justify-center">
      <ButtonEssay title={pag.essays.dataCollectionInTwitterWithAPI} />
      <ButtonEssay title={pag.essays.devOps} />
    </div>
  </div>
);

const ButtonEssay = ({title}) => (
  <button className="m2">
    <a className="decoration-none"
      href={`${title}.pdf`}
      target="_blank"
    >
      {title}
    </a>
  </button>
);

export default Home;
