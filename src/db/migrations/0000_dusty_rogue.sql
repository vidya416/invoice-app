CREATE TYPE "public"."status" AS ENUM('open', 'paid', 'ongoing', 'failed');--> statement-breakpoint
CREATE TABLE "invoices" (
	"id" serial PRIMARY KEY NOT NULL,
	"createTimestamp" timestamp DEFAULT now() NOT NULL,
	"status" "status" NOT NULL,
	"value" integer NOT NULL,
	"description" text NOT NULL
);
