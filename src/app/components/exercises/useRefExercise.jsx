import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    const textBlock = useRef(null);
    const divBlock = useRef(null);

    const textAndPropsWithClickButton = () => {
        divBlock.current.style.width = 80 + "px";
        divBlock.current.style.height = 150 + "px";
        textBlock.current.textContent = "text";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={divBlock}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small ref={textBlock}>Блок</small>
            </div>
            <button
                onClick={textAndPropsWithClickButton}
                className="btn btn-primary mt-3"
            >
                Изменить ширину и высоту блока
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
