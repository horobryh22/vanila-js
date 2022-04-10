import React, {useState} from 'react';

export type ManType = {
    name: string
    age: number
    lessons: Array<{title: string; name?: string}>
    address: {
        street: {
            title: string
        }
    }
}

export type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

export const ManComponent: React.FC<PropsType> = ({title, man:{address:{street:{title: t}}}, ...props}) => { // все свойства, что мы не взяли из объекта сразу, останутся в props, благодаря записи {...props}

    const [message, setMessage] = useState<string>('hello');

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <h2>{t}</h2>
            {/*<h2>{props.}</h2>*/}
        </div>
    )
}