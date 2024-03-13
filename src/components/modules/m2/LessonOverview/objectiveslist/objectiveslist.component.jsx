import React from "react";
import ListItem from "../../checkbox/checkbox.component";
//takes a list of list items and then produces a react component 

import { Heading, ListItemsWrapper, Wrapper } from "./objectiveslist.styles";

export const ObjectivesList = ({listitems,title}) => {
    return (
        <div>
            <Wrapper>

                <Heading>
                {title}
                </Heading>

                <ListItemsWrapper>
                    {listitems.map(item => <ListItem item={item} />)}


                </ListItemsWrapper>
            
            
            </Wrapper>
           
        </div>
    )
}