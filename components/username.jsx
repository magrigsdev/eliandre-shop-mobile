import { Text } from "react-native"


export const Parent = ({value}) => {
    return (<> {value} </>)
}

export const Child = () => {
    return (<Parent value = {value} />)
}