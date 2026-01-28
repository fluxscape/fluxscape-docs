---
hide_title: true
---

{/*##head##*/}

# Download File

Downloads a file from a Supabase Storage bucket.

{/*##main##*/}

<div className="ndl-image-with-background l">
  ![Supabase Download File node](../../fs-sb-download-file.png)
</div>

This node retrieves a file stored in Supabase Storage and makes its contents available to the app. It can be used to download assets such as images, documents, or data files for display, processing, or client-side handling.

The downloaded file can be accessed in multiple formats depending on your use case, including a raw Blob, text, or an ArrayBuffer.

This functionality is based on the Supabase Client SDK method for downloading files from Storage. For reference, see  
[Supabase Client SDK – Download a file](https://supabase.com/docs/reference/javascript/storage-from-download).

## Inputs

<div className="ndl-table-35-65">

| Data                                                   | Type   | Description |
| ------------------------------------------------------ | ------ | ----------- |
| <span className="ndl-data">Download</span>             | signal | Triggers the download operation. |
| <span className="ndl-data">Bucket</span>               | string | The Storage bucket name. |
| <span className="ndl-data">Path (within bucket)</span> | string | The file path inside the bucket. |

</div>

## Outputs

<div className="ndl-table-35-65">

| Data                                                | Type    | Description |
| --------------------------------------------------- | ------- | ----------- |
| <span className="ndl-data">File Blob</span>         | *       | The downloaded file as a binary Blob. |
| <span className="ndl-data">File Text</span>         | string  | The file contents as text, when applicable. |
| <span className="ndl-data">File Array Buffer</span> | *       | The file contents as an ArrayBuffer. |
| <span className="ndl-data">Is Downloading</span>    | boolean | True while the download is in progress. |
| <span className="ndl-data">Is Downloaded</span>     | boolean | True once the download has completed. |
| <span className="ndl-data">Status</span>            | string  | Status returned from the download operation. |
| <span className="ndl-data">Is Success</span>        | boolean | True if the file was downloaded successfully. |
| <span className="ndl-data">Is Error</span>          | boolean | True if an error occurred. |
| <span className="ndl-data">Error Text</span>        | string  | Error message returned by Supabase, if any. |
| <span className="ndl-data">Success</span>           | signal  | Triggered when the operation completes successfully. |
| <span className="ndl-data">Failure</span>           | signal  | Triggered if the operation fails. |
| <span className="ndl-data">Finally</span>           | signal  | Triggered after the operation completes, regardless of outcome. |

</div>