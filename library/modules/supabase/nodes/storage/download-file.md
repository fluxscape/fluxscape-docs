---
hide_title: true
---

{/*##head##*/}

# Download File

{/*##head##*/}

This is based on the [Supabase Client SDK - Download a file](https://supabase.com/docs/reference/javascript/storage-from-download).

## Inputs

<div className="ndl-table-35-65">

| Data                                                   | Type   | Description |
| ------------------------------------------------------ | ------ | ----------- |
| <span className="ndl-data">Download</span>             | signal |             |
| <span className="ndl-data">Bucket</span>               | string |             |
| <span className="ndl-data">Path (within bucket)</span> | string |             |

</div>

## Outputs

<div className="ndl-table-35-65">

| Data                                                | Type    | Description |
| --------------------------------------------------- | ------- | ----------- |
| <span className="ndl-data">File Blob</span>         | \*      |             |
| <span className="ndl-data">File Text</span>         | string  |             |
| <span className="ndl-data">File Array Buffer</span> | \*      |             |
| <span className="ndl-data">Is Downloading</span>    | boolean |             |
| <span className="ndl-data">Is Downloaded</span>     | boolean |             |
| <span className="ndl-data">Status</span>            | string  |             |
| <span className="ndl-data">Is Success</span>        | boolean |             |
| <span className="ndl-data">Is Error</span>          | boolean |             |
| <span className="ndl-data">Error Text</span>        | string  |             |
| <span className="ndl-data">Success</span>           | signal  |             |
| <span className="ndl-data">Failure</span>           | signal  |             |
| <span className="ndl-data">Finally</span>           | signal  |             |

</div>
