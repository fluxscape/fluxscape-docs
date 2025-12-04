---
hide_title: true
---

{/_##head##_/}

# Supabase Client Event Delete Records

This node is used to receive a signal when a Supabase record is deleted by the client. Similiar to the [Receive Event node](/nodes/events/receive-event), just the Send Event node is built into the Delete Records node.

{/_##head##_/}

## Inputs

<div className="ndl-table-35-65">

| Data                                         | Type    | Description                                                                         |
| -------------------------------------------- | ------- | ----------------------------------------------------------------------------------- |
| <span className="ndl-data">Enable</span>     | boolean | Allow filtering on a specific table events, otherwise this will receive all events. |
| <span className="ndl-data">Table Name</span> | string  | Visible when "Enable" is true.                                                      |

</div>

## Outputs

<div className="ndl-table-35-65">

| Data                                         | Type   | Description |
| -------------------------------------------- | ------ | ----------- |
| <span className="ndl-data">On</span>         | signal |             |
| <span className="ndl-data">Table Name</span> | string |             |

</div>
