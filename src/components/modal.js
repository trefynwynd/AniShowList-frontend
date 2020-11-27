import React from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchItem from './SearchItem'
import Search from './Search';

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`
const ModalImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
p {
    margin-bottom: 1rem;
}
button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
}
`;

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`


const Modal = ({ showModal, setShowModal }) => {

    return (
        <>
            { showModal ? (
                <Background>
                    <ModalWrapper showModal={showModal}>
                        <ModalContent>
                        <buttton><FavoriteIcon fontSize="large" /></buttton>
                        </ModalContent>
                        {Search}
                        <CloseModalButton
                            aria-label='Close modal'
                            onClick={() => setShowModal(prev => !prev)}
                        />
                    </ModalWrapper>
                </Background>
            ) : null}
        </>
    )
}

export default Modal