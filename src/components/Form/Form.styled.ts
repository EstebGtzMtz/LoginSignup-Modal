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
        .error-icon{
            position: absolute;
            right: 4.625rem;
            top: 1.4rem;
            color: #CD6D6D;
            width: 1.5rem;
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
        margin: 1rem 0;
        .content{
            width: 84%;
            a{
                text-decoration: none;
                color: #139490;
                font-size: 1rem;
            }
        }
    }

    .forgot-password{
        cursor: pointer;
        font-size: 0.9rem;
        color: #666;
        text-align: center;
        margin: 1rem 0;
        text-decoration: underline;
        
    }

    .error-message-container{
        display: flex;
        justify-content: center;
        .error-description{
            text-align: left;
            width: 76%;
            color: #CD6D6D;
            font-size: 0.8rem;
        }
    }
`