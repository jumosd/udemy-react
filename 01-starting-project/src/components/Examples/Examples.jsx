import React, { useState } from 'react';
import TabButton from '../TabButton';
import { EXAMPLES } from '../../data';
import Section from '../Section';
const Examples = () => {
    const [selectedTopic, setSelectedTopic] = useState("")
    const handleSelect = (selectButton) => {
        setSelectedTopic(selectButton)
    }
    return (
        <>
            <Section title={Examples} id='examples'>
                <menu>
                    <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>Component</TabButton>
                    <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>Pros</TabButton>
                    <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
                </menu>
            </Section>
            {!selectedTopic && <p>please select a topic</p>}
            {selectedTopic &&
                <div id='tab-content'>
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>
                            {EXAMPLES[selectedTopic].code}
                        </code>
                    </pre>
                </div>}
        </>
    );
};

export default Examples;