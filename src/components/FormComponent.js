import React from 'react';

const FormComponent = ({handleRemove}) => {

    function handleClick(){
        handleRemove();
    }
    

    return(
        <div>
            <input type='text' placeholder='Name' />
            <input type='number' placeholder='Age'/>
            <button onClick={handleClick}>Remove</button>
        </div>
    )
}

export default FormComponent;

// import React from 'react';

// const FormComponent = ({ handleRemove }) => {
//   const handleClick = () => {
//     handleRemove();
//   };

//   return (
//     <div>
//       <input type='text' placeholder='Name' />
//       <input type='number' placeholder='Age' />
//       <button onClick={handleClick}>Remove</button>
//     </div>
//   );
// };

// export default FormComponent;
