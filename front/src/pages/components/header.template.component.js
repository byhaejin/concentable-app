template = `<div class="navbar">
                <div class="navbar-bg"></div>
                <div class="navbar-inner">
                    <div class="row align-items-center width-100">
                        {{#unless $props.nomenu}}
                            <div class="left">
                                <button class="button col panel-open width-auto" data-panel=".panel-left">
                                <i class="f7-icons">bars</i>
                                </button>
                            </div>
                            <div class="title">{{$props.title}}</div>
                            <div class="right">
                                <button class="button col panel-open width-auto" data-panel=".panel-right">
                                <i class="f7-icons">person_crop_circle_fill</i>
                                </button>
                            </div>                                
                        {{/unless}}                    
                    </div>
                </div>
        </div>`

Framework7.registerComponent('main-header', {
    template: template,
});
