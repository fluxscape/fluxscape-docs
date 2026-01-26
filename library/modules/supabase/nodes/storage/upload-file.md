---
hide_title: true
---

# Supabase Upload File

Uploads a file to an existing Supabase Storage bucket.

<div className="ndl-image-with-background l">
  ![Supabase Upload File node](../../fs-sb-upload-file.png)
</div>

This node uploads a file directly to Supabase Storage at the specified bucket and path. It is best suited for smaller files or situations where resumable uploads are not required.

When enabled, the upsert option allows an existing file at the same path to be overwritten. Upload operations respect Supabase Storage access policies and are executed in the context of the current user.

This functionality is based on the Supabase Client SDK upload method. For reference, see  
[Supabase Client SDK – Upload a file](https://supabase.com/docs/reference/javascript/storage-from-upload).

## Inputs

<div className="ndl-table-35-65">

| Data                                                   | Type        | Description |
| ------------------------------------------------------ | ----------- | ----------- |
| <span className="ndl-data">Upload</span>               | signal      | Triggers the upload operation. |
| <span className="ndl-data">Bucket</span>               | string      | The Storage bucket name. |
| <span className="ndl-data">Path (within bucket)</span> | string      | The destination file path inside the bucket. |
| <span className="ndl-data">Upsert</span>               | boolean     | Whether to overwrite an existing file at the same path. |
| <span className="ndl-data">File</span>                 | Blob / File | The file or blob to upload. |

</div>

## Outputs

<div className="ndl-table-35-65">

| Data                                             | Type    | Description |
| ------------------------------------------------ | ------- | ----------- |
| <span className="ndl-data">File ID</span>        | string  | Identifier returned for the uploaded file, if available. |
| <span className="ndl-data">File Path</span>      | string  | The file path within the bucket. |
| <span className="ndl-data">File Full Path</span> | string  | The full resolved path to the uploaded file. |
| <span className="ndl-data">Public Url</span>     | string  | Public URL of the uploaded file, if applicable. |
| <span className="ndl-data">Is Uploading</span>   | boolean | True while the upload is in progress. |
| <span className="ndl-data">Is Uploaded</span>    | boolean | True once the upload has completed successfully. |
| <span className="ndl-data">Status</span>         | string  | Current upload status: `idle`, `uploading`, `success`, or `error`. |
| <span className="ndl-data">Is Success</span>     | boolean | True if the upload completed successfully. |
| <span className="ndl-data">Is Error</span>       | boolean | True if an error occurred. |
| <span className="ndl-data">Error Text</span>     | string  | Error message returned by Supabase, if any. |
| <span className="ndl-data">Success</span>        | signal  | Triggered when the upload completes successfully. |
| <span className="ndl-data">Failure</span>        | signal  | Triggered if the upload fails. |
| <span className="ndl-data">Finally</span>        | signal  | Triggered after the upload completes, regardless of outcome. |

</div>