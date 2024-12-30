import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { db } from '@/db';
import { Invoices } from "@/db/schema";
import { cn } from '@/lib/utils';
import { eq } from 'drizzle-orm';







export default async function InvoicePage({ params }: { params: { invoiceID: string; } }) {
    const invoiceID = parseInt(params.invoiceID);

    if (isNaN(invoiceID)) {
        throw new Error ("Invalid Invoice ID")
    }

    const [result] = await db.select()
        .from(Invoices)
        .where(eq(Invoices.id, invoiceID))
        .limit(1)

    if (!result){
        notFound()
    }

    return (
        <main className="h-full max-w-5xl mx-auto my-12">
            <div className="flex justify-between mb-8">
                <h1 className="text-3xl flex items-center gap-6 font-semibold">
                    Invoice {invoiceID}
                    <Badge variant="outline" className={cn(
                        "rounded-full capitalize",
                        result.status === "open" && 'bg-blue-500',
                        result.status === "paid" && 'bg-green-600',
                        result.status === "ongoing" && 'bg-zinc-600',
                        result.status === "failed" && 'bg-red-500'
                    )}>
                        {result.status}
                    </Badge>
                </h1>
                <p>

                </p>
            </div>

            <p className='text-3xl mb-3'>
                ${(result.value / 100).toFixed(2)}
            </p>

            <p className='text-lg mb-8'>
                {result.description}
            </p>

            <h2 className='font-bold text-lg mb-4'>
                Billing Details
            </h2>

            <ul className='grid gap-2'>
                <li className='flex gap-4'>
                    <strong className='block w-28 flex-shrink-0 font-medium text-sm'>Invoice ID</strong>
                    <span>{invoiceID}</span>
                </li>
                <li className='flex gap-4'>
                    <strong className='block w-28 flex-shrink-0 font-medium text-sm'>Invoice Date</strong>
                    <span>{new Date(result.createTimestamp).toLocaleDateString()}</span>
                </li>
                <li className='flex gap-4'>
                    <strong className='block w-28 flex-shrink-0 font-medium text-sm'>Billing Name</strong>
                    <span></span>
                </li>
                <li className='flex gap-4'>
                    <strong className='block w-28 flex-shrink-0 font-medium text-sm'>Billing Email</strong>
                    <span></span>
                </li>
            </ul>
        </main>
    );
}
