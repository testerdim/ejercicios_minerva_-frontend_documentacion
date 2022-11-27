'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-f85a74d9788d8ffe4d7d541bc3e8e5ccdf3132b156351d1f4960bc2262361c19e410a6b14a4770b4b21f3f0a4cf62acd725a8d5722c90497ceba17f242629190"' : 'data-target="#xs-components-links-module-AppModule-f85a74d9788d8ffe4d7d541bc3e8e5ccdf3132b156351d1f4960bc2262361c19e410a6b14a4770b4b21f3f0a4cf62acd725a8d5722c90497ceba17f242629190"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f85a74d9788d8ffe4d7d541bc3e8e5ccdf3132b156351d1f4960bc2262361c19e410a6b14a4770b4b21f3f0a4cf62acd725a8d5722c90497ceba17f242629190"' :
                                            'id="xs-components-links-module-AppModule-f85a74d9788d8ffe4d7d541bc3e8e5ccdf3132b156351d1f4960bc2262361c19e410a6b14a4770b4b21f3f0a4cf62acd725a8d5722c90497ceba17f242629190"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ConsultaModule.html" data-type="entity-link" >ConsultaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConsultaModule-fbf098938804840e949db2524c73cf61ce2843d535daefe12cc224f84c8051fb8042fd7d151d26cebdc77daec482edef63e4728e76f065118bb9aa403dc89854"' : 'data-target="#xs-components-links-module-ConsultaModule-fbf098938804840e949db2524c73cf61ce2843d535daefe12cc224f84c8051fb8042fd7d151d26cebdc77daec482edef63e4728e76f065118bb9aa403dc89854"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConsultaModule-fbf098938804840e949db2524c73cf61ce2843d535daefe12cc224f84c8051fb8042fd7d151d26cebdc77daec482edef63e4728e76f065118bb9aa403dc89854"' :
                                            'id="xs-components-links-module-ConsultaModule-fbf098938804840e949db2524c73cf61ce2843d535daefe12cc224f84c8051fb8042fd7d151d26cebdc77daec482edef63e4728e76f065118bb9aa403dc89854"' }>
                                            <li class="link">
                                                <a href="components/AutomataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutomataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConsultaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConsultaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EquiposComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EquiposComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UnidadesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UnidadesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConsultaRoutingModule.html" data-type="entity-link" >ConsultaRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-fd7dc7801fa34892ed4fc2b40604d495416a268b461547b7a619bcccbe33ca80872d9f485181650f3803e1df7b76864fd4c7f0d45d4b848d453de1ccb2f818ba"' : 'data-target="#xs-components-links-module-CoreModule-fd7dc7801fa34892ed4fc2b40604d495416a268b461547b7a619bcccbe33ca80872d9f485181650f3803e1df7b76864fd4c7f0d45d4b848d453de1ccb2f818ba"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-fd7dc7801fa34892ed4fc2b40604d495416a268b461547b7a619bcccbe33ca80872d9f485181650f3803e1df7b76864fd4c7f0d45d4b848d453de1ccb2f818ba"' :
                                            'id="xs-components-links-module-CoreModule-fd7dc7801fa34892ed4fc2b40604d495416a268b461547b7a619bcccbe33ca80872d9f485181650f3803e1df7b76864fd4c7f0d45d4b848d453de1ccb2f818ba"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShellComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShellComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-127ec4267f4316eaebc1b720065d1e752ebcb86542b5c9514d3dec5b0c19f359a56d3fd45576be1b4ef9cfc78814b041b3325af5f4686791c6e84d8dab995c8e"' : 'data-target="#xs-components-links-module-HomeModule-127ec4267f4316eaebc1b720065d1e752ebcb86542b5c9514d3dec5b0c19f359a56d3fd45576be1b4ef9cfc78814b041b3325af5f4686791c6e84d8dab995c8e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-127ec4267f4316eaebc1b720065d1e752ebcb86542b5c9514d3dec5b0c19f359a56d3fd45576be1b4ef9cfc78814b041b3325af5f4686791c6e84d8dab995c8e"' :
                                            'id="xs-components-links-module-HomeModule-127ec4267f4316eaebc1b720065d1e752ebcb86542b5c9514d3dec5b0c19f359a56d3fd45576be1b4ef9cfc78814b041b3325af5f4686791c6e84d8dab995c8e"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});