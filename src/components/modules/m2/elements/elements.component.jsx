import React, { useState } from 'react';


const RelationshipElement = ({ title, content }) => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <li onClick={handleToggle}>
            <strong>{title}</strong>
            {expanded && <p>{content}</p>}
        </li>
    );
};

const RelationshipNavigator = () => {
    return (
        <div>
            <h2>Navigating Relationships and Dating Culture as an Immigrant Woman</h2>
            <p>
                How does one navigate relationships and dating culture? This question
                can become even more critical when you are a young immigrant woman.
            </p>
            <p>
                To begin, let’s consider what it means to be in a safe and healthy
                relationship.
            </p>
            <ul>
                <RelationshipElement
                    title="Honesty"
                    content="Honesty is the foundation of any healthy relationship. It involves being truthful and transparent with your partner, and being able to communicate openly without fear of judgment or reprisal."
                />
                <RelationshipElement
                    title="Trust"
                    content="Trust is essential for building a strong connection with your partner. It means relying on each other and believing that your partner has your best interests at heart."
                />
                <RelationshipElement
                    title="Respect"
                    content="Respect is treating your partner with kindness, empathy, and consideration. It involves valuing their opinions, boundaries, and autonomy."
                />
            </ul>
        </div>
    );
};

export default RelationshipNavigator;
