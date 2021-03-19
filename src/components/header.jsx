import React from 'react';
import styled from 'styled-components';

const SHeader = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    padding-left: 12%;
    width: 100%;
    height: 56px;
    border-bottom: 1px solid #e8e8e8;

    h1 {
        position: relative;
        top: -2px;
        margin-bottom: 0px;
        font-size: 22px;
        font-weight: 600;
        line-height: 30px;
        height: 24px;
    }
`

export default function Header() {
    return <SHeader>
        <h1>BROCCOLI & CO.</h1>
    </SHeader>
}
