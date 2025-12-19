---
hide_title: true
---

{/*##head##*/}

# Supabase Retrieve Public File URLs

{/*##head##*/}

This is based on the [Supabase Client SDK - Retrieve public URL](https://supabase.com/docs/reference/javascript/storage-from-getpublicurl).

## Inputs

<div className="ndl-table-35-65">

| Data                                                       | Type          | Description |
| ---------------------------------------------------------- | ------------- | ----------- |
| <span className="ndl-data">Fetch</span>                    | signal        |             |
| <span className="ndl-data">Bucket</span>                   | string        |             |
| <span className="ndl-data">Paths (array of strings)</span> | array<string> |             |
| <span className="ndl-data">Expires In (seconds)</span>     | number        |             |

</div>

## Outputs

<div className="ndl-table-35-65">

| Data                                          | Type          | Description |
| --------------------------------------------- | ------------- | ----------- |
| <span className="ndl-data">Signed URLs</span> | array<string> |             |
| <span className="ndl-data">Is Fetching</span> | boolean       |             |
| <span className="ndl-data">Is Fetched</span>  | boolean       |             |
| <span className="ndl-data">Is Success</span>  | boolean       |             |
| <span className="ndl-data">Is Error</span>    | boolean       |             |
| <span className="ndl-data">Status</span>      | string        |             |
| <span className="ndl-data">Error Text</span>  | string        |             |
| <span className="ndl-data">Success</span>     | signal        |             |
| <span className="ndl-data">Failure</span>     | signal        |             |
| <span className="ndl-data">Finally</span>     | signal        |             |

</div>
