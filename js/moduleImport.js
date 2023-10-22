//Export and default

/* export  function html(){
    return "HyperText Markup Language";
};

export const css = () =>{
    return "Cascading Style Sheets";
};

export const Javascript = () =>{
    return "Dynamic functionality to web pages";
}; */

//export default html;
//export {css, Javascript};

// class import
 
export default class design {
    constructor(name,css,js){
        this.name = name;
        this.css = css;
        this.js = js;
    }
    web(){
        return `${this.name} HyperText Markup Language \n ${this.css} Cascading Style Sheets \n ${this.js} Cascading Style Sheets`;
        
    }
}