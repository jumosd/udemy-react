import React, { useState } from 'react';
import TabButton from '../TabButton';
import { EXAMPLES } from '../../data';
import Section from '../Section';
import Tabs from '../Tabs';
const Examples = () => {
    const [selectedTopic, setSelectedTopic] = useState("")
    const handleSelect = (selectButton) => {
        setSelectedTopic(selectButton)
    }

    let tabContent = <p>please select a topic</p>
    if (selectedTopic) {
        tabContent = <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>
    }
    return (
        <>
            <Section title={Examples} id='examples'>
                <Tabs
                    buttonContainer="menu"
                    button={
                        <>
                            <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect("components")}>Component</TabButton>
                            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect("jsx")}>JSX</TabButton>
                            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect("props")}>Pros</TabButton>
                            <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect("state")}>State</TabButton>
                        </>}>
                    {tabContent}
                </Tabs>

            </Section>
        </>
    );
};

export default Examples;