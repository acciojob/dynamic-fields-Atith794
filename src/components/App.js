
// import React,{useState} from "react";
// import './../styles/App.css';
// import FormComponent from "./FormComponent";

// const App = () => {
//   const[addMore,setAddmore] = useState(false);

//   // function handleClick(){
//   //   addMore = true;
//   // }
//   function resetAddmore(){
//     setAddmore(false);
//   }

//   return (
//     <div>
//         {/* Do not remove the main div */}
//         <form>
//           <FormComponent />
//           {
//             addMore?
//               <>
//             <FormComponent/>
//             {/* resetAddmore(); */}
//             </>:""
//           }
//           <button onClick={() => setAddmore(true)}>Add More</button>
//           <button type='submit'>Submit</button>
//         </form>
//     </div>
//   )
// }

// export default App


// import React, { useState } from "react";
// import './../styles/App.css';
// import FormComponent from "./FormComponent";

// const App = () => {
//   const [addMore, setAddmore] = useState(false);

//   function resetAddmore() {
//     setAddmore(false);
//   }

//   return (
//     <div>
//       {/* Do not remove the main div */}
//       <form>
//         <FormComponent />
//         {addMore && <FormComponent />}
//         <button onClick={() => setAddmore(true)}>Add More</button>
//         <button type='submit'>Submit</button>
//         <button onClick={resetAddmore}>Reset</button>
//       </form>
//     </div>
//   )
// }

// export default App;

// import React, { useState } from "react";
// import './../styles/App.css';
// import FormComponent from "./FormComponent";

// const App = () => {
//   const [formComp, setFormComp] = useState([{key:1,component:<FormComponent key={1} handleRemovee={() => handleRemove(formKey)} />}]);
//   const formKey = formComp.length+1;


//   function handleAddMore() {
//     setFormComp(
//      [...formComp, {key:formKey,component:<FormComponent key={formKey} handleRemovee={() => handleRemove(formKey)}/>}]
//     );
//   }

//   function handleRemove(keyToRemove){
//     const newformComp = formComp.filter((item)=>item.key !== keyToRemove);
//     setFormComp(newformComp);
//   }

//   return (
//     <div>
//       <form>
//         {formComp.map(({key,component})=>(
//           <div key={key}>
//             {component}
//           </div>
//           ))}

//         {/* {addMore && <FormComponent />} */}
//         <button type='button' onClick={handleAddMore}>
//           Add More
//         </button>
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App;

// import React, { useState } from "react";
// import './../styles/App.css';
// import FormComponent from "./FormComponent";

// const App = () => {
//   const [formComponents, setFormComponents] = useState([{ key: 1 }]);

//   const handleAddMore = () => {
//     const nextKey = formComponents.length + 1;
//     setFormComponents([...formComponents, { key: nextKey }]);
//   };

//   const handleRemove = (keyToRemove) => {
//     const updatedFormComponents = formComponents.filter((component) => component.key !== keyToRemove);
//     setFormComponents(updatedFormComponents);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = {}; 

    
//     formComponents.forEach(({ key }) => {
//       const formElement = document.getElementById(`form-${key}`);
//       formData[`Name-${key}`] = formElement.querySelector('input[type="text"]').value;
//       formData[`Age-${key}`] = formElement.querySelector('input[type="number"]').value;
//     });

//     console.log("Form Data:", formData); 

//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {formComponents.map(({ key }) => (
//           <div key={key}>
//             <FormComponent handleRemove={() => handleRemove(key)} />
//           </div>
//         ))}
//         <button type='button' onClick={handleAddMore}>
//           Add More
//         </button>
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import './../styles/App.css';
import FormComponent from "./FormComponent";

const App = () => {
  const [formComponents, setFormComponents] = useState([{ key: 1 }]);

  const handleAddMore = () => {
    const nextKey = formComponents.length + 1;
    setFormComponents([...formComponents, { key: nextKey }]);
  };

  const handleRemove = (keyToRemove) => {
    const updatedFormComponents = formComponents.filter((component) => component.key !== keyToRemove);
    setFormComponents(updatedFormComponents);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = {}; // Object to hold form data

    // Loop through each form component and collect data
    formComponents.forEach(({ key }) => {
      const formElement = document.getElementById(`form-${key}`);
      formData[`Name-${key}`] = formElement.querySelector('input[type="text"]').value;
      formData[`Age-${key}`] = formElement.querySelector('input[type="number"]').value;
    });

    console.log("Form Data:", formData); // Log the collected form data
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {formComponents.map(({ key }) => (
          <div key={key} id={`form-${key}`}>
            <FormComponent handleRemove={() => handleRemove(key)} />
          </div>
        ))}
        <button type='button' onClick={handleAddMore}>
          Add More
        </button>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default App;

