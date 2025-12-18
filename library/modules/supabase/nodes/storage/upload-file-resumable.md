---
hide_title: true
---

{/*##head##*/}

# Supabase Upload File (Resumable)

{/*##head##*/}

## Inputs

<div className="ndl-table-35-65">

| Data                                                   | Type        | Description |
| ------------------------------------------------------ | ----------- | ----------- |
| <span className="ndl-data">Upload</span>               | signal      |             |
| <span className="ndl-data">Bucket</span>               | string      |             |
| <span className="ndl-data">Path (within bucket)</span> | string      |             |
| <span className="ndl-data">Upsert</span>               | boolean     |             |
| <span className="ndl-data">File</span>                 | Blob / File |             |
| <span className="ndl-data">Pause Upload</span>         | signal      |             |
| <span className="ndl-data">Resume Upload</span>        | signal      |             |
| <span className="ndl-data">Cancel Upload</span>        | signal      |             |

</div>

## Outputs

<div className="ndl-table-35-65">

| Data                                              | Type    | Description                                   |
| ------------------------------------------------- | ------- | --------------------------------------------- |
| <span className="ndl-data">Upload Progress</span> | number  |                                               |
| <span className="ndl-data">Public Url</span>      | string  |                                               |
| <span className="ndl-data">Is Uploading</span>    | boolean |                                               |
| <span className="ndl-data">Is Uploaded</span>     | boolean |                                               |
| <span className="ndl-data">Status</span>          | string  | "idle" or "uploading" or "success" or "error" |
| <span className="ndl-data">Is Success</span>      | boolean |                                               |
| <span className="ndl-data">Is Error</span>        | boolean |                                               |
| <span className="ndl-data">Error Text</span>      | string  |                                               |
| <span className="ndl-data">Success</span>         | signal  |                                               |
| <span className="ndl-data">Failure</span>         | signal  |                                               |
| <span className="ndl-data">Finally</span>         | signal  |                                               |

</div>
