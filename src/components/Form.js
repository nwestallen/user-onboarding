//Form component
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

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

.error {
    color: red;
}
`;

const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .required('Must include name'),
    email: Yup
        .string()
        .required('Must include email')
        .email('Must be valid email address'),
    acceptedTerms: Yup
        .boolean()
        .oneOf([true], 'You must accept the Terms and Conditions')
});

const Form = (props) => {

    const { users, setUsers } = props;
    const [ newUser, setNewUser ] = useState({name: '', email: '', acceptedTerms:false});
    const [disabled, setDisabled] = useState(true);
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        acceptedTerms: ''
    });
    const setFormErrors = (name, value) => {
        Yup.reach(formSchema, name).validate(value)
            .then(() => setErrors({...errors, [name]: ''}))
            .catch(err => setErrors({...errors, [name]: err.errors[0]}))
    };

    useEffect(() => {
        formSchema.isValid(newUser).then(valid => {
            setDisabled(!valid);
        })
    }, [newUser])

    const handleChange = event => {
        const update = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setFormErrors(event.target.name, update)
        setNewUser({...newUser, [event.target.name]: update});
    };

    return(
        <UserForm>
            <p>
                <label htmlFor='nameInput'>Name: </label>
                <input id='nameInput' type='text' name='name' value={newUser.name} onChange={handleChange}  />
                {errors.name.length > 0 && <p class='error'>must include name</p>}
            </p>
            <p>
                <label htmlFor='emailInput'>Email: </label>
                <input id='emailInput' type='text' name='email' value={newUser.email} onChange={handleChange} />
                {errors.email.length > 0 && <p class='error'>must include valid email</p>}
            </p>
            <p>
                <label htmlFor='tos'>Agree to Terms of Service</label>
                <input id='tos' type='checkbox' name='acceptedTerms' checked={newUser.acceptedTerms} onChange={handleChange}/>
                {errors.acceptedTerms.length > 0 && <p class='error'>must accept terms and conditions</p>}
            </p>
            <button disabled={disabled}>Submit</button>
        </UserForm>
    )
}

export default Form;