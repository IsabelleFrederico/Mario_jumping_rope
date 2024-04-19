import * as React from "react";
import * as S from './Style'

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: 1,
        2: 2,
        3: 3,
        4: 4
    };

    return (
        <S.ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </S.ColorlibStepIconRoot>
    );
}

export default ColorlibStepIcon