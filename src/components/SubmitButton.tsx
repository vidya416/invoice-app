"use client";

import { useFormStatus } from "react-dom";
import { Loader } from 'lucide-react';
import { Button } from "./ui/button"

const SubmitButton = () => {
    const { pending } = useFormStatus();
    console.log('pending', pending);
    return (
        <Button className="w-full font-bold relative">
            <span className={pending ? 'text-transparent': ""}>Submit</span>
            {pending && (
                <span className="items-center justify-center flex w-full h-full absolute text-gray-300">
                    <Loader className="animate-spin"/>
                </span>
            )}
        </Button>
    )
}


export default SubmitButton;