  (function($){
    $.fn.plus = function(settings){

        var config = {
            'entity': '',
            'expression': /\[(\w+)\]$/,///\[([^]]+)\]$/,
            'message':'Você deve ter pelo menos 1 registro',
            'remove':'<input id="remover" type="button" value="&nbsp;-&nbsp;" title="Remover"/>',
            'add' : false,
            'controls': '<tr><td><input id="adicionar" type="button" value="&nbsp;+&nbsp;" title="Adicionar" /></td></tr>'
        };
        if (settings){$.extend(config, settings);}
        var table = $(this);
        var thead = $(this).find('thead');
        var tbody = $(this).find('tbody');

        if(config.add === true){
          $(thead).append($(config.controls));
        }
        clickI = 0;
        table.on("click","#adicionar",function(){
          var rows = tbody.find('tr').length;
          tbody.find('tr:last').clone().appendTo(tbody);
          var inputs = tbody.find('tr:last').find("input");
          inputs.each(function(i,element){
            var name = $(element).attr('name');
            var id = $(element).attr('id');
            var sliceName = config.expression.exec(name);
            if(id != "remover"){
              $(element).attr("name",config.entity+"["+rows+"]["+sliceName[1]+"]");
              $(element).val('');
              $(element).attr('id',id+clickI);
              if(i == inputs.length-1){
                $(element).parent().parent().parent().append("<td>"+config.remove+"</td>");
              }
            }
          });
          clickI++;
        });

        table.on("click","#remover",function(){
          $(this).closest("tr").remove();
          clickI--;
        });
    };

})(jQuery);
