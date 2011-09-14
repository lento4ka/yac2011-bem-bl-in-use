({
    block: 'b-page',
    title: 'index',
    head: [
        { elem: 'css', url: 'index.css'},
        { elem: 'css', url: 'index.ie.css', ie: 'lt IE 8'},
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url:'index.js'}
    ],
    content: [
        {
            block: 'b-head',
            content: [
                {
                    block: 'b-link',
                    mods: { inner: 'yes'},
                    url: '',
                    content: [
                        {
                            block: 'b-icon',
                            alt: 'icon',
                            url: '/'
                        },
                        {
                            elem: 'inner',
                            content: 'Клуб&nbsp;БЕМ'
                        }
                    ]
                },
                {
                    block: 'b-head-links',
                    content: {
                        block: 'b-menu-vert',
                        mix: [{ block: 'b-head-links', elem: 'menu' }],
                        tail: {
                            elem: 'tail'
                        },
                        content: [
                            {
                                elem: 'item',
                                content: {
                                    block: 'b-link',
                                    url: '',
                                    content: 'bem-metod'
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'b-link',
                                    url: '',
                                    content: 'bem-tools'
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'b-link',
                                    url: '',
                                    content: 'bem-bl-tools'
                                }
                            }
                        ]
                    }
                },


                {
                    block: 'b-search',
                    attrs: { action: '/search.xml' },
                    input: {
                        elem: 'input',
                        attrs: { value: 'Поиск' }
                    },
                    button: {
                        elem: 'button'
                    }
                }
            ]
        },
        {
            block: 'b-layout-table',
            mods: { layout: '48-46' },
            content: [
                {
                    elem: 'row',
                    content: [
                        {
                            elem: 'gap',
                            elemMods: { position: 'left' }
                        },
                        {
                            elem: 'cell',
                            elemMods: { position: 'left' },
                            content: {
                                elem: 'inner',
                                content: [
                                    {
                                        block: 'b-menu-vert',
                                        js: true,
                                        mods: { list: 'blocks'},
                                        content: [
                                            {
                                                elem: 'item',
                                                content: [
                                                    {
                                                        elem: 'trigger',
                                                        content: 'blocks-common'
                                                    },
                                                    {
                                                        elem: 'text',
                                                        content: 'Общие&nbsp;блоки'
                                                    }
                                                ],
                                                'item-content': {
                                                    elem: 'item-content',
                                                    content: {
                                                        block: 'b-menu-vert',
                                                        mods: { type: 'submenu'},
                                                        content: [
                                                            {
                                                                elem: 'item',
                                                                content: {
                                                                    block: 'b-link',
                                                                    url: '/',
                                                                    content: 'i-bem'
                                                                }
                                                            },
                                                            {
                                                                elem: 'item',
                                                                content: {
                                                                    block: 'b-link',
                                                                    url: '/',
                                                                    content: 'i-jquery'
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                content: [
                                                    {
                                                        elem: 'trigger',
                                                        content: 'blocks-desktop'
                                                    },
                                                    {
                                                        elem: 'text',
                                                        content: 'Блоки&nbsp;для&nbsp;desktop-ых&nbsp;браузеров'
                                                    }
                                                ],
                                                'item-content': {
                                                    elem: 'item-content',
                                                    content: {
                                                        block: 'b-menu-vert',
                                                        mods: { type: 'submenu'},
                                                        content: [
                                                            {
                                                                elem: 'item',
                                                                content: {
                                                                    block: 'b-link',
                                                                    url: '/',
                                                                    content: 'b-icon'
                                                                }
                                                            },
                                                            {
                                                                elem: 'item',
                                                                content: {
                                                                    block: 'b-link',
                                                                    url: '/',
                                                                    content: 'b-layout-table'
                                                                }
                                                            },
                                                            {
                                                                elem: 'item',
                                                                content: {
                                                                    block: 'b-link',
                                                                    url: '/',
                                                                    content: 'b-link'
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            elem: 'cell',
                            elemMods: { position: 'right' },
                            content: {
                                block: 'b-info',
                                content: {
                                    block: 'b-text',
                                    content: [
                                        {
                                            elem: 'h1',
                                            content: 'WEB Framework или Библиотека блоков'
                                        },
                                        {
                                            elem: 'p',
                                            content: 'Попытка сделать сделать лучший Web Framework, действительно облегчающий разработку и поддержку сайта. А так же систематизировать подходы к верстке и описать удобную схему верстки сайтов, как больших, так и маленьких.'
                                        },
                                        {
                                            elem: 'p',
                                            content: 'Все сайты немного похожи друг на друга. Если заниматься веб-разработкой долгие годы, накапливаются практики и типовые решения распространенных задач. Результатом наших накоплений становится open source библиотека блоков bem-bl, которую мы разрабатываем на GitHub. Библиотека реализована согласно методологии БЭМ и позволяет использовать блоки, уже имеющие шаблонную, CSS и JS-реализации, для построения web-страницы.'
                                        }
                                    ]
                                }
                            }
                        },
                        {
                            elem: 'gap'
                        }
                    ]
                }
            ]
        }


    ]
})
