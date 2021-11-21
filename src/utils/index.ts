import { Sex, ActivityLevel } from '../data';

type Args = {
    weight: number;
    height: number;
    age: number;
    sex: Sex;
    activityLevel: ActivityLevel;
}

export function calculateRequiredCalories({ weight, height, age, sex, activityLevel, }: Args) {
    
    const activityLevelCoefficient = {
        [ActivityLevel.VeryLow]: 1.2,
        [ActivityLevel.Low]: 1.375,
        [ActivityLevel.Medium]: 1.55,
        [ActivityLevel.High]: 1.725,
        [ActivityLevel.VeryHigh]: 1.9,
    };

    return (10 * weight + 6.25 * height - 5 * age + (sex === Sex.m ? 5: -121)) * activityLevelCoefficient[activityLevel];
}
