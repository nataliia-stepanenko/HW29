import { memo } from "react";
import { Flex } from '@chakra-ui/react';
import { Button} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import {RiAddLine} from 'react-icons/ri';
import {GrFormSubtract} from 'react-icons/gr';

import useCounter from "../hooks/useCounter";

const Counter = () => {
    const {count, setCount, increment, decrement} = useCounter(1);

    const handleInputChange = (event) => {
        setCount(+event.target.value);
        if (+event.target.value < 1){
            setCount(1);
        };
    };

    const isDisabledButton = (count <= 1);

    return(
        <Flex m={4}>
            <Button px={1} colorScheme='gray' onClick={decrement} disabled={isDisabledButton}><GrFormSubtract size={26} /></Button>
            <Input mx={2} htmlSize={2} width='auto' value={count} onChange={handleInputChange}></Input>
            <Button px={1} colorScheme='gray' onClick={increment}><RiAddLine size={26} /></Button>
        </Flex>
    )
};

export default memo(Counter);