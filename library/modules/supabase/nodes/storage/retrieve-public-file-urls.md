---
hide_title: true
---

{/*##head##*/}

# Supabase Retrieve Public File URLs

Generates public URLs for one or more files stored in a Supabase Storage bucket.

{/*##main##*/}

<div className="ndl-image-with-background l">
  ![Supabase Retrieve Public File URLs node](../../fs-sb-retrieve-public-file-url.png)
</div>
This node is useful when you want to display images, link to documents, or render media that is stored in Supabase Storage. The result is a list of URLs corresponding to the provided file paths.

Depending on your bucket configuration, the generated URLs may be publicly accessible or time-limited. Expiration can be configured to control how long the URLs remain valid.

This functionality is based on the Supabase Client SDK method for retrieving a public URL. For reference, see  [Supabase Client SDK – Retrieve public URL](https://supabase.com/docs/reference/javascript/storage-from-getpublicurl).

## Inputs

<div className="ndl-table-35-65">

| Data                                                       | Type            | Description |
| ---------------------------------------------------------- | --------------- | ----------- |
| <span className="ndl-data">Fetch</span>                    | signal          | Triggers the URL generation. |
| <span className="ndl-data">Bucket</span>                   | string          | The Storage bucket name. |
| <span className="ndl-data">Paths (array of strings)</span> | array of string | One or more file paths inside the bucket. |
| <span className="ndl-data">Expires In (seconds)</span>     | number          | Optional. Used when generating time-limited URLs. |

</div>

## Outputs

<div className="ndl-table-35-65">

| Data                                          | Type            | Description |
| --------------------------------------------- | --------------- | ----------- |
| <span className="ndl-data">Signed URLs</span> | array of string | The resulting URLs, in the same order as the input paths. |
| <span className="ndl-data">Is Fetching</span> | boolean         | True while the request is in progress. |
| <span className="ndl-data">Is Fetched</span>  | boolean         | True once the request has completed. |
| <span className="ndl-data">Is Success</span>  | boolean         | True if URLs were generated successfully. |
| <span className="ndl-data">Is Error</span>    | boolean         | True if an error occurred. |
| <span className="ndl-data">Status</span>      | string          | Status returned from the operation. |
| <span className="ndl-data">Error Text</span>  | string          | Error message returned by Supabase, if any. |
| <span className="ndl-data">Success</span>     | signal          | Triggered when the operation completes successfully. |
| <span className="ndl-data">Failure</span>     | signal          | Triggered if the operation fails. |
| <span className="ndl-data">Finally</span>     | signal          | Triggered after the operation completes, regardless of outcome. |

</div>