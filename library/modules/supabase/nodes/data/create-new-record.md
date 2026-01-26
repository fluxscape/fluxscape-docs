---
hide_title: true
---

# Create New Record

Creates a new record in a specified Supabase table.

<div className="ndl-image-with-background l">
  ![Create New Record node](../../fs-sb-create-record.png)
</div>

The Create New Record node inserts a new row into a selected table in your connected Supabase database. You define the field values either directly in the property panel or dynamically by connecting inputs from other nodes.

This node is commonly used for creating application data such as users, orders, content items, or any custom domain objects defined in your database schema. Insert operations respect Supabase Row Level Security (RLS) policies and the authentication context of the current user.

This functionality is based on the Supabase Client SDK insert method. For reference, see  
[Supabase Client SDK – Insert data](https://supabase.com/docs/reference/javascript/insert).

## Inputs

<div className="ndl-table-35-65">

| Data                                         | Type | Description |
| -------------------------------------------- | ---- | ----------- |
| <span className="ndl-data">Table Name</span> | enum | The table where the new record will be created. |

</div>

Under the **Data** group, all available fields for the selected table are exposed. These fields can be set directly in the property panel for supported types or populated dynamically through node connections.

## Outputs

<div className="ndl-table-35-65">

| Data                                          | Type    | Description |
| --------------------------------------------- | ------- | ----------- |
| <span className="ndl-data">Object ID</span>   | string  | Internal identifier for this insert operation. |
| <span className="ndl-data">Success</span>     | signal  | Triggered when the record is successfully created. |
| <span className="ndl-data">Failure</span>     | signal  | Triggered if the insert operation fails. |
| <span className="ndl-data">Finally</span>     | signal  | Triggered after the operation completes, regardless of outcome. |
| <span className="ndl-data">Is Fetching</span> | boolean | True while the insert request is in progress. |
| <span className="ndl-data">Is Fetched</span>  | boolean | True once the request has completed. |
| <span className="ndl-data">Status</span>      | string  | Status returned from the insert operation. |
| <span className="ndl-data">Is Success</span>  | boolean | True if the record was created successfully. |
| <span className="ndl-data">Is Error</span>    | boolean | True if an error occurred. |
| <span className="ndl-data">Error Text</span>  | string  | Error message returned by Supabase, if any. |

</div>