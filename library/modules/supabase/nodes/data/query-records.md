---
hide_title: true
---

{/*##head##*/}

# Query Records

The Query Records node retrieves data from your Supabase table or views. You can use it to fetch a list of records or perform a count query, depending on your needs.

{/*##main##*/}

This is based on the [Supabase Client SDK - Fetch data](https://supabase.com/docs/reference/javascript/select).

## Using Filters

The filter is following the Supabase query structure, giving you access to all the Supabase features.
https://supabase.com/docs/reference/javascript/using-filters

### Apply simple filter

```js
return query.eq("name", "violin");
```

### Conditional Chaining

```js
if (Inputs.filterByName) {
  query = query.eq("name", Inputs.filterByName);
}
if (Inputs.filterPopLow) {
  query = query.gte("population", Inputs.filterPopLow);
}
if (Inputs.filterPopHigh) {
  query = query.lt("population", Inputs.filterPopHigh);
}
return query;
```

### Filter by values within a JSON column

```js
return query.eq("address->postcode", 90210);
```

### Filter referenced tables

```js
return query.eq("instruments.name", "flute");
```

## Using modifiers

https://supabase.com/docs/reference/javascript/using-modifiers

### Order the results

```js
return query.order("id", { ascending: false });
```

### Limit the number of rows returned

```js
return query.limit(1);
```

## Inputs

<div className="ndl-table-35-65">

| Data                                         | Type       | Description                                                                                                                                         |
| -------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Do</span>         | signal     |                                                                                                                                                     |
| <span className="ndl-data">Table Name</span> | string     |                                                                                                                                                     |
| <span className="ndl-data">Count</span>      | enum       | There are a few ways to get the count from Supabase on the filter, which is useful if you are using “limit” in the filter.                          |
| <span className="ndl-data">Skip Items</span> | boolean    | (Head) Skip returning the items, this is useful if you want to do a count query.                                                                    |
| <span className="ndl-data">Filter</span>     | javascript | A javascript function allowing you to use either filters or modifiers provided by Supabase. With support for “Inputs” similar to the Function node. |
| <span className="ndl-data">Select</span>     | list       | Allow selecting what fields that should be returned, also supporting joining.                                                                       |

</div>

## Outputs

<div className="ndl-table-35-65">

| Data                                              | Type    | Description |
| ------------------------------------------------- | ------- | ----------- |
| <span className="ndl-data">Items</span>           | array   |             |
| <span className="ndl-data">First Record Id</span> | string  |             |
| <span className="ndl-data">Is Empty</span>        | boolean |             |
| <span className="ndl-data">Count</span>           | number  |             |
| <span className="ndl-data">Is Loading</span>      | boolean |             |
| <span className="ndl-data">Is Fetching</span>     | boolean |             |
| <span className="ndl-data">Is Fetched</span>      | boolean |             |
| <span className="ndl-data">Status</span>          | string  |             |
| <span className="ndl-data">Is Success</span>      | boolean |             |
| <span className="ndl-data">Is Error</span>        | boolean |             |
| <span className="ndl-data">Error Text</span>      | string  |             |
| <span className="ndl-data">Is Found</span>        | boolean |             |
| <span className="ndl-data">Is Missing</span>      | boolean |             |
| <span className="ndl-data">Success</span>         | signal  |             |
| <span className="ndl-data">Failure</span>         | signal  |             |
| <span className="ndl-data">Finally</span>         | signal  |             |

</div>
