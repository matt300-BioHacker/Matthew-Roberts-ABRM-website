import {sqliteTable,text,integer} from 'drizzle-orm/sqlite-core';
export const subscribers=sqliteTable('subscribers',{email:text('email').primaryKey(),source:text('source').notNull(),consent:integer('consent').notNull(),createdAt:text('created_at').notNull()});
export const inquiries=sqliteTable('inquiries',{id:text('id').primaryKey(),name:text('name').notNull(),email:text('email').notNull(),service:text('service').notNull(),note:text('note').notNull(),consent:integer('consent').notNull(),createdAt:text('created_at').notNull()});
