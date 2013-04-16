;(function($) {
    $.expr.pseudos['text-like'] = function(el) {
        var name = el.nodeName.toLowerCase();
        return name === "input" && (["text","number","date","url","email","search","tel","datetime","month","week","time","datetime-local","range","color"].indexOf(el.type) > -1);
    };

    // DOES NOT WORK WITH INPUT:CHECKBOX RIGHT NOW! SORRY.

    $.fn.retainvalue = function(opts) {
        if (!('localStorage' in window)) return;

        $(this).each(function(i, el) {
            var $el = $(el);
            if (["input","select"].indexOf($el[0].tagName.toLowerCase()) == -1) {
                $el.find('input, select').retainvalue(opts);
                return;
            }

            if (!$el.attr('name')) return;

            $el.on('change', function(e) {
                e.stopPropagation();
                var $field = $(this);
                var name = $(this).attr('name');
                var key = 'retainvalue_' + name;
                var value = $(this).val();
                localStorage[key] = value;
            });

            if (!$el.val() || $el.is('input:radio') || $el.is('input:checkbox')) {
                var retainedValue = localStorage['retainvalue_' + $el.attr('name')];

                if ($el.is('input:text-like')) {
                    $el.val(retainedValue);
                } else if ($el.is('input:radio')) {
                    if ($el.val() == retainedValue) {
                        $el.prop('checked', true);
                    }
                } else if ($el.is('select')) {
                    $el.find('option').removeAttr('selected').filter('[value="' + retainedValue + '"]').prop('selected',true);
                } else if ($el.is('input:checkbox')) {
                    console.warn('Checkboxes are currently not supported :(');
                }
            }
        });
    };

    $.retainvalue = {
        resetAll: function() {
            for (var key in localStorage) {
                if (localStorage.hasOwnProperty(key) && (key.substr(0,12) == 'retainvalue_')) {
                    localStorage.removeItem(key);
                }
            }
        }
    };
})(jQuery);
