import React, { useRef, useState } from "react";
import ModuleNavElement from './mNavElement.component';



const ModuleNav = ({topics}) => {
    const topicRefs = useRef(topics.map(() => React.createRef())); // Create refs using React.createRef()
    const [activeOption, setActiveOption] = useState(topicRefs.current[0].current);

    const handlePageChange = (ref) => {
        setActiveOption(ref.current);
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <section className="m-nav">
                <ul>
                {topics.map((topic, index) => (
                        <ModuleNavElement
                            key={index}
                            isActive={activeOption === topicRefs.current[index].current}
                            onClick={() => handlePageChange(topicRefs.current[index])}
                            to="#"
                        >
                            {topic}
                        </ModuleNavElement>
                    ))}
                </ul>
        </section>
    );
}

export default ModuleNav;