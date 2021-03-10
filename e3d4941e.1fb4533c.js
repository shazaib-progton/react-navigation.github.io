(window.webpackJsonp=window.webpackJsonp||[]).push([[402],{459:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(6),i=(n(0),n(510)),o=n(514),c=n(515),s={id:"redux-integration",title:"Redux integration",sidebar_label:"Redux integration"},l={unversionedId:"redux-integration",id:"version-1.x/redux-integration",isDocsHomePage:!1,title:"Redux integration",description:'Some folks like to have their navigation state stored in the same place as the rest of their application state. Using Redux to store your state enables you to write custom actions that manipulate the navigation state directly, to be able to dispatch navigation actions from anywhere (sometimes in a "thunk" or "saga") and to persist the navigation state in the same way you would other Redux state (your mileage may vary on this). You can read more about other use cases in the replies to this tweet.',source:"@site/versioned_docs/version-1.x/redux-integration.md",slug:"/redux-integration",permalink:"/docs/1.x/redux-integration",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/redux-integration.md",version:"1.x",sidebar_label:"Redux integration",sidebar:"version-1.x/docs",previous:{title:"Screen tracking",permalink:"/docs/1.x/screen-tracking"},next:{title:"Overview",permalink:"/docs/1.x/custom-navigator-overview"}},p=[{value:"Warning!",id:"warning",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Step-by-step guide",id:"step-by-step-guide",children:[]},{value:"Full example",id:"full-example",children:[]},{value:"Mocking tests",id:"mocking-tests",children:[]},{value:"Handling the Hardware Back Button in Android",id:"handling-the-hardware-back-button-in-android",children:[]}],u={rightToc:p};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'Some folks like to have their navigation state stored in the same place as the rest of their application state. Using Redux to store your state enables you to write custom actions that manipulate the navigation state directly, to be able to dispatch navigation actions from anywhere (sometimes in a "thunk" or "saga") and to persist the navigation state in the same way you would other Redux state (your mileage may vary on this). You can read more about other use cases in the replies to ',Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://twitter.com/satya164/status/952291726521024512"}),"this tweet"),"."),Object(i.b)("h2",{id:"warning"},"Warning!"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"You probably do not need to do this!")," Storing your React Navigation state in your own Redux store is likely to give you a very difficult time if you don't know what you're doing. You lose out on some performance optimizations that React Navigation can do for you, for example. Please do not integrate your state into Redux without first ensuring that you can do what you need to do without it!"),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"To handle your app's navigation state in Redux, you can pass your own ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop to a navigator.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Once you pass your own navigation prop to the navigator, the default ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.x/navigation-prop"}),Object(i.b)("inlineCode",{parentName:"a"},"navigation"))," prop gets destroyed. You must construct your own ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.x/navigation-prop#state-the-screen-s-current-state-route"}),Object(i.b)("inlineCode",{parentName:"a"},"state")),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.x/navigation-prop#dispatch-send-an-action-to-the-router"}),Object(i.b)("inlineCode",{parentName:"a"},"dispatch")),", and ",Object(i.b)("inlineCode",{parentName:"p"},"addListener")," properties.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"state")," will be fed from the reducer assigned to handle navigation state and the ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch")," will be Redux's default ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch"),". Thus you will be able to dispatch normal redux actions using ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.navigation.dispatch(ACTION)"),", reducer will update the navigation state on the basis of dispatched action, the new navigation state will then be passed to the navigator.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"A middleware is needed so that any events that mutate the navigation state properly trigger the event listeners."))),Object(i.b)("h2",{id:"step-by-step-guide"},"Step-by-step guide"),Object(i.b)("p",null,"First, you need to add the ",Object(i.b)("inlineCode",{parentName:"p"},"react-navigation-redux-helpers")," package to your project."),Object(i.b)(o.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install react-navigation-redux-helpers\n"))),Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-navigation-redux-helpers\n")))),Object(i.b)("p",null,"With Redux, your app's state is defined by a reducer. Each navigation router effectively has a reducer, called ",Object(i.b)("inlineCode",{parentName:"p"},"getStateForAction"),". The following is a minimal example of how you might use navigators within a Redux application:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-es6"}),"import {\n  StackNavigator,\n  addNavigationHelpers,\n} from 'react-navigation';\nimport {\n  createStore,\n  applyMiddleware,\n  combineReducers,\n} from 'redux';\nimport {\n  createReduxBoundAddListener,\n  createReactNavigationReduxMiddleware,\n} from 'react-navigation-redux-helpers';\nimport { Provider, connect } from 'react-redux';\nimport React from 'react';\n\nconst AppNavigator = StackNavigator(AppRouteConfigs);\n\nconst initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));\n\nconst navReducer = (state = initialState, action) => {\n  const nextState = AppNavigator.router.getStateForAction(action, state);\n\n  // Simply return the original `state` if `nextState` is null or undefined.\n  return nextState || state;\n};\n\nconst appReducer = combineReducers({\n  nav: navReducer,\n  ...\n});\n\n// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener\nconst middleware = createReactNavigationReduxMiddleware(\n  \"root\",\n  state => state.nav,\n);\nconst addListener = createReduxBoundAddListener(\"root\");\n\nclass App extends React.Component {\n  render() {\n    return (\n      <AppNavigator navigation={addNavigationHelpers({\n        dispatch: this.props.dispatch,\n        state: this.props.nav,\n        addListener,\n      })} />\n    );\n  }\n}\n\nconst mapStateToProps = (state) => ({\n  nav: state.nav\n});\n\nconst AppWithNavigationState = connect(mapStateToProps)(App);\n\nconst store = createStore(\n  appReducer,\n  applyMiddleware(middleware),\n);\n\nclass Root extends React.Component {\n  render() {\n    return (\n      <Provider store={store}>\n        <AppWithNavigationState />\n      </Provider>\n    );\n  }\n}\n")),Object(i.b)("p",null,"Once you do this, your navigation state is stored within your Redux store, at which point you can fire navigation actions using your Redux dispatch function."),Object(i.b)("p",null,"Keep in mind that when a navigator is given a ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop, it relinquishes control of its internal state. That means you are now responsible for persisting its state, handling any deep linking, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#handling-the-hardware-back-button-in-android"}),"Handling the Hardware Back Button in Android"),", etc."),Object(i.b)("p",null,"Navigation state is automatically passed down from one navigator to another when you nest them. Note that in order for a child navigator to receive the state from a parent navigator, it should be defined as a ",Object(i.b)("inlineCode",{parentName:"p"},"screen"),"."),Object(i.b)("p",null,"Applying this to the example above, you could instead define ",Object(i.b)("inlineCode",{parentName:"p"},"AppNavigator")," to contain a nested ",Object(i.b)("inlineCode",{parentName:"p"},"TabNavigator")," as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-es6"}),"const AppNavigator = StackNavigator({\n  Home: { screen: MyTabNavigator },\n});\n")),Object(i.b)("p",null,"In this case, once you ",Object(i.b)("inlineCode",{parentName:"p"},"connect")," ",Object(i.b)("inlineCode",{parentName:"p"},"AppNavigator")," to Redux as is done in ",Object(i.b)("inlineCode",{parentName:"p"},"AppWithNavigationState"),", ",Object(i.b)("inlineCode",{parentName:"p"},"MyTabNavigator")," will automatically have access to navigation state as a ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop."),Object(i.b)("h2",{id:"full-example"},"Full example"),Object(i.b)("p",null,"There's a working example app with Redux ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation/tree/1.x/examples/ReduxExample"}),"here")," if you want to try it out yourself."),Object(i.b)("h2",{id:"mocking-tests"},"Mocking tests"),Object(i.b)("p",null,"To make jest tests work with your react-navigation app, you need to change the jest preset in the ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),", see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/jest/docs/tutorial-react-native.html#transformignorepatterns-customization"}),"here"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"jest": {\n  "preset": "react-native",\n  "transformIgnorePatterns": [\n    "node_modules/(?!(jest-)?react-native|react-navigation)"\n  ]\n}\n')),Object(i.b)("h2",{id:"handling-the-hardware-back-button-in-android"},"Handling the Hardware Back Button in Android"),Object(i.b)("p",null,"By using the following snippet, your nav component will be aware of the back button press actions and will correctly interact with your stack. This is really useful on Android."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-es6"}),'import React from "react";\nimport { BackHandler } from "react-native";\nimport { addNavigationHelpers, NavigationActions } from "react-navigation";\n\nconst AppNavigation = TabNavigator(\n  {\n    Home: { screen: HomeScreen },\n    Settings: { screen: SettingScreen }\n  }\n);\n\nclass ReduxNavigation extends React.Component {\n  componentDidMount() {\n    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);\n  }\n  componentWillUnmount() {\n    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);\n  }\n  onBackPress = () => {\n    const { dispatch, nav } = this.props;\n    if (nav.index === 0) {\n      return false;\n    }\n    dispatch(NavigationActions.back());\n    return true;\n  };\n\n  render() {\n    const { dispatch, nav } = this.props;\n    const navigation = addNavigationHelpers({\n      dispatch,\n      state: nav,\n      addListener,\n    });\n\n    return <AppNavigation navigation={navigation} />;\n  }\n}\n')))}d.isMDXComponent=!0},510:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},511:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},512:function(e,t,n){"use strict";var a=n(0),r=n(513);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},513:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},514:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(512),o=n(511),c=n(49),s=n.n(c),l=37,p=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,u=e.values,d=e.groupId,b=e.className,m=Object(i.a)(),v=m.tabGroupChoices,g=m.setTabGroupChoices,h=Object(a.useState)(c),f=h[0],y=h[1],O=Object(a.useState)(!1),j=O[0],w=O[1];if(null!=d){var N=v[d];null!=N&&N!==f&&u.some((function(e){return e.value===N}))&&y(N)}var x=function(e){y(e),null!=d&&g(d,e)},k=[],R=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},C=function(){w(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",R),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",R),window.removeEventListener("mousedown",C)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},b)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===t}),style:j?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),R(e)},onFocus:function(){return x(t)},onClick:function(){x(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},515:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);