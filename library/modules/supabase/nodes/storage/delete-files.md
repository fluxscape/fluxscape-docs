---
hide_title: true
---

{/*##head##*/}

# Supabase Delete Files

{/*##head##*/}

This is based on the [Supabase Client SDK - Delete files in a bucket](https://supabase.com/docs/reference/javascript/storage-from-remove).

## Inputs

<div className="ndl-table-35-65">

| Data                                              | Type          | Description |
| ------------------------------------------------- | ------------- | ----------- |
| <span className="ndl-data">Delete</span>          | signal        |             |
| <span className="ndl-data">Bucket</span>          | string        |             |
| <span className="ndl-data">Paths to Delete</span> | array<string> |             |

</div>

## Outputs

<div className="ndl-table-35-65">

| Data                                            | Type          | Description |
| ----------------------------------------------- | ------------- | ----------- |
| <span className="ndl-data">Deleted Paths</span> | array<string> |             |
| <span className="ndl-data">Is Deleting</span>   | boolean       |             |
| <span className="ndl-data">Is Deleted</span>    | boolean       |             |
| <span className="ndl-data">Status</span>        | string        |             |
| <span className="ndl-data">Is Success</span>    | boolean       |             |
| <span className="ndl-data">Is Error</span>      | boolean       |             |
| <span className="ndl-data">Error Text</span>    | string        |             |
| <span className="ndl-data">Success</span>       | signal        |             |
| <span className="ndl-data">Failure</span>       | signal        |             |
| <span className="ndl-data">Finally</span>       | signal        |             |

</div>
