import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import { FilePlus } from 'lucide-react';
import Link from "next/link";
import { db } from '@/db';
import { Invoices } from "@/db/schema";
//import { format } from 'date-fns';






export default async function Home() {
    const results = await db.select().from(Invoices);
    console.log(results);
    return (
        <main className=" flex flex-col justify-center h-full gap-6 text-center max-w-5xl mx-auto my-12">
            <div className="flex justify-between">
                <h1 className="text-3xl  font-semibold">
                    Invoices
                </h1>
                <p>
                    <Button className="inline-flex gap-2" variant="ghost" asChild>
                        <Link href="/invoices/new">
                            <FilePlus className="h-4 w-4" />
                            Create Invoice
                        </Link>
                    </Button>
                </p>
            </div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] p-4">
                            Date
                        </TableHead>
                        <TableHead className="p-4">
                            Customer
                        </TableHead>
                        <TableHead className="p-4">
                            Email
                        </TableHead>
                        <TableHead className="text-center p-4">
                            Status
                        </TableHead>
                        <TableHead className="text-right p-4">
                            Value
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {results.map(result => {
                        return (
                            <TableRow key={result.id}>
                                <TableCell className="font-medium text-left">
                                    <Link href={`/invoices/${result.id}`} className="font-semibold  p-4">
                                        {
                                            new Date(result.createTimestamp).toLocaleDateString()
                                        }
                                    </Link>
                                </TableCell>
                                <TableCell className="text-left">
                                    <Link href={`/invoices/${result.id}`} className="p-4 font-semibold">
                                        Alex
                                    </Link>
                                </TableCell>
                                <TableCell className="text-left">
                                    <Link className="p-4" href={`/invoices/${result.id}`}>
                                        alex@gmail.com
                                    </Link>
                                </TableCell>
                                <TableCell className="text-center">
                                    <Link className="p-4" href={`/invoices/${result.id}`}>
                                        <Badge variant="outline" className="rounded-full bg-slate-300">
                                            {result.status}
                                        </Badge>
                                    </Link>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Link href={`/invoices/${result.id}`} className=" p-4 font-semibold">${(result.value / 100).toFixed(2)}</Link>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </main>
    );
}
