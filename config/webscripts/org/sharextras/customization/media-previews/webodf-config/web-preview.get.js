if (model.widgets)
{
   for (var i = 0; i < model.widgets.length; i++)
   {
      var widget = model.widgets[i];
      if (widget.id == "WebPreview")
      {
         var conditions = [];
         // Insert new pluginCondition(s) at start of the chain
         conditions.push({
            attributes: {
               mimeType: "application/vnd.oasis.opendocument.text"
            },
            plugins: [{
               name: "WebODF",
               attributes: {}
            }]
         });
         var oldConditions = jsonUtils.toObject("{\"tmp\":" + widget.options.pluginConditions + "}").tmp;
         // Add the other conditions back in
         for (var j = 0; j < oldConditions.length; j++)
         {
            conditions.push(oldConditions[j]);
         }
         // Override the original conditions
         model.pluginConditions = jsonUtils.toJSONString(conditions);
         widget.options.pluginConditions = model.pluginConditions;
      }
   }
}