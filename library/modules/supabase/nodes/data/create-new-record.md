---
hide_title: true
---

{/_##head##_/}

# Create New Record

The Create New Record node creates a new record in a specified table. You can define its field values and optionally set access control rules to manage who can read or write the record.

{/_##head##_/}

This is based on the [Supabase Client SDK - Insert data](https://supabase.com/docs/reference/javascript/insert).

## Inputs

<div className="ndl-table-35-65">

| Data                                         | Type | Description                       |
| -------------------------------------------- | ---- | --------------------------------- |
| <span className="ndl-data">Table Name</span> | enum | List of all the available tables. |

</div>

Under the group "Data" all the table fields will be, and are designed to both be exist dynamically in the property panel (for supported types) and by making a connection.

## Outputs

<div className="ndl-table-35-65">

| Data                                          | Type    | Description |
| --------------------------------------------- | ------- | ----------- |
| <span className="ndl-data">Object ID</span>   | string  |             |
| <span className="ndl-data">Success</span>     | signal  |             |
| <span className="ndl-data">Failure</span>     | signal  |             |
| <span className="ndl-data">Finally</span>     | signal  |             |
| <span className="ndl-data">Is Fetching</span> | boolean |             |
| <span className="ndl-data">Is Fetched</span>  | boolean |             |
| <span className="ndl-data">Status</span>      | string  |             |
| <span className="ndl-data">Is Success</span>  | boolean |             |
| <span className="ndl-data">Is Error</span>    | boolean |             |
| <span className="ndl-data">Error Text</span>  | string  |             |

</div>
