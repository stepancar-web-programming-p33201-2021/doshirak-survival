import React from "react";

import { UseFormReturn, useWatch } from "react-hook-form";

import { calculateRequiredCalories } from '../../utils';

type Props = {
    form: UseFormReturn;
};

export const SurvivalResult: React.FC<Props> = ({ form: { control, getValues }}) => {

    const weight = useWatch({ control, name: 'weight'});
    const height = useWatch({ control, name: 'height'});
    const age = useWatch({ control, name: 'age'});
    const activityLevel = useWatch({ control, name: 'activityLevel' });
    const sex = useWatch({ control, name: 'sex' });
    const requiredCalories = calculateRequiredCalories({
        weight,
        height,
        age,
        activityLevel,
        sex,
    });
    
    return (
        <div>
            <div>
                <span>
                    В день тебе нужно
                </span>
                <span>
                    { requiredCalories }
                </span>
            </div>

            <div>
                <span>
                    Можно купить упаковок доширака
                </span>
                <span>
                    111111
                </span>
            </div>

            <div>
                <span>
                    Ты сможешь "Нормально" существовать
                </span>
                <span>
                    111111
                </span>
            </div>

            <div>
                <span>
                    Станешь неработоспособным
                </span>
                <span>
                    7 дней
                </span>
            </div>

            <div>
                <span>
                    Умрешь через 38 дней
                </span>
                <span>
                    7 дней
                </span>
            </div>
        </div>
    );
};
