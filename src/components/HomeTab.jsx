import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
    width: 1376px;
    height: 48px;
    margin: 0 auto;
    padding-top: 12px;
    padding-bottom: 12px;
`;

const TabContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
`;

const Tab = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 100px;
    background: transparent;
    color: ${({ $active }) => ($active ? "#212529" : "#868e96")};    
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;

    svg {
        margin-right: 8px;
    }
`;

const Indicator = styled.div`
    position: absolute;
    bottom: 0;
    left: ${({ $index }) => `${$index * 100}px`};
    width: 100px;
    height: 2px;
    background: #212529;

    transition: left 0.2s ease;
`;

const Right = styled.div`
    position: relative;
    display: flex;
    width: 134px;
`;

const TabSelector = styled.div`
    background: #fff;
    height: 32px;
    width: 100px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 8px;
    padding-right: 8px;
    margin-right: 10px;
    font-weight: 600;
    color: #495057;
    font-size: 14px;
    box-shadow: 0 0 4px rgba(0, 0, 0, .05);
    cursor: pointer;
`;

const ExtraTap = styled.div`
    margin-top: 5px;
    cursor: pointer;
    color: #868e96;
`;

function HomeTab() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <Wrapper>
            <TabContainer>
            <Left>
                <Tab $active={activeTab === 0} onClick={() => setActiveTab(0)}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path>
                    </svg>
                    <span>트렌딩</span>
                </Tab>

                <Tab $active={activeTab === 1} onClick={() => setActiveTab(1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960" class="HomeTab_icon__oIs4L" height="1em" width="1em">
                        <path d="m489-460 91-55 91 55-24-104 80-69-105-9-42-98-42 98-105 9 80 69zm19 260h224q-7 26-24 42t-44 20L228-85q-33 5-59.5-15.5T138-154L85-591q-4-33 16-59t53-30l46-6v80l-36 5 54 437zm-148-80q-33 0-56.5-23.5T280-360v-440q0-33 23.5-56.5T360-880h440q33 0 56.5 23.5T880-800v440q0 33-23.5 56.5T800-280zm0-80h440v-440H360zM218-164"></path>
                    </svg>
                    <span>추천</span>
                </Tab>

                <Tab $active={activeTab === 2} onClick={() => setActiveTab(2)}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                        <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                    </svg>
                    <span>최신</span>
                </Tab>

                <Tab $active={activeTab === 3} onClick={() => setActiveTab(3)}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="6.18" cy="17.82" r="2.18"></circle>
                        <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"></path>
                    </svg>
                    <span>피드</span>
                </Tab>

                <Indicator $index={activeTab} />
            </Left>
            <Right>
                <TabSelector>
                    이번 주
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M7 10l5 5 5-5z"></path></svg>
                </TabSelector>
                <ExtraTap>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="HomeTab_extra__x0Vmq" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                </ExtraTap>
            </Right>
            
            </TabContainer>
        </Wrapper>
    );
}

export default HomeTab;