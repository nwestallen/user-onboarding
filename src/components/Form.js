//Form component
import React, { useState } from 'react';
import styled from 'styled-components';

const UserForm = styled.form`
display: flex;
flex-flow: column nowrap;
width: 300px;
margin: auto;
align-items: center;
border: 2px solid black;
padding: 40px 0;

button {
    width: 200px;
    margin-top: 10px;
}
`;

const Form = (props) => {

    const { users, setUsers } = props;
    const [ newUser, setNewUser ] = useState({name: '', email: '', acceptedTerms:false});

    const handleChange = event => {
        const update = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setNewUser({...newUser, [event.target.name]: update});
    }

    return(
        <UserForm>
            <p>
                <label htmlFor='nameInput'>Name: </label>
                <input id='nameInput' type='text' name='name' value={newUser.name} onChange={handleChange}  />
            </p>
            <p>
                <label htmlFor='emailInput'>Email: </label>
                <input id='emailInput' type='text' name='email' value={newUser.email} onChange={handleChange} />
            </p>
            <p>
                <label htmlFor='tos'>Agree to Terms of Service</label>
                <input id='tos' type='checkbox' name='acceptedTerms' checked={newUser.acceptedTerms} onChange={handleChange}/>
            </p>
            <button>Submit</button>
        </UserForm>
    )
}

export default Form;