---
hide_title: true
---

{/*##head##*/}

# Update Records

The Update Records node modifies an existing record in your Supabase table. You specify which record to update and which fields to change.

{/*##main##*/}

This is based on the [Supabase Client SDK - Update data](https://supabase.com/docs/reference/javascript/update).

## Inputs

<div className="ndl-table-35-65">

| Data                                         | Type       | Description                       |
| -------------------------------------------- | ---------- | --------------------------------- |
| <span className="ndl-data">Filter</span>     | javascript |                                   |
| <span className="ndl-data">Table Name</span> | enum       | List of all the available tables. |

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
