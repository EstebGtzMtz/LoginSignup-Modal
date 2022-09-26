import styled from "styled-components";

export const FormContainer = styled.div`

    .login-signup-form{
        display: flex;
        flex-direction:column;
    }

    .embed-submit-field {
        position: relative;
        input {
            margin-top: 1rem;
            width: 70%;
            padding: 0.75rem;
        }
        button {
            position: absolute;
            right: 4.625rem;
            top: 1.813rem;
            border: none;
            background-color: white;
            text-decoration: underline;
            cursor: pointer;
            color: #08646C;
        }
    }

    .form-button{
        width: 77%;
        margin-top: 0.5rem;
        border: 1px solid #ff5859;
        color: #fff;
        background-color: #ff5859;
        font-weight: 700;
        height: 2rem;
        font-size: 1rem;
        cursor: pointer;
    }

    .form-button: hover {
        background-image: linear-gradient(rgb(0 0 0/40%) 0 0)
    }

    .privacy-and-terms{
        display: flex;
        justify-content:center;
        font-size: 0.9rem;
        margin: 1rem;
        .content{
            width: 77%;
            a{
                text-decoration: none;
                color: #139490;
                font-size: 1rem;
            }
        }
    }

    a{
        cursor: pointer;
        font-size: 0.9rem;
        color: #666;
        text-align: center;
        margin-top: 1rem;
        text-decoration: underline;
        
    }
`