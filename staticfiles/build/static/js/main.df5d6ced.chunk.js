(this.webpackJsonpplanbrella=this.webpackJsonpplanbrella||[]).push([[0],{11:function(e,t,a){e.exports={formContainer:"SignInUpForm_formContainer__bped_",header:"SignInUpForm_header__3caXE",form:"SignInUpForm_form__1LNfT",input:"SignInUpForm_input__38e9W",submitButton:"SignInUpForm_submitButton__nL3nF",divider:"SignInUpForm_divider__2P-cK",signInText:"SignInUpForm_signInText__YNyTv",signUpText:"SignInUpForm_signUpText__12IXi",link:"SignInUpForm_link__1T7Hz"}},12:function(e,t,a){e.exports={Container:"TaskDetail_Container__1Is53",TextBox:"TaskDetail_TextBox__29VOZ",Title:"TaskDetail_Title__3jfKY",Description:"TaskDetail_Description__1wtug",DueDate:"TaskDetail_DueDate__3PlTq",Divider:"TaskDetail_Divider__1Zf4H",ButtonsContainer:"TaskDetail_ButtonsContainer__1fExW",Button:"TaskDetail_Button__2Se-k",CommentsSection:"TaskDetail_CommentsSection__1yXec",Comment:"TaskDetail_Comment__3HSVx",CommentOwner:"TaskDetail_CommentOwner__q-H_l",CommentText:"TaskDetail_CommentText__3YQVB",CommentDate:"TaskDetail_CommentDate__35FBK",Textarea:"TaskDetail_Textarea__12X9y",CommentButtons:"TaskDetail_CommentButtons___N_-H",OverdueDate:"TaskDetail_OverdueDate__Phetm",OverdueText:"TaskDetail_OverdueText__2B2Vc",HeaderRow:"TaskDetail_HeaderRow__1hEPU",TaskItem:"TaskDetail_TaskItem__2C4I3",TaskButton:"TaskDetail_TaskButton__3dX_U"}},17:function(e,t,a){e.exports={NavBar:"NavBar_NavBar__1amC6",NavLink:"NavBar_NavLink__34ons",NavLinkActive:"NavBar_NavLinkActive__AdSva",NavText:"NavBar_NavText__30Uk8",BrandContainer:"NavBar_BrandContainer__5g22E"}},18:function(e,t,a){e.exports={Container:"TaskEdit_Container__1ECqs",TextBox:"TaskEdit_TextBox__2ZdiK",Form:"TaskEdit_Form__1SJlJ",FormGroup:"TaskEdit_FormGroup__26eeU",Input:"TaskEdit_Input__2bbp1",Textarea:"TaskEdit_Textarea__1ZYoY",ButtonGroup:"TaskEdit_ButtonGroup__39QDJ",Button:"TaskEdit_Button__HhhMg"}},19:function(e,t,a){e.exports={Container:"Tasks_Container__8DBvF",TextBox:"Tasks_TextBox__2t5Qf",ScrollableContent:"Tasks_ScrollableContent__FLl0k",HeaderRow:"Tasks_HeaderRow__2HXbo",TaskItem:"Tasks_TaskItem__1cXCW",CreateButton:"Tasks_CreateButton__3d0kI",btn:"Tasks_btn__1WBn4",CheckIcon:"Tasks_CheckIcon__3QJkD",OverdueDate:"Tasks_OverdueDate__3h-Lb",OverdueText:"Tasks_OverdueText__3EHuu",TaskButton:"Tasks_TaskButton__14ull"}},20:function(e,t,a){e.exports={Container:"TaskCreateForm_Container__2DAEF",TextBox:"TaskCreateForm_TextBox__36p8E",Form:"TaskCreateForm_Form__6hCkF",FormGroup:"TaskCreateForm_FormGroup__3r-wu",Input:"TaskCreateForm_Input__1uaRw",Textarea:"TaskCreateForm_Textarea__3m8q_",ButtonGroup:"TaskCreateForm_ButtonGroup__7oEDq",Button:"TaskCreateForm_Button__EwMfB"}},35:function(e,t,a){e.exports={Container:"Home_Container__1yRpm",TextBox:"Home_TextBox__1PPGn"}},37:function(e,t,a){e.exports={CommentCreateForm:"CommentCreateForm_CommentCreateForm__3kg2i",Textarea:"CommentCreateForm_Textarea__14rYF",Button:"CommentCreateForm_Button__340gK",Error:"CommentCreateForm_Error__1AJLq"}},38:function(e,t,a){e.exports={Footer:"Footer_Footer__9Y8xx",Title:"Footer_Title__1Dv-1",Paragraph:"Footer_Paragraph__fbol8"}},48:function(e,t,a){e.exports={App:"App_App__16ZpL",content:"App_content__3La4L",contentShift:"App_contentShift__2vaSI"}},69:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);a(64);var n=a(0),s=a(22),c=a.n(s),r=(a(69),a(4)),i=a(6),o=a.n(i),l=a(101),d=a(95),j=a(100),u=a(10),m=a(9),b=a.n(m),x=a.p+"static/media/logo.5ef7ff6e.jpg",h=a(17),O=a.n(h);b.a.defaults.baseURL="/api",b.a.defaults.headers.post["Content-Type"]="multipart/form-data",b.a.defaults.withCredentials=!0;const p=b.a.create(),_=b.a.create();var v=a(60);const g=()=>{localStorage.removeItem("refreshTokenTimestamp")};var k=a(1);const T=Object(n.createContext)(),C=Object(n.createContext)(),N=()=>Object(n.useContext)(T),D=()=>Object(n.useContext)(C),f=e=>{let{children:t}=e;const[a,s]=Object(n.useState)(null),c=Object(r.o)();return Object(n.useEffect)((()=>{(async()=>{try{const{data:e}=await _.get("/dj-rest-auth/user/");s(e)}catch(e){console.log("Error fetching user data:",e)}})()}),[]),Object(n.useMemo)((()=>{p.interceptors.request.use((async e=>{if(localStorage.getItem("refreshTokenTimestamp"))try{await b.a.post("/dj-rest-auth/token/refresh/")}catch(t){return s((e=>(e&&c("/sign-in"),null))),g(),e}return e}),(e=>Promise.reject(e))),_.interceptors.response.use((e=>e),(async e=>{var t;if(401===(null===(t=e.response)||void 0===t?void 0:t.status)){try{await b.a.post("/dj-rest-auth/token/refresh/")}catch(e){s((e=>(e&&c("/sign-in"),null))),g()}return b()(e.config)}return Promise.reject(e)}))}),[c]),Object(k.jsx)(T.Provider,{value:a,children:Object(k.jsx)(C.Provider,{value:s,children:t})})};var y=e=>{let{onToggle:t}=e;const[a,s]=Object(n.useState)(!1),c=N(),i=D(),o=Object(r.o)(),m=()=>{s(!1),t(!1)},h=Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(u.c,{className:e=>{let{isActive:t}=e;return t?O.a.NavLinkActive:O.a.NavLink},to:"/tasks",onClick:m,children:"Tasks"}),Object(k.jsx)("span",{className:O.a.NavLink,onClick:async()=>{try{await b.a.post("/dj-rest-auth/logout/"),localStorage.removeItem("token"),i(null),m(),o("/")}catch(e){}},children:"Sign Out"}),Object(k.jsx)("span",{className:O.a.NavText,children:null===c||void 0===c?void 0:c.username})]}),p=Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(u.c,{className:e=>{let{isActive:t}=e;return t?O.a.NavLinkActive:O.a.NavLink},to:"/sign-in",onClick:m,children:"Sign In"}),Object(k.jsx)(u.c,{className:e=>{let{isActive:t}=e;return t?O.a.NavLinkActive:O.a.NavLink},to:"/sign-up",onClick:m,children:"Sign Up"})]});return Object(k.jsx)(l.a,{className:O.a.NavBar,expand:"md",fixed:"top",expanded:a,children:Object(k.jsxs)(d.a,{className:"d-flex justify-content-center",children:[Object(k.jsx)(u.c,{to:"/",className:O.a.BrandContainer,onClick:m,children:Object(k.jsx)(l.a.Brand,{children:Object(k.jsx)("img",{src:x,alt:"logo",height:"80",width:"80"})})}),Object(k.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav",onClick:()=>{s(!a),t(!a)}}),Object(k.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(k.jsxs)(j.a,{className:"mx-auto text-center",children:[Object(k.jsx)(u.c,{className:e=>{let{isActive:t}=e;return t?O.a.NavLinkActive:O.a.NavLink},to:"/",onClick:m,children:"Home"}),c?h:p]})})]})})},w=a(35),S=a.n(w);var B=()=>{const e=N();return Object(k.jsx)("div",{className:S.a.Container,children:Object(k.jsxs)("div",{className:S.a.TextBox,children:[Object(k.jsx)("h2",{children:e?"Planbrella, Productivity App":"Welcome to Planbrella"}),e?Object(k.jsxs)("p",{children:["Welcome back, ",e.username,"!",Object(k.jsx)("br",{}),"Organize your tasks efficiently and stay on top of your schedule.",Object(k.jsx)("br",{}),"You can manage your tasks by visiting the"," ",Object(k.jsx)(u.c,{to:"/tasks",className:S.a.Link,children:"Tasks page"}),"."]}):Object(k.jsxs)("p",{children:["Your premier solution for organizing tasks both personally and professionally.",Object(k.jsx)("br",{}),"If you already have an account, please"," ",Object(k.jsx)(u.c,{to:"/sign-in",className:S.a.Link,children:"sign in here"}),". New users can create an account by"," ",Object(k.jsx)(u.c,{to:"/sign-up",className:S.a.Link,children:"signing up here"}),"."]})]})})},F=a(99),I=a(96),E=a(97),L=a(11),A=a.n(L);var P=function(){var e,t,a;const s=D();(e=>{const t=Object(r.o)();Object(n.useEffect)((()=>{(async()=>{try{await b.a.post("/dj-rest-auth/token/refresh/"),"loggedIn"===e&&t("/")}catch(a){"loggedOut"===e&&t("/sign-in")}})()}),[t,e])})("loggedIn");const[c,i]=Object(n.useState)({username:"",password:""}),{username:o,password:l}=c,[j,m]=Object(n.useState)({}),x=Object(r.o)(),h=e=>{i({...c,[e.target.name]:e.target.value})};return Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{className:A.a.header,children:"Sign In"}),Object(k.jsxs)(d.a,{className:A.a.formContainer,children:[Object(k.jsxs)(F.a,{onSubmit:async e=>{e.preventDefault();try{const{data:e}=await b.a.post("/dj-rest-auth/login/",c);s(e.user),(e=>{const t=Object(v.a)(null===e||void 0===e?void 0:e.refresh_token).exp;localStorage.setItem("refreshTokenTimestamp",t)})(e),x("/")}catch(a){var t;m(null===(t=a.response)||void 0===t?void 0:t.data)}},children:[Object(k.jsxs)(F.a.Group,{controlId:"username",children:[Object(k.jsx)(F.a.Label,{className:"d-none",children:"Username"}),Object(k.jsx)(F.a.Control,{type:"text",placeholder:"Enter username",name:"username",value:o,onChange:h,className:A.a.input})]}),null===(e=j.username)||void 0===e?void 0:e.map(((e,t)=>Object(k.jsx)(I.a,{variant:"warning",children:e},t))),Object(k.jsxs)(F.a.Group,{controlId:"password",className:"mt-3",children:[Object(k.jsx)(F.a.Label,{className:"d-none",children:"Password"}),Object(k.jsx)(F.a.Control,{type:"password",placeholder:"Enter password",name:"password",value:l,onChange:h,className:A.a.input})]}),null===(t=j.password)||void 0===t?void 0:t.map(((e,t)=>Object(k.jsx)(I.a,{variant:"warning",children:e},t))),null===(a=j.non_field_errors)||void 0===a?void 0:a.map(((e,t)=>Object(k.jsx)(I.a,{variant:"warning",className:"mt-3",children:e},t))),Object(k.jsx)(E.a,{variant:"primary",type:"submit",className:A.a.submitButton,children:"Sign In"})]}),Object(k.jsx)("div",{className:A.a.divider,children:"or"}),Object(k.jsxs)("p",{className:A.a.signUpText,children:["Don't have an account?"," ",Object(k.jsx)(u.b,{to:"/sign-up",className:A.a.link,children:"Sign up here!"})]})]})]})};var G=function(){var e,t,a,s;const[c,i]=Object(n.useState)({username:"",password1:"",password2:""}),{username:o,password1:l,password2:j}=c,[m,x]=Object(n.useState)({}),h=Object(r.o)(),O=e=>{i({...c,[e.target.name]:e.target.value})};return Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{className:A.a.header,children:"Sign Up"}),Object(k.jsxs)(d.a,{className:A.a.formContainer,children:[Object(k.jsxs)(F.a,{onSubmit:async e=>{e.preventDefault();try{await b.a.post("/dj-rest-auth/registration/",c),h("/sign-in")}catch(a){var t;x(null===(t=a.response)||void 0===t?void 0:t.data)}},children:[Object(k.jsxs)(F.a.Group,{controlId:"username",children:[Object(k.jsx)(F.a.Label,{className:"d-none",children:"Username"}),Object(k.jsx)(F.a.Control,{type:"text",placeholder:"Enter username",name:"username",value:o,onChange:O,className:A.a.input})]}),null===(e=m.username)||void 0===e?void 0:e.map(((e,t)=>Object(k.jsx)(I.a,{variant:"warning",children:e},t))),Object(k.jsxs)(F.a.Group,{controlId:"password1",className:"mt-3",children:[Object(k.jsx)(F.a.Label,{className:"d-none",children:"Password"}),Object(k.jsx)(F.a.Control,{type:"password",placeholder:"Enter password",name:"password1",value:l,onChange:O,className:A.a.input})]}),null===(t=m.password1)||void 0===t?void 0:t.map(((e,t)=>Object(k.jsx)(I.a,{variant:"warning",children:e},t))),Object(k.jsxs)(F.a.Group,{controlId:"password2",className:"mt-3",children:[Object(k.jsx)(F.a.Label,{className:"d-none",children:"Confirm Password"}),Object(k.jsx)(F.a.Control,{type:"password",placeholder:"Confirm password",name:"password2",value:j,onChange:O,className:A.a.input})]}),null===(a=m.password2)||void 0===a?void 0:a.map(((e,t)=>Object(k.jsx)(I.a,{variant:"warning",children:e},t))),null===(s=m.non_field_errors)||void 0===s?void 0:s.map(((e,t)=>Object(k.jsx)(I.a,{variant:"warning",className:"mt-3",children:e},t))),Object(k.jsx)(E.a,{variant:"primary",type:"submit",className:A.a.submitButton,children:"Sign Up"})]}),Object(k.jsx)("div",{className:A.a.divider,children:"or"}),Object(k.jsxs)("p",{className:A.a.signInText,children:["Already have an account?"," ",Object(k.jsx)(u.b,{to:"/sign-in",className:A.a.link,children:"Sign in here!"})]})]})]})},H=a(63),U=a(98),q=a(19),R=a.n(q);var Y=()=>{const[e,t]=Object(n.useState)([]),[a,s]=Object(n.useState)(!1),[c,r]=Object(n.useState)(null);Object(n.useEffect)((()=>{(async()=>{try{const{data:e}=await _.get("/tasks/"),a=e.sort(((e,t)=>new Date(e.due_date)-new Date(t.due_date)));t(a)}catch(e){}})()}),[]);const i=()=>{s(!1),r(null)};return Object(k.jsxs)("div",{className:R.a.Container,children:[Object(k.jsxs)("div",{className:R.a.TextBox,children:[Object(k.jsxs)("div",{className:R.a.ScrollableContent,children:[Object(k.jsxs)("div",{className:R.a.HeaderRow,children:[Object(k.jsx)("div",{children:"Title"}),Object(k.jsx)("div",{children:"Due Date"}),Object(k.jsx)("div",{children:"View Task"}),Object(k.jsx)("div",{children:"Edit Task"}),Object(k.jsx)("div",{children:"Delete Task"})]}),e.length>0?e.map((e=>Object(k.jsxs)("div",{className:R.a.TaskItem,children:[Object(k.jsxs)("div",{children:[e.title," ","done"===e.state&&Object(k.jsx)(H.a,{})]}),Object(k.jsxs)("div",{className:e.is_overdue?"".concat(R.a.OverdueDate):"",children:[new Date(e.due_date).toLocaleDateString()," ",e.is_overdue&&Object(k.jsx)("span",{className:R.a.OverdueText,children:"Overdue"})]}),Object(k.jsx)("div",{children:Object(k.jsx)(u.b,{to:"/tasks/".concat(e.id),className:"btn btn-primary ".concat(R.a.TaskButton),children:"View"})}),Object(k.jsx)("div",{children:Object(k.jsx)(u.b,{to:"/tasks/".concat(e.id,"/edit"),className:"btn btn-warning ".concat(R.a.TaskButton),children:"Edit"})}),Object(k.jsx)("div",{children:Object(k.jsx)("button",{className:"btn btn-danger ".concat(R.a.TaskButton),onClick:()=>(e=>{r(e),s(!0)})(e),children:"Delete"})})]},e.id))):Object(k.jsx)("p",{children:"No tasks available."})]}),Object(k.jsx)("div",{className:R.a.CreateButton,children:Object(k.jsx)(u.c,{to:"/tasks/create",className:"btn btn-success",children:"Create Task"})})]}),Object(k.jsxs)(U.a,{show:a,onHide:i,children:[Object(k.jsx)(U.a.Header,{closeButton:!0,children:Object(k.jsx)(U.a.Title,{children:"Confirm Delete"})}),Object(k.jsx)(U.a.Body,{children:"Are you sure you want to delete this task? Removing a task is permanent."}),Object(k.jsxs)(U.a.Footer,{children:[Object(k.jsx)(E.a,{variant:"secondary",onClick:i,children:"Cancel"}),Object(k.jsx)(E.a,{variant:"danger",onClick:async()=>{try{await b.a.delete("/tasks/".concat(c.id,"/")),t(e.filter((e=>e.id!==c.id))),s(!1)}catch(a){console.error("Error deleting task:",a)}},children:"Delete"})]})]})]})},J=a(20),M=a.n(J);var X=()=>{const[e,t]=Object(n.useState)(""),[a,s]=Object(n.useState)(""),[c,i]=Object(n.useState)(""),[o,l]=Object(n.useState)({}),d=Object(r.o)();return Object(k.jsx)("div",{className:M.a.Container,children:Object(k.jsxs)("div",{className:M.a.TextBox,children:[Object(k.jsx)("h2",{children:"Create a New Task"}),Object(k.jsxs)("form",{onSubmit:async t=>{t.preventDefault();const n=(new Date).toISOString().split("T")[0],s={};if(e.trim()||(s.title="Title is required and cannot be blank."),a.trim()||(s.description="Description is required and cannot be blank."),(!c||c<n)&&(s.dueDate="Due Date must be today or later."),Object.keys(s).length>0)l(s);else try{const t={title:e,description:a,due_date:new Date(c).toISOString()};await b.a.post("/tasks/",t,{headers:{"Content-Type":"application/json"}}),d("/tasks")}catch(r){console.error("Error creating task:",r.response?r.response.data:r.message)}},className:M.a.Form,children:[Object(k.jsxs)("div",{className:M.a.FormGroup,children:[Object(k.jsx)("label",{htmlFor:"title",children:"Title:"}),Object(k.jsx)("input",{type:"text",id:"title",value:e,onChange:e=>t(e.target.value),required:!0,className:M.a.Input}),o.title&&Object(k.jsx)(I.a,{variant:"danger",children:o.title})]}),Object(k.jsxs)("div",{className:M.a.FormGroup,children:[Object(k.jsx)("label",{htmlFor:"description",children:"Description:"}),Object(k.jsx)("textarea",{id:"description",value:a,onChange:e=>s(e.target.value),required:!0,className:M.a.Textarea}),o.description&&Object(k.jsx)(I.a,{variant:"danger",children:o.description})]}),Object(k.jsxs)("div",{className:M.a.FormGroup,children:[Object(k.jsx)("label",{htmlFor:"dueDate",children:"Due Date:"}),Object(k.jsx)("input",{type:"date",id:"dueDate",value:c,onChange:e=>i(e.target.value),required:!0,className:M.a.Input}),o.dueDate&&Object(k.jsx)(I.a,{variant:"danger",children:o.dueDate})]}),Object(k.jsx)("div",{className:M.a.ButtonGroup,children:Object(k.jsx)("button",{type:"submit",className:"btn btn-success ".concat(M.a.Button),children:"Create Task"})})]})]})})},V=a(62),W=a(37),K=a.n(W);var Z=e=>{let{taskId:t,onCommentAdded:a}=e;const[s,c]=Object(n.useState)(""),[r,i]=Object(n.useState)(null),[o,l]=Object(n.useState)(!0);Object(n.useEffect)((()=>()=>{l(!1)}),[]);return Object(k.jsx)("div",{className:K.a.CommentCreateForm,children:Object(k.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),s.trim())try{const{data:e}=await b.a.post("/comments/",{text:s,task:t});o&&(a(e),c(""),i(null))}catch(n){console.error("Error posting comment:",n),o&&i("Failed to post comment. Please try again.")}else i("Comment cannot be empty or whitespace.")},children:[Object(k.jsx)("textarea",{className:K.a.Textarea,value:s,onChange:e=>c(e.target.value),placeholder:"Add a comment..."}),r&&Object(k.jsx)("div",{className:K.a.Error,children:r}),Object(k.jsx)("button",{type:"submit",className:"btn btn-primary ".concat(K.a.Button),children:"Post"})]})})},Q=a(12),z=a.n(Q);var $=()=>{const{id:e}=Object(r.q)(),t=Object(r.o)(),[a,s]=Object(n.useState)(null),[c,i]=Object(n.useState)([]),[o,l]=Object(n.useState)(!0),[d,j]=Object(n.useState)(1),[u,m]=Object(n.useState)(!1),[x,h]=Object(n.useState)(null),[O,p]=Object(n.useState)(null),[_,v]=Object(n.useState)(""),[g,T]=Object(n.useState)(""),[C,N]=Object(n.useState)(!1),D=Object(n.useCallback)((async()=>{try{const{data:t}=await b.a.get("/comments/?task=".concat(e,"&page=").concat(d));i((e=>[...e,...t.results])),t.next||l(!1),j((e=>e+1))}catch(t){console.error("Error fetching comments:",t)}}),[e,d]);Object(n.useEffect)((()=>{(async()=>{try{const{data:t}=await b.a.get("/tasks/".concat(e,"/"));s(t)}catch(t){console.error("Error fetching task:",t)}})(),D()}),[e,D]);const f=()=>{m(!1),h(null)},y=()=>{N(!1)},w=()=>{p(null),v(""),T("")},S=async()=>{if(_.trim().length>0)try{await b.a.put("/comments/".concat(O,"/"),{text:_}),i((e=>e.map((e=>e.id===O?{...e,text:_}:e)))),w()}catch(e){console.error("Error updating comment:",e)}else T("Comment cannot be empty or whitespace.")};return Object(k.jsxs)("div",{className:z.a.Container,children:[Object(k.jsxs)("div",{className:z.a.TextBox,children:[Object(k.jsx)("div",{className:z.a.Title,children:null===a||void 0===a?void 0:a.title}),Object(k.jsx)("div",{className:z.a.Description,children:null===a||void 0===a?void 0:a.description}),Object(k.jsx)("hr",{className:z.a.Divider}),Object(k.jsxs)("div",{className:null!==a&&void 0!==a&&a.is_overdue?"".concat(z.a.OverdueDate):z.a.DueDate,children:["Due Date: ",new Date(null===a||void 0===a?void 0:a.due_date).toLocaleDateString(),(null===a||void 0===a?void 0:a.is_overdue)&&Object(k.jsx)("span",{className:z.a.OverdueText,children:"Overdue"})]}),Object(k.jsxs)("div",{className:z.a.ButtonsContainer,children:[Object(k.jsx)("button",{onClick:()=>{t("/tasks/".concat(e,"/edit"))},className:"btn btn-warning ".concat(z.a.Button),children:"Edit"}),Object(k.jsx)("button",{onClick:()=>{N(!0)},className:"btn btn-danger ".concat(z.a.Button),children:"Delete"})]})]}),Object(k.jsxs)("div",{className:z.a.CommentsSection,children:[Object(k.jsx)(Z,{taskId:e,onCommentAdded:e=>{i((t=>[e,...t]))}}),Object(k.jsx)(V.a,{dataLength:c.length,next:D,hasMore:o,loader:Object(k.jsx)("h4",{children:"Loading..."}),endMessage:Object(k.jsx)("p",{style:{textAlign:"center"},children:Object(k.jsx)("b",{children:"No more comments"})}),children:c.map((e=>Object(k.jsxs)("div",{className:z.a.Comment,children:[Object(k.jsx)("div",{className:z.a.CommentOwner,children:e.owner}),O===e.id?Object(k.jsxs)("div",{children:[Object(k.jsx)("input",{type:"text",value:_,onChange:e=>v(e.target.value),className:"form-control"}),g&&Object(k.jsx)("div",{className:"text-danger",children:g}),Object(k.jsx)("button",{className:"btn btn-primary",onClick:S,children:"Save"}),Object(k.jsx)("button",{className:"btn btn-secondary",onClick:w,children:"Cancel"})]}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:z.a.CommentText,children:e.text}),Object(k.jsx)("div",{className:z.a.CommentDate,children:new Date(e.created_at).toLocaleDateString()}),Object(k.jsxs)("div",{className:z.a.CommentButtons,children:[Object(k.jsx)("button",{className:"btn btn-warning",onClick:()=>(e=>{p(e.id),v(e.text),T("")})(e),children:"Edit"}),Object(k.jsx)("button",{className:"btn btn-danger",onClick:()=>(e=>{h(e),m(!0)})(e),children:"Delete"})]})]})]},e.id)))})]}),Object(k.jsxs)(U.a,{show:u,onHide:f,children:[Object(k.jsx)(U.a.Header,{closeButton:!0,children:Object(k.jsx)(U.a.Title,{children:"Confirm Delete"})}),Object(k.jsx)(U.a.Body,{children:"Are you sure you want to delete this comment? Removing a comment is permanent."}),Object(k.jsxs)(U.a.Footer,{children:[Object(k.jsx)(E.a,{variant:"secondary",onClick:f,children:"Cancel"}),Object(k.jsx)(E.a,{variant:"danger",onClick:async()=>{if(x)try{await b.a.delete("/comments/".concat(x.id,"/")),i((e=>e.filter((e=>e.id!==x.id)))),f()}catch(e){console.error("Error deleting comment:",e)}},children:"Delete"})]})]}),Object(k.jsxs)(U.a,{show:C,onHide:y,children:[Object(k.jsx)(U.a.Header,{closeButton:!0,children:Object(k.jsx)(U.a.Title,{children:"Confirm Delete"})}),Object(k.jsx)(U.a.Body,{children:"Are you sure you want to delete this task? Removing a task is permanent."}),Object(k.jsxs)(U.a.Footer,{children:[Object(k.jsx)(E.a,{variant:"secondary",onClick:y,children:"Cancel"}),Object(k.jsx)(E.a,{variant:"danger",onClick:async()=>{try{await b.a.delete("/tasks/".concat(e,"/")),t("/tasks")}catch(a){console.error("Error deleting task:",a)}},children:"Delete"})]})]})]})},ee=a(18),te=a.n(ee);var ae=()=>{const{id:e}=Object(r.q)(),t=Object(r.o)(),[a,s]=Object(n.useState)(""),[c,i]=Object(n.useState)(""),[o,l]=Object(n.useState)(""),[d,j]=Object(n.useState)({});Object(n.useEffect)((()=>{(async()=>{try{const{data:t}=await b.a.get("/tasks/".concat(e,"/"));s(t.title),i(t.description);const a=new Date(t.due_date);a.setDate(a.getDate()+1),l(a.toISOString().split("T")[0])}catch(t){console.error("Error fetching task:",t)}})()}),[e]);return Object(k.jsx)("div",{className:te.a.Container,children:Object(k.jsxs)("div",{className:te.a.TextBox,children:[Object(k.jsx)("h2",{children:"Edit Task"}),Object(k.jsxs)("form",{onSubmit:async n=>{n.preventDefault();const s=(new Date).toISOString().split("T")[0],r={};if(a.trim()||(r.title="Title is required and cannot be blank."),c.trim()||(r.description="Description is required and cannot be blank."),(!o||o<s)&&(r.dueDate="Due Date must be today or later."),Object.keys(r).length>0)j(r);else try{const n={title:a,description:c,due_date:new Date(o).toISOString()};await b.a.put("/tasks/".concat(e,"/"),n,{headers:{"Content-Type":"application/json"}}),t("/tasks")}catch(i){console.error("Error updating task:",i.response?i.response.data:i.message)}},className:te.a.Form,children:[Object(k.jsxs)("div",{className:te.a.FormGroup,children:[Object(k.jsx)("label",{htmlFor:"title",children:"Title:"}),Object(k.jsx)("input",{type:"text",id:"title",value:a,onChange:e=>s(e.target.value),required:!0,className:te.a.Input}),d.title&&Object(k.jsx)(I.a,{variant:"danger",children:d.title})]}),Object(k.jsxs)("div",{className:te.a.FormGroup,children:[Object(k.jsx)("label",{htmlFor:"description",children:"Description:"}),Object(k.jsx)("textarea",{id:"description",value:c,onChange:e=>i(e.target.value),required:!0,className:te.a.Textarea}),d.description&&Object(k.jsx)(I.a,{variant:"danger",children:d.description})]}),Object(k.jsxs)("div",{className:te.a.FormGroup,children:[Object(k.jsx)("label",{htmlFor:"dueDate",children:"Due Date:"}),Object(k.jsx)("input",{type:"date",id:"dueDate",value:o,onChange:e=>l(e.target.value),required:!0,className:te.a.Input}),d.dueDate&&Object(k.jsx)(I.a,{variant:"danger",children:d.dueDate})]}),Object(k.jsxs)("div",{className:te.a.ButtonGroup,children:[Object(k.jsx)("button",{type:"submit",className:"btn btn-success ".concat(te.a.Button),children:"Save"}),Object(k.jsx)("button",{type:"button",onClick:()=>{t("/tasks")},className:"btn btn-danger ".concat(te.a.Button),children:"Cancel"})]})]})]})})},ne=a(38),se=a.n(ne);var ce=()=>Object(k.jsxs)("footer",{className:se.a.Footer,children:[Object(k.jsx)("h3",{className:se.a.Title,children:"Contact Planbrella \xa9"}),Object(k.jsx)("p",{className:se.a.Paragraph,children:"Phone Number: 08-123 45 67"}),Object(k.jsx)("p",{className:se.a.Paragraph,children:"E-mail: admin@planbrella.com"})]}),re=a(48),ie=a.n(re);var oe=()=>{const[e,t]=Object(n.useState)(!1),a=Object(r.m)(),s=N(),[c,i]=Object(n.useState)("120px");return Object(n.useEffect)((()=>{t(!1)}),[a]),Object(n.useEffect)((()=>{i(s?e?"180px":"120px":e?"140px":"120px")}),[s,e]),{menuOpen:e,setMenuOpen:t,paddingTop:c}};var le=function(){const{menuOpen:e,setMenuOpen:t,paddingTop:a}=oe();return Object(k.jsxs)("div",{className:o()(ie.a.App,{[ie.a.contentShift]:e}),children:[Object(k.jsx)(y,{onToggle:e=>t(e)})," ",Object(k.jsxs)("div",{className:ie.a.content,style:{paddingTop:a,flex:1},children:[" ",Object(k.jsxs)(r.c,{children:[Object(k.jsx)(r.a,{path:"/",element:Object(k.jsx)(B,{})})," ",Object(k.jsx)(r.a,{path:"/sign-in",element:Object(k.jsx)(P,{})})," ",Object(k.jsx)(r.a,{path:"/sign-up",element:Object(k.jsx)(G,{})})," ",Object(k.jsx)(r.a,{path:"/tasks",element:Object(k.jsx)(Y,{})})," ",Object(k.jsx)(r.a,{path:"/tasks/create",element:Object(k.jsx)(X,{})})," ",Object(k.jsx)(r.a,{path:"/tasks/:id",element:Object(k.jsx)($,{})})," ",Object(k.jsx)(r.a,{path:"/tasks/:id/edit",element:Object(k.jsx)(ae,{})})," ",Object(k.jsx)(r.a,{path:"*",element:Object(k.jsx)("p",{children:"Page not found!"})})," "]})]}),Object(k.jsx)(ce,{})," "]})};c.a.render(Object(k.jsx)(u.a,{children:Object(k.jsx)(f,{children:Object(k.jsx)(le,{})})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.df5d6ced.chunk.js.map