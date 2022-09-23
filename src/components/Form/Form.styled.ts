import styled from "styled-components";

export const FormContainer = styled.div`

    .login-signup-form{
        display: flex;
        flex-direction:column;
    }

    .embed-submit-field {
        position: relative;
        input {
            width: 92%;
            padding: 15px;
        }
        button {
            position: absolute;
            right: 0.625rem;
            top: 0.813rem;
            border: none;
            background-color: white;
            text-decoration: underline;
            cursor: pointer;
        }
`