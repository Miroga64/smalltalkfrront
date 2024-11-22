import { useState } from "react"

const useTest = () => {
    const [isTest, setIsTest] = useState(false);
    console.log('useTest:', isTest)

    return {isTest, setIsTest}
}

export default useTest