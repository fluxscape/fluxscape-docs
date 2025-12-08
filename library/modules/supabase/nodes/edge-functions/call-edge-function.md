---
hide_title: true
---

{/*##head##*/}

# Call Edge Function

The Call Edge Function node calls a specific Supabase Edge Function. You provide the unique function name, and the request body.

{/*##head##*/}

This is based on the [Supabase Client SDK - Invokes a Supabase Edge Function](https://supabase.com/docs/reference/javascript/functions-invoke).

## Inputs

<div className="ndl-table-35-65">

| Data                                            | Type       | Description |
| ----------------------------------------------- | ---------- | ----------- |
| <span className="ndl-data">Function Name</span> | string     |             |
| <span className="ndl-data">Options</span>       | javascript |             |

</div>

Similar to how the Function node works, you can use `Inputs.Value` inside the Options script to create a custom request.

### Options

```js
// Write your query script here, check out the reference documentation for examples
return {
  // headers: {
  //   "my-custom-header": 'my-custom-header-value',
  // },
  // method: 'POST',
  // responseType: 'text',
  body: JSON.stringify(Inputs.Data),
};
```

## Outputs

> The response you get back is a pure object, and will not be converted to a Noodl Object.

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
