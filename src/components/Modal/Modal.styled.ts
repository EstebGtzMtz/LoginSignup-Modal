import styled from 'styled-components';

export const ModalContainer =  styled.div`
    font-family: Helvetica;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items:center;
    justify-content: center;

    .modal-header{
        margin: 2rem 1rem 0;
    }


    .modal-title{
        font-size: 2rem;
        font-weight: bold;
    }

    .modal-content{
        width:31.25rem;
        background-color: #fff;
        font-size:2rem;
    }

    .modal-body{
        padding: 0.625rem;
    }

    .modal-footer{
        cursor: pointer;
        padding: 1rem;
        background-color: #18b9b4;
        display: flex;
        align-items: center;
        justify-content:center;
        a{
            color: #fff;
            font-size: 1rem;
        }
    }
`