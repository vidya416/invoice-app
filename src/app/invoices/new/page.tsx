"use client";

import { Button } from "@/components/ui/button"
import Form from "next/form"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import SubmitButton from "@/components/SubmitButton"
import { Textarea } from "@/components/ui/textarea"
import { createAction } from "@/app/actions";
import { SyntheticEvent, useState, startTransition } from "react";
import Container from "@/components/Container";

export default function Home() {
    const [state, setState] = useState('ready');
    async function handleOnSubmit(event: SyntheticEvent) {
        if (state === 'pending') {
            event.preventDefault();
            return;
        }
        setState('pending');

    }
    return (
        <main className="h-full">
            <Container>
                <div className="flex justify-between">
                    <h1 className="text-3xl mb-6 font-semibold">
                        Create Invoice
                    </h1>
                </div>

                <Form action={createAction} onSubmit={handleOnSubmit} className="grid gap-6 max-w-xs">
                    <div>
                        <Label htmlFor="name" className="block mb-2 font-semibold text-sm">Billing Name</Label>
                        <Input id="name" name="name" type="text" />
                    </div>
                    <div>
                        <Label htmlFor="email" className="block mb-2 font-semibold text-sm">Billing Email</Label>
                        <Input id="email" name="email" type="email" />
                    </div>
                    <div>
                        <Label htmlFor="value" className="block mb-2 font-semibold text-sm">Value</Label>
                        <Input id="value" name="value" type="text" />
                    </div>
                    <div>
                        <Label htmlFor="description" className="block mb-2 font-semibold text-sm">Description</Label>
                        <Textarea id="description" name="description"></Textarea>
                    </div>
                    <div>
                        <SubmitButton />
                    </div>
                </Form>
            </Container>
        </main>
    );
}
