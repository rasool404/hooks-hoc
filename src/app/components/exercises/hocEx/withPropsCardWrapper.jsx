import React from "react";
import CardWrapper from "../../common/Card";

const withPropsCardWrapper = (Component) => (props) => {
    return (
        <CardWrapper>
            <Component {...props} />
        </CardWrapper>
    );
};

export default withPropsCardWrapper;
