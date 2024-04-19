import React, { useContext } from 'react';
import * as S from './Style'
import * as UI from './StyleUI'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { steps } from '../../../Constants/inputs'
import ColorlibStepIcon from '../../../Components/Steps/IconStep/Steps';
import StepThree from './Steps/StepThree/StepThree';
import StepOne from './Steps/StepOne/StepOne';
import StepTwo from './Steps/StepTwo/StepTwo';
import GlobalStateContext from '../../../Global/GlobalStateContext';


function FormPage() {
    let { setters, states } = useContext(GlobalStateContext)

    const Steps = () => {
        return (
            <Stepper alternativeLabel activeStep={states.step} connector={<UI.ColorlibConnector />}>
                {steps.map((label) => (
                    <Step key={label.step} onClick={() => {setters.setStep(states.step - 1)}}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label.name}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        );
    };

    return (
        <S.ContainerAll>
            <S.Container>
                <Steps />
                {states.step === 0 ?
                    <StepOne />
                    : states.step === 1 ? (
                        <StepTwo />
                    ) : states.step === 2 ? (
                        <StepThree />
                    ) : <></>}
            </S.Container >
        </S.ContainerAll >
    );
}

export default FormPage;