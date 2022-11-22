import { useState } from "react";

const Button1 = () => {
  const whenChange = (e: any) => {
    setvalue(e.target.value);
    console.log(e);
  };

  const [value, setvalue] = useState();
  const whatTodo1 = {
    name: value,
  };

  const [value1, setvalue1] = useState([
    {
      name: " ",
    },
  ]);

  const y = () => {
    setvalue1([...value1, whatTodo1]);
  };
  console.log(value1);

  const d = (z: any) => {
    let a = value1.filter((r) => {
      if (z.name != r.name) {
        return r;
      }
    });
    setvalue1(a);
    console.log(z);
  };

  return (
    <div className="container bg-secondary ">
      <div className="row">
        <div className="col-12 mt-5 pt-5 bg-secondary text-center ">
          <h1>To do List</h1>
        </div>
      </div>
      <div className="row">
        <div className="col text-center ">
          <h5>Add item</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center ps-5 ms-5">
          <button onClick={y} className="buttoncolor bg-success">
            +
          </button>

          <input
            onChange={(e) => whenChange(e)}
            type="text"
            placeholder="write item"
          />
        </div>
        <div className="valuetoshow text-center"> </div>
        <table className="mytable bg-secondary text-center">
          <ul>
            {value1.map((z) => {
              return (
                <ol>
                  {z.name}
                  <button onClick={() => d(z)} className="buttondel bg-danger">
                    delete
                  </button>
                </ol>
              );
            })}
          </ul>
        </table>
      </div>
    </div>
  );
};

export default Button1;
