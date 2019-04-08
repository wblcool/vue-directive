Vue.directive("clickOutside", {
    bind : function(el, binding, vnode){
        function documentHandler(e){
            console.log(binding.modifiers);
            if(e.type === "click" && el.contains(e.target)){
                return false;
            }
            if(binding.expression){
                binding.value(e)
            }
        }
        el._vueClickOutside_ = documentHandler;
        document.addEventListener("click", documentHandler);

        if(binding.modifiers && binding.modifiers.esc){
            document.addEventListener("keydown", documentHandler);
        }
    },
    unbind : function(el, binding){
        document.removeEventListener("click", el._vueClickOutside_);
        if(binding.modifiers && binding.modifiers.esc){
            document.removeEventListener("keydown", el._vueClickOutside_);
        }
        delete el._vueClickOutside_;
    }
});