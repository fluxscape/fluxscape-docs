---
hide_title: true
---

{/*##head##*/}

# User

Returns the currently authenticated user from the active Supabase session.

This node provides access to the user object associated with the current session, including identifiers and metadata such as user ID, email, phone number, and custom user metadata.

The User node is commonly used to display account information, personalize the UI, or drive conditional logic based on whether a user is logged in or not. If no active session exists, the node returns `null`.

The returned user data reflects the authentication state managed by Supabase and updates automatically as the session changes.

{/*##head##*/}