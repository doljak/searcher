const Searcher = {

    selectors:{
        navbarHeader: '#navbar-collapse',
        menuHeader: '.menu-item-header',
        classToCollapse: 'in',
    },

    init: function()
    {

        $.each( this.listeners , function()
            {
                this()
            }
        )

    },

    listeners:{

        menuHeaderClickListener: function()
        {
            $(Searcher.selectors.menuHeader).on('click', function()
                {
                    console.log('cliquei')
                    if($(Searcher.selectors.navbarHeader).hasClass(Searcher.selectors.classToCollapse))
                    {
                        $(Searcher.selectors.navbarHeader).removeClass(Searcher.selectors.classToCollapse)
                    }
                }
            )
        }
    }

}

$(document).ready(function(){
    Searcher.init()
})