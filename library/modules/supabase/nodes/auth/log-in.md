---
hide_title: true
---

{/*##head##*/}

# Log In

Logs in an existing user using an email and password or a phone number and password.

<div className="ndl-image-with-background l">
  ![Log In node](../../fs-sb-login.png)
</div>

This node authenticates the user against your connected Supabase project and, on success, creates an active user session. The session can then be used by other Supabase nodes in the app to access protected data, apply row-level security policies, and perform authenticated operations.

The Log In node is typically used as part of an authentication flow together with input fields for credentials and conditional logic to handle successful and failed login attempts.

This functionality is based on the Supabase Client SDK sign-in method. For implementation details and behavior, see  
[Supabase Client SDK – Sign in a user](https://supabase.com/docs/reference/javascript/auth-signinwithpassword).

{/*##head##*/}

## Inputs

<div className="ndl-table-35-65">

| Data                                     | Type   | Description |
| ---------------------------------------- | ------ | ----------- |
| <span className="ndl-data">Log In</span> | signal | Triggers the sign-in request. |
| <span className="ndl-data">Email</span>  | string | Email address of the user (used for email login). |
| <span className="ndl-data">Phone</span>  | string | Phone number of the user (used for phone login). |
| <span className="ndl-data">Password</span> | string | Password for the account. |

</div>

## Outputs

<div className="ndl-table-35-65">

| Data                                          | Type    | Description |
| --------------------------------------------- | ------- | ----------- |
| <span className="ndl-data">Success</span>     | signal  | Triggered when the login completes successfully. |
| <span className="ndl-data">Failure</span>     | signal  | Triggered if the login fails. |
| <span className="ndl-data">Finally</span>     | signal  | Triggered after the login completes, regardless of outcome. |
| <span className="ndl-data">Is Fetching</span> | boolean | True while the login request is in progress. |
| <span className="ndl-data">Is Fetched</span>  | boolean | True once the login request has completed. |
| <span className="ndl-data">Status</span>      | string  | Status returned from the operation. |
| <span className="ndl-data">Is Success</span>  | boolean | True if the login completed successfully. |
| <span className="ndl-data">Is Error</span>    | boolean | True if an error occurred. |
| <span className="ndl-data">Error Text</span>  | string  | Error message returned by Supabase, if any. |

</div>