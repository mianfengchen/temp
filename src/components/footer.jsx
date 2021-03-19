import React from 'react';
import styled from 'styled-components';

const SFooter = styled.div`
    display: flex;
    align-item: center;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 64px;
    border-top: 1px solid #e8e8e8;

    p {
        margin: 0;
        font-size: 12px;
        line-height: 20px
        color: #fff;
        text-align: center;
    }
`

export default function Footer() {
    return <SFooter>
        <p>Made with ♥ in Melbourne</p>
        <p>© 2016 Broccoi & Co. All rights reserved.</p>
    </SFooter>
}
