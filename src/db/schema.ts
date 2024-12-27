import { integer, pgEnum, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createStaticWorker } from "next/dist/build";

export const statusEnum = pgEnum('status', ['open', 'paid', 'ongoing', 'failed'])

export const Invoices = pgTable('invoices', {
    id: serial('id').primaryKey().notNull(),
    createTimestamp: timestamp('createTimestamp').notNull().defaultNow(),
    status: statusEnum('status').notNull(),
    value: integer('value').notNull(),
    description: text('description').notNull()
})