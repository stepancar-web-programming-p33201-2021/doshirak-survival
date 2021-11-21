import React from "react";
import { useForm } from "react-hook-form";

import { SurvivalForm } from '../../components/survival-form';
import { SurvivalResult } from '../../components/survival-result';
import { Sex, ActivityLevel } from '../../data';

export const MainPage = () => {
    const form = useForm({
        defaultValues: {
            sex: Sex.m,
            weight: 50,
            height: 170,
            age: 18,
            activityLevel: ActivityLevel.Low
        }
    });
    return(
        <div>
            <h1>Главная</h1>

            <SurvivalForm form={ form as any } />
            <SurvivalResult form={ form as any } />
        </div>
    );
}

