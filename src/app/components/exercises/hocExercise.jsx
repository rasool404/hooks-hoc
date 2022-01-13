import React from "react";

import CollapseWrapper from "../common/collapse";
import CardWrapper from "../common/Card";
import Divider from "../common/divider";
import SmallTitle from "../common/typografy/smallTitle";
import SimpleComponent from "./hocEx/simpleComponent";
import withPropsCardWrapper from "./hocEx/withPropsCardWrapper";
import withAuth from "./hocEx/withAuth";
import withFunc from "./hocEx/withFunc";

const HocExercise = () => {
    const ComponentWithPropsCardWrapper = withPropsCardWrapper(SimpleComponent);
    const ComponentWithAuth = withAuth(SimpleComponent);
    const ComponentWithAuthAndFunc = withFunc(ComponentWithAuth);

    return (
        <>
            <CollapseWrapper title="Упражнение">
                <p className="mt-3">
                    Вам необходимо реализовать компонент{" "}
                    <code>SimpleComponent</code>, который:
                </p>
                <ul>
                    <li>
                        Имеет параметры:<code>onLogin</code>,{" "}
                        <code>onLogOut</code>, <code>isAuth</code>
                    </li>
                    <li>
                        Отображайте кнопку <code>Войти</code>, если пользователь
                        НЕ авторизован.
                    </li>
                    <li>
                        Отображает кнопку с содержанием{" "}
                        <code>Выйти из системы</code>, если пользователь
                        авторизован.
                    </li>
                    <li>
                        При нажатии на кнопки вызываются методы{" "}
                        <code>onLogin</code> и <code>onLogOut</code>
                    </li>
                </ul>
                <p className="mt-3">
                    Вам необходимо <code>HOC</code>, который модицифицует
                    компонент <code>SimpleComponent</code> следующим образом:
                </p>
                <ul>
                    <li>
                        Добавляет обертку в виде карточки boostrap (использовать
                        существующий HOC)
                    </li>
                    <li>
                        Передает параметр <code>isAuth</code>, который является
                        результатом проверки наличия записи с названием{" "}
                        <code>user</code> в <code>localStorage</code>
                    </li>
                    <li>
                        Передает параметр <code>onLogin</code> и{" "}
                        <code>onLogOut</code> для управления записью с названием{" "}
                        <code>user</code> в <code>localStorage</code>
                    </li>
                </ul>
            </CollapseWrapper>
            <CardWrapper>
                <SmallTitle>Обертка</SmallTitle>
                <Divider />
                <ComponentWithPropsCardWrapper />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Auth + Func</SmallTitle>
                <Divider />
                <ComponentWithAuthAndFunc />
            </CardWrapper>
        </>
    );
};

export default HocExercise;
