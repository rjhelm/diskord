import React, { useState } from "react";
import { Plus } from '@styled-icons/bootstrap';
import { ChevronRight } from '@styled-icons/boxicons-regular';
import styled from "styled-components";

import Channel from './Channel';

const mockChannels = [
    { name: "General1" },
    { name: "General2" },
    { name: "General3" },
    { name: "General4" },
    { name: "General 5" },
    { name: "General 6" },
    { name: "General 7" },
    { name: "General8" },
    { name: "Normal 9" },
];

const ChannelList = () => {
    const [isExpandChannels, setIsExpandChannels] = useState(false);
    const [currentChannelName, setCurrentChannelName] = useState(mockChannels[0].name);

    const handleClickChannelSection = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsExpandChannels(!isExpandChannels);
    };
    const selectChannel = (channel: string) => {
        setCurrentChannelName(channel);
    };

    return (
        <>
            <SectionHeader onClick={handleClickChannelSection}>
                <SectionExpandButton expand={isExpandChannels}>
                    <ChevronRight size="30" />
                </SectionExpandButton>
                <SectionLabel>
                    Chat Channel
                </SectionLabel>
                <SectionChannelAddButton>
                    <Plus size="35" />
                </SectionChannelAddButton>
            </SectionHeader>

            <ul>
                {mockChannels.map((channel, idx) => {
                    const { name } = channel;
                    const isSelected = name === currentChannelName;
                    if (isExpandChannels && !isSelected) {
                        return null;
                    } else {
                        return (
                            <Channel
                                key={idx}
                                isSelected={isSelected}
                                name={name}
                                onSelectChannel={selectChannel}
                            />
                        );
                    }
                })}
            </ul>
        </>
    );
};

const SectionHeader = styled.div`
 display: flex;
 align-items: center;
 margin-top: 30px;
 margin-left: 5px;
 margin-right: 15px;
 color: #73777d;
` ;

interface SectionExpandButtonProps {
    expand: boolean;
}

const SectionExpandButton = styled.div`
 font-weight: lighter;
 font-size: 20px;
transform: ${(prop: SectionExpandButtonProps) =>
        prop.expand ? "rotate(0turn)" : "rotate(0.25turn)"} ;
 transition: transform 0.3s ease-in-out;
` ;

const SectionLabel = styled.div`
 flex-grow: 1;
 font-weight: bold;
 font-size: 20px;
` ;

const SectionChannelAddButton = styled.div`
 cursor: pointer;
 font-weight: bold;
 font-size: 30px;
` ;

export default ChannelList;