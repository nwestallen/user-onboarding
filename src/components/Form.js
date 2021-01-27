//Form component
import React from 'react';
import styled from 'styled-components';

const Form = (props) => {

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

    return(
        <UserForm>
            <p>
                <label for='nameInput'>Name: </label>
                <input id='nameInput' type='text' />
            </p>
            <p>
                <label for='emailInput'>Email: </label>
                <input id='emailInput' type='text' />
            </p>
            <p>
                <label for='tos'>Agree to Terms of Service</label>
                <input id='tos' type='checkbox' />
            </p>
            <button>Submit</button>
        </UserForm>
    )
}

export default Form;