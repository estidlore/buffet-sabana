import {useState} from "react";
import en from "../data/en.json";
import test from "../data/test.json";
import queries from "../data/queries.json";

import {createQuery} from "../util/funcs";
import {useFetch, useObjState} from "../util/hooks";

import {Input, Modal} from "../components";
import { axiosDishesInstance } from "../axios";

const {dishes: pag, ui} = en;
const {api, add, del, get, getAll, set} = queries.dishes;

const queryFactory = createQuery(api);
const useQuery = (data) => useFetch(queryFactory.get(data.path, {
  method: getAll.method,
}));

const dishData = {
  description: "",
  id: "",
  name: "",
  origin: "",
  price: 0,
  type: "",
}

const Dishes = () => {
  const {data, loading, error} = useQuery(getAll);
  const stShowCreate = useState(false);
  const showCreate = () => stShowCreate[1](true);
  return (
    <div className="px2 py5 wp-600">
      <h1 className="txt-center mb3">{pag.title}</h1>
      <button onClick={showCreate}>{ui.add}</button>
      <Load loading={loading} error={error}>
        {
          /*data && data.length > 0 && data.map((dish) => (
            <Dish key={dish.id} {...dish} />
          ))/**/
          test.dishes.map((dish) => (
            <Dish key={dish.id} {...dish} />
          ))
        }
      </Load>
      <Modal title="Create" stShow={stShowCreate} >
        <Create />
      </Modal>
    </div>
  );
};

const Dish = ({
  description,
  id,
  name,
  origin,
  price,
  type,
  onDelete,
  onSet,
}) => {
  const stShowSet = useState(false);

  const onDel = (e) => {
    e.preventDefault();
    const query = queryFactory.get(del.path, {
      method: del.method,
      body: id,
    });
    fetch(query.url, query.init)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        onDelete();
      })
      .catch(err => console.log(err));
  };

  const showSet = () => stShowSet[1](true);

  return (
    <div className="my1 p3 round2 bord bord1 bord-light">
      <div className="d-flex justify-between mb1">
        <h1 className="primary">{name}</h1>
        <h3>{id}</h3>
      </div>
      <div className="row">
        <p className="w5">Description</p>
        <p className="w5">{description}</p>
        <p className="w5">Origin</p>
        <p className="w5">{origin}</p>
        <p className="w5">Price</p>
        <p className="w5">{price}</p>
        <p className="w5">Type</p>
        <p className="w5">{type}</p>
      </div>
      <div className="mt3">
        <button className="mr1" onClick={onDel}>{ui.del}</button>
        <button onClick={showSet}>{ui.set}</button>
      </div>
      <Modal title="Edit" stShow={stShowSet}>
        <Set
          description={description}
          id={id}
          name={name}
          origin={origin}
          price={price}
          type={type}
          onSubmit={onSet}
        />
      </Modal>
    </div>
  );
};

const Create = ({onSubmit}) => {
  const [inputData, setInputData] = useObjState({...dishData});
  const setData = ({target: {name, value}}) =>
    setInputData({[name]: value});
  const submit = (e) => {
    e.preventDefault();
    axiosDishesInstance.post("dishes", inputData)
          .then(() => onSubmit())
  };
  return (
    <>
      <Input
        name="id"
        onChange={setData}
        placeholder="Id"
        value={inputData.id}
      />
      <Input
        name="name"
        onChange={setData}
        placeholder="Name"
        value={inputData.name}
      />
      <Input
        name="description"
        onChange={setData}
        placeholder="Description"
        value={inputData.description}
      />
      <Input
        name="origin"
        onChange={setData}
        placeholder="Origin"
        value={inputData.origin}
      />
      <Input
        name="price"
        onChange={setData}
        placeholder="Price"
        value={inputData.price}
      />
      <Input
        name="type"
        onChange={setData}
        placeholder="Type"
        value={inputData.type}
      />
      <button onClick={submit}>{ui.add}</button>
    </>
  );
};

const Set = ({description, id, name, origin, price, type, onSubmit}) => {
  const [inputData, setInputData] = useObjState({
    description: description,
    id: id,
    name: name,
    origin: origin,
    price: price,
    type: type,
  });
  const setData = ({target: {name, value}}) =>
    setInputData({[name]: value});
  const submit = e => {
    e.preventDefault();
    const query = queryFactory.get(set.path, {
      method: set.method,
    });
    fetch(query.url, query.init)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        onSubmit();
      })
      .catch(err => console.log(err));
  };
  return (
    <>
      <Input
        name="name"
        onChange={setData}
        placeholder="Name"
        value={inputData.name}
      />
      <Input
        name="description"
        onChange={setData}
        placeholder="Description"
        value={inputData.description}
      />
      <Input name="origin"
        onChange={setData}
        placeholder="Origin"
        value={inputData.origin}
      />
      <Input name="price"
        onChange={setData}
        placeholder="Price"
        value={inputData.price}
      />
      <Input
        name="type"
        onChange={setData}
        placeholder="Type"
        value={inputData.type}
      />
      <button onClick={submit}>{ui.set}</button>
    </>
  );
};

const Load = ({children, error, loading}) => {
  /*if (loading) {
    return <h3 className="txt-center i">{ui.loading}</h3>;
  }
  if (error) {
    return (
      <h3 className="txt-center i">
        {`${ui.error} ${ui.loading} ${pag.title}`}
      </h3>
    );
  }/**/
  return children;
};

export default Dishes;
