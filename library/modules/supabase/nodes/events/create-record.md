---
hide_title: true
---

# Supabase Client Event Create Record

Emits a signal when a record is created by the client in Supabase.

<div className="ndl-image-with-background l">
  ![Supabase Client Event Create Record node](../../fs-sb-client-create-record.png)
</div>

This node listens for record creation events triggered by client-side actions in Supabase. It allows your app to react immediately when new data is created, such as updating UI state, triggering workflows, or chaining additional logic.

It works similarly to the [Receive Event node](/nodes/events/receive-event), but in this case the event emission is built directly into the Create Record flow, removing the need for a separate Send Event node.

## Inputs

<div className="ndl-table-35-65">

| Data                                             | Type    | Description |
| ------------------------------------------------ | ------- | ----------- |
| <span className="ndl-data">Enable</span>         | boolean | Enables filtering by a specific table. When disabled, events from all tables are received. |
| <span className="ndl-data">Table Name</span>     | string  | The table to listen to. Only visible when **Enable** is true. |
| <span className="ndl-data">Data Object ID</span> | string  | Optional identifier used to scope or correlate the event. |

</div>

## Outputs

<div className="ndl-table-35-65">

| Data                                         | Type   | Description |
| -------------------------------------------- | ------ | ----------- |
| <span className="ndl-data">On</span>         | signal | Triggered when a matching record creation event is received. |
| <span className="ndl-data">Table Name</span> | string | The name of the table where the record was created. |
| <span className="ndl-data">Record ID</span>  | string | The identifier of the newly created record. |

</div>