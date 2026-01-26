---
hide_title: true
---

# Supabase Upload File (Resumable)

Uploads a file to Supabase Storage using resumable upload support.

<div className="ndl-image-with-background l">
  ![Supabase Upload File (Resumable) node](../../fs-sb-resumable-upload.png)
</div>

This node allows you to upload large files reliably to Supabase Storage. Resumable uploads make it possible to pause, resume, or cancel an upload, which is especially useful for unstable network conditions or large file transfers.

The upload is performed against a specified Storage bucket and path. When enabled, upsert allows an existing file at the same path to be overwritten.

This functionality is based on Supabase’s resumable upload support. For reference, see  
[Supabase – Resumable Uploads](https://supabase.com/docs/guides/storage/uploads/resumable-uploads).

## Inputs

<div className="ndl-table-35-65">

| Data                                                   | Type        | Description |
| ------------------------------------------------------ | ----------- | ----------- |
| <span className="ndl-data">Upload</span>               | signal      | Starts the upload process. |
| <span className="ndl-data">Bucket</span>               | string      | The Storage bucket name. |
| <span className="ndl-data">Path (within bucket)</span> | string      | The destination file path inside the bucket. |
| <span className="ndl-data">Upsert</span>               | boolean     | Whether to overwrite an existing file at the same path. |
| <span className="ndl-data">File</span>                 | Blob / File | The file or blob to upload. |
| <span className="ndl-data">Pause Upload</span>         | signal      | Pauses an ongoing upload. |
| <span className="ndl-data">Resume Upload</span>        | signal      | Resumes a paused upload. |
| <span className="ndl-data">Cancel Upload</span>        | signal      | Cancels the upload operation. |

</div>

## Outputs

<div className="ndl-table-35-65">

| Data                                              | Type    | Description |
| ------------------------------------------------- | ------- | ----------- |
| <span className="ndl-data">Upload Progress</span> | number  | Upload progress as a percentage value. |
| <span className="ndl-data">Public Url</span>      | string  | Public URL of the uploaded file, if applicable. |
| <span className="ndl-data">Is Uploading</span>    | boolean | True while the upload is in progress. |
| <span className="ndl-data">Is Uploaded</span>     | boolean | True once the upload has completed successfully. |
| <span className="ndl-data">Status</span>          | string  | Current upload status: `idle`, `uploading`, `success`, or `error`. |
| <span className="ndl-data">Is Success</span>      | boolean | True if the upload completed successfully. |
| <span className="ndl-data">Is Error</span>        | boolean | True if an error occurred. |
| <span className="ndl-data">Error Text</span>      | string  | Error message returned by Supabase, if any. |
| <span className="ndl-data">Success</span>         | signal  | Triggered when the upload completes successfully. |
| <span className="ndl-data">Failure</span>         | signal  | Triggered if the upload fails. |
| <span className="ndl-data">Finally</span>         | signal  | Triggered after the upload completes, regardless of outcome. |

</div>