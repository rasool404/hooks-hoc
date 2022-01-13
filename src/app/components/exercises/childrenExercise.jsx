import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ChildrenExerciseCount>
                <Component />
                <Component />
                <Component />
            </ChildrenExerciseCount>
        </CollapseWrapper>
    );
};

const ChildrenExerciseCount = ({ children }) => {
    console.log(children);

    return React.Children.map(children, (child, index) => {
        const config = {
            ...child.props,
            orderNum: index + 1
        };

        return React.cloneElement(child, config);
    });
};

const Component = ({ orderNum }) => {
    return <div>{orderNum + ". Компонент списка"}</div>;
};
Component.propTypes = {
    orderNum: PropTypes.number
};

ChildrenExercise.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ChildrenExercise;
