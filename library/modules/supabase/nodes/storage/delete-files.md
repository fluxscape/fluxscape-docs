---
hide_title: true
---

# Supabase Delete Files

Deletes one or more files from a Supabase Storage bucket.

<div className="ndl-image-with-background l">
  ![Supabase Delete Files node](../../fs-sb-delete-files.png)
</div>

This node removes files from the specified Supabase Storage bucket based on the provided file paths. It is commonly used for cleanup operations, user-initiated file removal, or managing stored assets within an application.

Delete operations respect Supabase Storage access policies and the authentication context of the current user.

This functionality is based on the Supabase Client SDK method for deleting files from a bucket. For reference, see  
[Supabase Client SDK – Delete files in a bucket](https://supabase.com/docs/reference/javascript/storage-from-remove).

## Inputs

<div className="ndl-table-35-65">

| Data                                              | Type            | Description |
| ------------------------------------------------- | --------------- | ----------- |
| <span className="ndl-data">Delete</span>          | signal          | Triggers the delete operation. |
| <span className="ndl-data">Bucket</span>          | string          | The Storage bucket name. |
| <span className="ndl-data">Paths to Delete</span> | array of string | One or more file paths to remove from the bucket. |

</div>

## Outputs

<div className="ndl-table-35-65">

| Data                                            | Type            | Description |
| ----------------------------------------------- | --------------- | ----------- |
| <span className="ndl-data">Deleted Paths</span> | array of string | The file paths that were successfully deleted. |
| <span className="ndl-data">Is Deleting</span>   | boolean         | True while the delete operation is in progress. |
| <span className="ndl-data">Is Deleted</span>    | boolean         | True once the delete operation has completed. |
| <span className="ndl-data">Status</span>        | string          | Status returned from the delete operation. |
| <span className="ndl-data">Is Success</span>    | boolean         | True if the files were deleted successfully. |
| <span className="ndl-data">Is Error</span>      | boolean         | True if an error occurred. |
| <span className="ndl-data">Error Text</span>    | string          | Error message returned by Supabase, if any. |
| <span className="ndl-data">Success</span>       | signal          | Triggered when the operation completes successfully. |
| <span className="ndl-data">Failure</span>       | signal          | Triggered if the operation fails. |
| <span className="ndl-data">Finally</span>       | signal          | Triggered after the operation completes, regardless of outcome. |

</div>