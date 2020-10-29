var sidebar_links = [
    {
        name: 'Introduction',
        filename: 'index.html'
    },
    {
        name: 'Styling with Vue',
        menulinks: [
            'Vuetemplates', 'Accessing data', 'Binding to attributes', 'V-Once', 'Raw Html'
        ]
    },
    {
        name: 'Events',
        menulinks: [
            'Listening to events', 'Getting Event data', 'Event Modifiers', 'Keyboard Events'
        ]
    },
    {
        name: 'Reactivity',
        menulinks: [
            'JS code in templates', 'Two-way data binding', 'Computed properties', 'Watch for changes'
        ]
    },
    {
        name: 'Dynamic styling',
        menulinks: [
            'Dynamic css classes', 'Dynamic classes using property', 'Styling elements without classes'
        ]
    },
    {
        name: 'Conditionals and Lists',
        menulinks: [
            'V-If and V-Show', 'V-for to render lists'
        ]
    },
    {
        name: 'Course Project 1',
        menulinks: [
            'The monster slayer'
        ]
    },
    {
        name: 'Development workflow',
        menulinks: [
            'Installing Vue CLI'
        ]
    }
]

function generate_sidebar(sidebar_links){
    var sidebar_menu = document.getElementById('sidebar-menu');
    sidebar_links.forEach(topic => {
        if(topic.menulinks){
            console.log("menu exists for ", topic.name);
            var topic_dropdown = `<a href="javascript:void(0);" class="topic-dropdown">
                                        ${topic.name} <span class="fa fa-angle-down ml-1"></span>
                                    </a>
                                    <ul class="topic-dropdown-menu list-unstyled" style="display: none;">
                                        ${
                                            topic.menulinks.map(function(menulink){
                                                // console.log("menulink: "+menulink+", ./pages/" + topic.name);
                                                var subtopic = `<li class="topic-listitem">
                                                    <a href="/pages/${topic.name}/${menulink}.html" class="subtopic-link">${menulink}</a>
                                                </li>`;
                                                return subtopic;
                                            }).join('')
                                        }    
                                    </ul>`;
            add_topic(sidebar_menu, topic_dropdown);
        }
        else{
            // console.log("menu N/A for ", topic.name);
            if(topic.name == 'Introduction'){
                var topic_simple = `<a href="../../index.html" class="topic-simple">
                                    ${topic.name}
                                </a>
                                `;
            }
            else{
                var topic_simple = `<a href="../../${topic.filename}" class="topic-simple">
                                    ${topic.name}
                                </a>
                                `;
            }
            add_topic(sidebar_menu, topic_simple);
        }
    });
}

function add_topic(sidebar_menu, topic){
    var listitem = document.createElement('li');
    listitem.className = 'topic';
    listitem.innerHTML = topic;
    // console.log("sidebar_menu:", sidebar_menu);
    sidebar_menu.appendChild(listitem);
}

generate_sidebar(sidebar_links);

// jquery
$().ready(function(){
    console.log("jquery ready");

    $('.topic-dropdown').click(function(){
        $(this).siblings('.topic-dropdown-menu').slideToggle();
        $(this).children('span').toggleClass('fa-angle-up fa-angle-down');
    });
});