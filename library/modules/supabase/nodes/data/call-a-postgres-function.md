---
hide_title: true
---

{/*##head##*/}

# Supabase Call a Postgres Function

Calls a Postgres function (RPC) defined in your Supabase database.

The Supabase Call a Postgres Function node allows you to execute a Postgres function directly on the database. This is commonly used for encapsulating complex queries, enforcing business logic close to the data, or performing operations that are difficult or inefficient to express using standard CRUD nodes.

Postgres functions are executed within the database context and can return scalar values, records, or sets of rows. This makes them well suited for aggregations, computed results, permission-aware queries, and reusable backend logic.

The node returns the raw result of the function execution. If the function returns multiple rows, the result will be an array. If no active session exists or permissions are insufficient, the call will fail according to your Supabase security and RLS configuration.

This functionality is based on the Supabase Client SDK RPC method. For reference, see  
[Supabase Client SDK – Call a Postgres function](https://supabase.com/docs/reference/javascript/rpc).

{/*##head##*/}