"use client";

import NextError from 'next/error';

export default function error({error}: {error: Error}){
    return(
        <NextError statusCode={700} title={error.message} />
    )
}