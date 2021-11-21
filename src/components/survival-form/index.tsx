import React from "react";

import { UseFormReturn, Controller } from "react-hook-form";
import { Input, Select, Radio, Form } from 'antd';
import { ActivityLevel, Sex } from '../../data';


type Props = {
    form: UseFormReturn;
}

export const SurvivalForm: React.FC<Props> = ({ form: { register, setValue , control } }) => {
    
    const onSubmit = (data: any) => console.log(data);


    return (
        <Form layout="vertical">
            {/* register your input into the hook by invoking the "register" function */}

            <Form.Item label="пол">
                <Radio.Group defaultValue={Sex.m} {...register('sex')}>
                    <Radio value={ Sex.m }>М</Radio>
                    <Radio value={ Sex.f }>Ж</Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item label="Масса тела">
                <Controller
                    defaultValue={ 52 }
                    control={ control }
                    name="weight"
                    render={
                        ({
                            field,
                        }) => <Input {...field} type="number"/>
                    }
                />
            </Form.Item>

            <Form.Item label="Рост">
                <Controller
                    defaultValue={ 170 }
                    control={ control }
                    name="height"
                    render={
                        ({
                            field,
                        }) => <Input {...field} type="number"/>
                    }
                />
            </Form.Item>

            <Form.Item label="Возраст">
                <Controller
                    defaultValue={ 18 }
                    control={ control }
                    name="age"
                    render={
                        ({
                            field,
                        }) => <Input {...field} type="number"/>
                    }
                />
            </Form.Item>

            <Form.Item label="Уровень физической активности">
                <Controller
                    defaultValue={ ActivityLevel.Low }
                    control={ control }
                    name="height"
                    render={
                        ({
                            field,
                        }) => (
                            <Select {...field} >
                                <Select.Option value={ ActivityLevel.VeryLow }>Только сплю</Select.Option>
                                <Select.Option value={ ActivityLevel.Low }>Иногда выхожу из дома</Select.Option>
                            </Select>
                        )
                    }
                />
                
            </Form.Item>
            
            <Form.Item label="На сколько выживаю">
                <Input defaultValue="test" {...register("survivalAmount")} />
            </Form.Item>

            <Input defaultValue="test" {...register("typeOfMeal")} />

            <Input defaultValue="test" {...register("additionalMealSource")} />
            
            {/* include validation with required or other standard HTML validation rules */}
            <Input {...register("exampleRequired", { required: true })} />

            <input type="submit" />
        </Form>
    );
};
