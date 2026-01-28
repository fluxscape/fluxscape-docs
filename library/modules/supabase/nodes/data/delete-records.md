---
hide_title: true
---

{/*##head##*/}

# Delete Records

Deletes one or more records from a Supabase table.

The Delete Records node removes records from a selected table based on a filter condition. It is commonly used for cleanup operations, user-initiated deletions, or administrative actions within an application.

Delete operations respect Supabase Row Level Security (RLS) policies and are executed in the context of the currently authenticated user.

This functionality is based on the Supabase Client SDK delete method. For reference, see  
[Supabase Client SDK – Delete data](https://supabase.com/docs/reference/javascript/delete).

{/*##head##*/}

## Inputs

<div className="ndl-table-35-65">

| Data                                     | Type       | Description |
| ---------------------------------------- | ---------- | ----------- |
| <span className="ndl-data">Table Name</span> | enum       | The table from which records will be deleted. |
| <span className="ndl-data">Filter</span>     | javascript | Filter expression used to select which records to delete. |

</div>

## Outputs

<div className="ndl-table-35-65">

| Data                                          | Type    | Description |
| --------------------------------------------- | ------- | ----------- |
| <span className="ndl-data">Object ID</span>   | string  | Internal identifier for this delete operation. |
| <span className="ndl-data">Success</span>     | signal  | Triggered when the delete operation completes successfully. |
| <span className="ndl-data">Failure</span>     | signal  | Triggered if the delete operation fails. |
| <span className="ndl-data">Finally</span>     | signal  | Triggered after the operation completes, regardless of outcome. |
| <span className="ndl-data">Is Fetching</span> | boolean | True while the delete request is in progress. |
| <span className="ndl-data">Is Fetched</span>  | boolean | True once the request has completed. |
| <span className="ndl-data">Status</span>      | string  | Status returned from the delete operation. |
| <span className="ndl-data">Is Success</span>  | boolean | True if the records were deleted successfully. |
| <span className="ndl-data">Is Error</span>    | boolean | True if an error occurred. |
| <span className="ndl-data">Error Text</span>  | string  | Error message returned by Supabase, if any. |

</div>