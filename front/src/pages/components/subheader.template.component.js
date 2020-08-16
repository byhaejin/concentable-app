template = `<div class="navbar">
    <div class="navbar-bg"></div>
    <div class="navbar-inner sliding">
        <div class="row align-items-center justify-content-space-between width-100 color-theme-teal">
            <div class="row align-items-center">
                <div class="left">
                    <a href="#" class="link back">
                        <i class="icon icon-back"></i>
                    </a>
                </div>
                <div class="title">{{$props.title}}</div>
            </div>
           
            {{#unless $props.nomenu}}
            <button class="button panel-open width-auto" data-panel=".panel-left">
                <i class="f7-icons size-56">bars</i>
            </button>
            {{/unless}}
        </div>
    </div>
</div>`

Framework7.registerComponent('sub-header', {
    template: template,
});
