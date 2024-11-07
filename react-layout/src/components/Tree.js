import "../css/Tree.css";
import {useState} from "react";

const Tree = (Tree) => {
    const[pruned, pruneTree] = useState(false); // Default the pruned variable to false.

    const doTreeJob = () => {
        console.log("Doing a tree job");
        pruneTree(true);
    };
    
    return (
        <section className="tree">
            <h3 className={pruned ? "pruned" : ""}>{Tree.name}</h3>
            <img src={Tree.image} alt={Tree.name}></img>
            <button onClick={doTreeJob}>Prune Tree</button> 
        </section>
    );
};

export default Tree;