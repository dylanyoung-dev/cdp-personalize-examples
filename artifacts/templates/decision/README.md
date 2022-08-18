Required Object

config.json

{
"friendlyId": "testing_42222",
"name": "Testing 42222",
"status": "DRAFT",
"templateElements": [
{
"id": "js",
"template": "// This function will return the order that triggered the execution of the experience.\n// This is for use in triggered experiences where the trigger is Order Created or Order Updated.\n\n(function () {\n function getTriggerOrder(){\n var orderRef;\n if (entity && entity.ref !== 'undefined') {\n orderRef = entity.ref;\n }\n var triggerOrder;\n for (var i = 0; i < guest.orders.length; i++) {\n var order = guest.orders[i];\n if (order.ref === orderRef) {\n triggerOrder = order;\n break;\n }\n }\n return triggerOrder;\n }\n\n var triggerOrder = getTriggerOrder();\n})();\n"
}
],
"icon": "",
"defaultTemplate": false,
"type": "DECISION"
}
