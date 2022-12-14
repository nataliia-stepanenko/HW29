import { memo, useCallback } from "react";
import { Flex } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/react';

import useCounter from "../hooks/useCounter";

const initialValue = 1;

const Counter = () => {
    const {count, setCount, increment, decrement} = useCounter(initialValue);

    const handleInputChange = useCallback ( (event) => {
        setCount(+event.target.value);
        if ( event.target.value !== "" && event.target.value < initialValue ){
            setCount(1);
        };
    }, []);

    const isDisabledButton = (count <= initialValue);

    return(
        <Flex m={4}>
            <IconButton px={1} colorScheme='gray' onClick={decrement} disabled={isDisabledButton} icon={<MinusIcon />}/>
            <Input mx={2} htmlSize={2} width='auto' value={count} onChange={handleInputChange}></Input>
            <IconButton px={1} colorScheme='gray' onClick={increment} icon={<AddIcon />}/>
        </Flex>
    )
};

export default memo(Counter);