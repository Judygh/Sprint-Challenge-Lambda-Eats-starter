// import React, { useState, useEffect } from "react";
// import * as yup from "yup";
// import axios from "axios";

// const formSchema = yup.object().shape({
//   pizzaSize: yup.string(),
//   sauce: yup.string(),
//   chicken: yup.boolean().oneOf([true, false]),
//   beef: yup.boolean().oneOf([true, false]),
//   cheese: yup.boolean().oneOf([true, false]),
//   spinach: yup.boolean().oneOf([true, false]),
//   special: yup.string(),
//   name: yup
//     .string()
//     .min(2, "Name has to be a minimum of 2 characters")
//     .required(),
// });

// const Pizza = () => {
//   const [buttonDisabled, setButtonDisabled] = useState(true);

//   const [pizza, setPizza] = useState({
//     pizzaSize: "",
//     sauce: "",
//     chicken: "",
//     beef: "",
//     cheese: "",
//     spinach: "",
//     special: "",
//     name: "",
//   });

//   const [error, setError] = useState({
//     pizzaSize: "",
//     sauce: "",
//     chicken: "",
//     beef: "",
//     cheese: "",
//     spinach: "",
//     special: "",
//     name: "",
//   });

//   const [post, setPost] = useState([]);

//   useEffect(() => {
//     formSchema.isValid(pizza).then((valid) => {
//       setButtonDisabled(!valid);
//     });
//   }, [pizza]);

//   const Order = (e) => {
//     e.preventDefault();
//     axios
//       .post("https://reqres.in/api/users", pizza)
//       .then((res) => {
//         setPost(res.data);

//         setPizza({
//           pizzaSize: "",
//           sauce: "",
//           chicken: "",
//           beef: "",
//           cheese: "",
//           spinach: "",
//           special: "",
//           name: "",
//         });
//       })
//       .catch((err) => console.log(err.res));
//   };

//   const validateChange = (e) => {
//     // Reach will allow us to "reach" into the schema and test only one part.
//     yup
//       .reach(formSchema, e.target.name)
//       .validate(e.target.value)
//       .then((valid) => {
//         setError({
//           ...error,
//           [e.target.name]: "",
//         });
//       })
//       .catch((err) => {
//         setError({
//           ...error,
//           [e.target.name]: err.error,
//         });
//       });
//   };

//   //setting state for my Post request (that submits form and returns a database record of name, pizza size, sauce, and special instructions)
//   const [post, setPost] = useState([]);

//   useEffect(() => {
//     formSchema.isValid(formState).then(valid => {
//       setButton(!valid);
//     });
//   }, [formState]);

//   const formSubmit = e => {
//     e.preventDefault();
//     axios
//       .post("https://reqres.in/api/pizza", formState)
//       .then(res => {
//         setPost(res.data);

//         setFormState({
//           name: "",
//           size: "",
//           // cheese: "",
//           // tomato: "",
//           // pepperoni: "",
//           // olives: "",
//           instructions: ""
//         });
//       })
//       .catch(err => console.log("You form was not submitted", err.response));
//   };

//   const inputChange = (e) => {
//     e.persist();
//     const newFormData = {
//       ...pizza,
//       [e.target.name]:
//         e.target.type === "checkbox" ? e.target.checked : e.target.value,
//     };
//     validateChange(e);
//     setPizza(newFormData);
//   };
//   return (
//     <div className="formWrapper">
//       <h2>Build Your Own Pizza</h2>

//       <form onSubmit={Order}>
//         <span className="pizzas">
//           <label className="size" htmlFor="pizzaSize" name="pizzaSize">
//             Choose your size
//             <select
//               id="pizzaSize"
//               name="pizzaSize"
//               onChange={inputChange}
//               data-cy="pizzaSize"
//             >
//               <option value="medium">Medium 12"</option>
//               <option value="large">Large 16"</option>
//               <option value="giant">Giant 20"</option>
//             </select>
//           </label>

//           <label className="sauce" htmlFor="sauce" name="sauce">
//             Choose your sauce
//             <select
//               id="sauce"
//               name="sauce"
//               onChange={inputChange}
//               data-cy="sauce"
//             >
//               <option value="original">Original Red</option>
//               <option value="garlic">Garlic Ranch</option>
//               <option value="bbq">BBQ Sauce</option>
//               <option value="alfredo">Alfredo Sauce</option>
//             </select>
//           </label>

//           <label htmlFor="chicken">
//             Chicken
//             <input
//               id="chicken"
//               type="checkbox"
//               name="chicken"
//               checked={pizza.chicken}
//               onChange={inputChange}
//               data-cy="chicken"
//             />
//           </label>

//           <label htmlFor="beef">
//             Beef
//             <input
//               id="beef"
//               type="checkbox"
//               name="beef"
//               checked={pizza.beef}
//               onChange={inputChange}
//               data-cy="beef"
//             />
//           </label>
//           <label htmlFor="cheese">
//             Cheese
//             <input
//               id="chesse"
//               type="checkbox"
//               name="cheese"
//               checked={pizza.cheese}
//               onChange={inputChange}
//               data-cy="cheese"
//             />
//           </label>
//           <label htmlFor="spinach">
//             Spinach
//             <input
//               id="spinach"
//               type="checkbox"
//               name="spinach"
//               checked={pizza.spinach}
//               onChange={inputChange}
//               data-cy="spinach"
//             />
//           </label>

//           <label htmlFor="special">
//             Any special instructions?
//             <textarea
//               id="special"
//               name="special"
//               value={pizza.special}
//               onChange={inputChange}
//               data-cy="special"
//             />
//           </label>

//           <label htmlFor="name">
//             Name
//             <input
//               name="name"
//               id="name"
//               placeholder="Enter Your Name Here"
//               value={pizza.name}
//               onChange={inputChange}
//               data-cy="name"
//             />
//           </label>
//           <pre>{JSON.stringify(post, null, 2)}</pre>

//           <button type="submit" data-cy="button">
//             Order
//           </button>
//         </span>
//       </form>
//     </div>
//   );
// };

// export default Pizza;

import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { Link } from "react-router-dom";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Please input a name")
    .min(2, "name must be more than 2 characters"),
  size: yup.string().required("must choose a pizza size"),
  cheese: yup.string(),
  tomato: yup.string(),
  pepperoni: yup.string(),
  olives: yup.string(),
  instructions: yup.string().required("must include special instructions"),
});

export default function Pizza() {
  //setting state to my Order button
  const [button, setButton] = useState(true);

  //setting a state for my Pizza form
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    cheese: "",
    tomato: "",
    pepperoni: "",
    olives: "",
    instructions: "",
  });

  //setting state for my erros
  const [errors, setErrors] = useState({
    name: "",
    size: "",
    // cheese: "",
    // tomato: "",
    // pepperoni: "",
    // olives: "",
    instructions: "",
  });

  //setting state for my Post request (that submits form and returns a database record of name, pizza size, sauce, and special instructions)
  const [post, setPost] = useState([]);

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setButton(!valid);
    });
  }, [formState]);

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/pizza", formState)
      .then((res) => {
        setPost(res.data);

        setFormState({
          name: "",
          size: "",
          // cheese: "",
          // tomato: "",
          // pepperoni: "",
          // olives: "",
          instructions: "",
        });
      })
      .catch((err) => console.log("You form was not submitted", err.response));
  };
  //TOPPINGS VALIDATE---------------------------
  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        console.log("err", err);
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  //TOPPINGS VALIDATE END------------------------

  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    validateChange(e);
    setFormState(newFormData);
  };

  //   // obtain reference to checkboxes named toppinFlavor[]
  //   const topppings = document.forms["pizzaForm"].elements["topppings[]"];

  //   //   You can loop through the list and attach an onclick handler to each checkbox with the following:
  //   // using reference to sports obtained above
  //   for (var i = 0, len = topppings.length; i < len; i++) {
  //     topppings[i].onclick = doSomething;
  //   }

  //   // access properties of checkbox clicked using 'this' keyword
  //   function doSomething() {
  //     if (this.checked) {
  //       // if checked ...
  //       alert(this.value);
  //     } else {
  //       // if not checked ...
  //     }
  //   }

  return (
    <form className="pizzaForm" onSubmit={formSubmit}>
      <h1>Build your pizza and submit your order!!</h1>
      <label htmlFor="name">
        Name:
        <input
          id="name"
          type="text"
          name="name"
          value={formState.name}
          onChange={inputChange}
        />
        {/* this error connects with the schema for the first error that i wrotte */}
        {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
      </label>
      <br />
      <label htmlFor="size">
        What size of pizza would you like?
        <select id="size" name="size" onChange={inputChange}>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
        </select>
      </label>
      <br />

      <p>Check the types of toppings that you would like:</p>

      <p>
        <label htmlFor="cheese">
          <input
            id="cheese"
            type="checkbox"
            name="cheese"
            checked={formState.cheese}
            onChange={inputChange}
          />
          cheese
        </label>
        <label htmlFor="tomato">
          <input
            id="tomato"
            type="checkbox"
            name="tomato"
            value="tomato"
            checked={formState.tomato}
            onChange={inputChange}
          />
          tomato
        </label>
        <label htmlFor="pepperoni">
          <input
            id="pepperoni"
            type="checkbox"
            name="pepperoni"
            value="pepperoni"
            checked={formState.pepperoni}
            onChange={inputChange}
          />
          pepperoni
        </label>
        <label htmlFor="olives">
          <input
            id="olives"
            type="checkbox"
            name="olives"
            value="olives"
            checked={formState.olives}
            onChange={inputChange}
          />
          olives
        </label>
      </p>

      <label htmlFor="instructions">
        Special Instructions:
        <textarea
          name="instructions"
          value={formState.instructions}
          onChange={inputChange}
        />
        {errors.instructions.length > 0 ? (
          <p className="error">{errors.instructions}</p>
        ) : null}
      </label>
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
      <br></br>
      <br></br>

      <button disabled={button}>Submit</button>
    </form>
  );
}
