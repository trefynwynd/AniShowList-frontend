import React, { useState } from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './globalStyles'
import Modal from './modal'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 29vh;
`
const Button = styled.div`
    min-width: 50px;
    padding: 1px 1px;
    border-radius: 4px;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
`
const SearchItem = ({ search }) => {
    console.log(search)

    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    return (
        <div className='img-container'>
            <Container>
                <Button onClick={openModal}>
                    <img src={search.image_url} alt="" />
                </Button>
                <Modal showModal={showModal} setShowModal={setShowModal}
                />
                <GlobalStyle />
            </Container>
        </div>
    )
}


export default SearchItem
