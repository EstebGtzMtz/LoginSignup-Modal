import styled from 'styled-components';

export const ModalContainer =  styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items:center;
    justify-content: center;

    .modal-content{
        width:31.25rem;
        background-color: #fff;
    }

    .modal-header, .modal-footer{
        padding: 0.625rem;
    }

    .modal-body{
        padding: 0.625rem;
    }
`