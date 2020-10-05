template = `<div class="pagination">
    <button data-pagination-id="prev" class="btn btn-page js-prev" >
        <i class="f7-icons">chevron_left_2</i>
    </button>
    
    {{#each $props.pages}}
        {{#js_if "this === @root.$props.now"}}
            <button data-pagination-id="{{this}}" class="btn btn-circle on">{{this}}</button>
        {{else}} 
            <button data-pagination-id="{{this}}" class="btn btn-circle">{{this}}</button>
        {{/js_if}}
    {{/each}}
    
    <button data-pagination-id="next" class="btn btn-page btn-circle js-next">
        <i class="f7-icons">chevron_right_2</i>
    </button>
</div>`

Framework7.registerComponent('sub-pagination', {
    template: template,
});
