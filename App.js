const heading = React.createElement("h1", { id: "heading" }, "Hello World using React");
const parent=React.createElement("div",{id:"parent"}, React.createElement("div",{id:"child"}, React.createElement("h1",{}, "h1 tag" ) ) );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(parent);
console.log(heading);