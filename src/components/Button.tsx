import { Button } from '@chakra-ui/react'

interface ButtonFn {
    login: () => void
}

export const ButtonComponent = ({ login }: ButtonFn) => {
    return (
        <Button onClick={login} colorScheme='teal' size='md' width='100%' marginTop='20px'>
            Login
        </Button>
    )
}