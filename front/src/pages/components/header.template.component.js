template = `<div class="navbar">
            <div class="navbar-bg"></div>
            <div class="navbar-inner">
                <div class="row align-items-center width-100 color-theme-teal">
                    <div class="title">{{$props.title}}</div>
                    <div class="row">
                    {{#unless $props.nomenu}}
                        <button class="button col panel-open width-auto" data-panel=".panel-left">
                            <i class="f7-icons">bars</i>
                        </button>

                        <button class="button col panel-open width-auto" data-panel=".panel-right">
                            <i class="f7-icons">person_crop_circle_fill</i>
                        </button>
                    {{/unless}}
                    </div>
                </div>

            </div>
        </div>`

Framework7.registerComponent('main-header', {
    template: template,
});
