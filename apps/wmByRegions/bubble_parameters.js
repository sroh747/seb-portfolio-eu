var BUBBLE_PARAMETERS = {
    "data_file": "wm_actions.csv",
    "map_file": "us.json",
    "report_title": "Wealth Management | ongoing commercial actions",
    "footer_text": "Commercial actions in the pipe",
    "width": 1000,
    "height": 650,
    "force_strength": 0.03,
    "force_type": "charge",
    "radius_field": "Asset Value",
    "numeric_fields": ["Asset Value", "Debt", "Net Value", "Probability of success", "Change vs 2015", "Probability of success (m-1)", "Stake"],
    "fill_color": {
        "data_field": "Type",
        "color_groups": {
            "Credits": "#b9d9f1",
            "Gross Revenue": "#e08932",
            "Net New Assets": "#7ba05c"
        }
    },
    "tooltip": [
        { "title": "Asset", "data_field": "Subtype" },
        { "title": "Type", "data_field": "Type" },
        { "title": "Asset Value", "data_field": "Asset Value", "format_string": ",.2r" },
        /*{"title": "Debt", "data_field": "Debt", "format_string": ",.2r"},
        {"title": "Net Value", "data_field": "Net Value", "format_string": ",.2r"},
        {"title": "Change vs 2015", "data_field": "Change vs 2015", "format_string": ",.2r"}*/
    ],
    "modes": [{
            "button_text": "Actions by Location",
            "button_id": "assets_on_map",
            "type": "map",
            "latitude_field": "Latitude",
            "longitude_field": "Longitude"
        },
        {
            "button_text": "All actions",
            "button_id": "all",
            "type": "grid",
            "labels": null,
            "grid_dimensions": { "rows": 1, "columns": 1 },
            "data_field": null
        },
        {
            "button_text": "Actions by generic type",
            "button_id": "region",
            "type": "grid",
            "labels": ["Credits", "Gross Revenue", "Net New Assets"],
            "grid_dimensions": { "rows": 1, "columns": 3 },
            "data_field": "Type"
        },
        /*{
            "button_text": "Actions by subtype",
            "button_id": "subtype",
            "type": "grid",
            "labels": ["Lombard", "Mortgage", "Real Estate", "Jet", "Yacht", "Real Property", "Execution Services", "Advisory Services", "DPM", "Sale company", "Increase in Assets", "New Relation"],            
            "grid_dimensions": {"rows": 3, "columns": 4},
            "data_field": "Subtype"
        },   */
        /*{
            "button_text": "Actions by subtype",
            "button_id": "subtype",
            "type": "grid",
            "labels": ["Lombard", "Mortgage", "Real Estate", "Jet", "Yacht", "Real_Property", "Execution Services", "Advisory Services", "DPM", "Sale company", "Increase in Assets", "New Relation"],            
            "grid_dimensions": {"rows": 3, "columns": 4},
            "data_field": "Asset"
        },  */
        {
            "button_text": "actions by probability of success",
            "button_id": "Probability of success",
            "type": "grid",
            "labels": ["0", "0.25", "0.5", "0.75", "1"],
            "grid_dimensions": { "rows": 1, "columns": 5 },
            "data_field": "Probability of success"
        },
        /*{
            "button_text": "Change in probability vs previous month",
            "button_id": "change_vs_net_value",
            "type": "scatterplot",
            "x_data_field": "Probability of success",
            "y_data_field": "Probability of success (m-1)",
            "x_format_string": ",.2r",
            "y_format_string": ",.2r"
        },*/

    ]
};