---
hide_title: true
---

{/*##head##*/}

# Update Records

The Delete Record node removes a specific record in your Supabase table. You provide the record's unique ID, and the node handles the deletion.

{/*##head##*/}

This is based on the [Supabase Client SDK - Delete data](https://supabase.com/docs/reference/javascript/delete).

## Inputs

<div className="ndl-table-35-65">

| Data                                         | Type       | Description                       |
| -------------------------------------------- | ---------- | --------------------------------- |
| <span className="ndl-data">Filter</span>     | javascript |                                   |
| <span className="ndl-data">Table Name</span> | enum       | List of all the available tables. |

</div>

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
