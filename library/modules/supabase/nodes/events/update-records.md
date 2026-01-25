---
hide_title: true
---

# Supabase Client Event Update Records
<br />
Emits a signal when one or more records are updated by the client in Supabase.

<div className="ndl-image-with-background l">
  ![Supabase Client Event Update Records node](../../fs-sb-client-update-record.png)
</div>

This node listens for record update events triggered by client-side actions in Supabase. It allows your app to react immediately when existing data changes, such as refreshing views, recalculating derived state, or triggering follow-up workflows.

It works similarly to the [Receive Event node](/nodes/events/receive-event),  but in this case the event emission is built directly into the Update Records flow, removing the need for a separate Send Event node.

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
| <span className="ndl-data">On</span>         | signal | Triggered when a matching record update event is received. |
| <span className="ndl-data">Table Name</span> | string | The name of the table where records were updated. |

</div>