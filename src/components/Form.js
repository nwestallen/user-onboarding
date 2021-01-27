//Form component
import React from 'react';
import styled from 'styled-components';

const Form = (props) => {

    const UserForm = styled.form`
        display: flex;
        flex-flow: column nowrap;
        width: 400px;
        margin: auto;
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
        </UserForm>
    )
}

export default Form;