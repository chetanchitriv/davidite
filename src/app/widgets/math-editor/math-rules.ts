export class MathRules {
    private readonly _symbols = [
        {
            title:"Basic",
            items:[
                {
                    symbol: "x",
                    fontsize: "font-sm",
                    laTexValue: "x",
                    actionType: "write",
                    type: "btn",
                    category : "abc"
                },
                {
                    symbol: "&#945;",
                    laTexValue: "\\alpha",
                    actionType: "write",
                    type: "btn",
                    category: "abc"
                },
                {
                    symbol: "&#946;",
                    laTexValue: "\\beta",
                    actionType: "write",
                    type: "btn",
                    category: "abc"
                },
                {
                    symbol: "&#947;",
                    laTexValue: "\\gamma",
                    actionType: "write",
                    type: "btn",
                    category: "abc"
                },
                {
                    symbol: "&#9633;",
                    fontsize: "font-lg",
                    sup:"2",
                    laTexValue: "^2",
                    actionType:"write",
                    type: "btn",
                    category: "math"
                },
                {
                    symbol: "x",
                    sup: "&#9633;",
                    laTexValue: "^",
                    actionType: "cmd",
                    type: "btn",
                    category: "math"
                },
                {
                    symbol: "&#8730;",
                    laTexValue: "\\sqrt",
                    actionType: "cmd",
                    type: "btn",
                    category: "math"
                },
                {
                    symbol: "&#9633; &#8730;",
                    laTexValue: "\\nthroot",
                    actionType: "cmd",
                    type: "btn",
                    category: "math"
                },
                {
                    symbol: "&#8723;",
                    laTexValue: "\\pm",
                    actionType: "cmd",
                    type: "btn",
                    category: "abc"
                },
                {
                    symbol: "+",
                    laTexValue: "+",
                    actionType: "cmd",
                    type: "btn",
                    category: "math"
                },
                {
                    symbol: "-",
                    laTexValue: "-",
                    actionType: "cmd",
                    type: "btn",
                    category: "math"
                },
                {
                    symbol: "*",
                    laTexValue: "\\times",
                    actionType: "cmd",
                    type: "btn",
                    category: "math"
                },
                {
                    symbol: "&#247;",
                    laTexValue: "\\div",
                    actionType: "cmd",
                    type: "btn",
                    category: "math"
                },
                {
                    symbol: "/",
                    laTexValue: "\\frac",
                    actionType: "cmd",
                    type: "btn",
                    category: "math"
                },
                {
                    symbol: "&#60;",
                    laTexValue: "\\lt",
                    actionType: "cmd",
                    type: "btn",
                    category: "math"
                },
                {
                    symbol: "&#62;",
                    laTexValue: "\\gt",
                    actionType: "cmd",
                    type: "btn",
                    category: "math"
                },
                {
                    symbol: "&#8804;",
                    laTexValue: "\\le",
                    actionType: "cmd",
                    type: "btn",
                    category: "math"
                },

                {
                    symbol: "&#8805;",
                    laTexValue: "\\ge",
                    actionType: "cmd",
                    type: "btn",
                    category: "math"
                },
                {
                    symbol: "&#8512;",
                    laTexValue: "\\sum _{n=0}^ { }\\left( \\right)",
                    actionType: "write",
                    type: "btn",
                    category: "math"
                },
                {
                    symbol: "&#8747;",
                    laTexValue: "\\int",
                    actionType: "cmd",
                    type: "btn",
                    category: "math"
                },
                {
                    symbol: "&#40; &#41;",
                    laTexValue: "(",
                    actionType: "cmd",
                    type: "btn",
                    category: "abc"
                },
                {
                    symbol: " &#123; &#125;",
                    laTexValue: "{",
                    actionType: "cmd",
                    type: "btn",
                    category: "abc"
                },
                {
                    symbol: " &#91; &#93;",
                    laTexValue: "[",
                    actionType: "cmd",
                    type: "btn",
                    category: "abc"
                },
                {
                    symbol: "log",
                    laTexValue: "\\log_{} \\left ( \\right )",
                    actionType: "write",
                    sub: "&#9633;",
                    type: "btn",
                    category: "math"
                },
                {
                    symbol: "&#8734;",
                    fontsize: "font-md",
                    laTexValue: "\\infty",
                    actionType: "write",
                    type: "btn",
                    category: "abc"
                },
                {
                    symbol: "&#46;",
                    fontsize: "font-md",
                    laTexValue: "\\cdot",
                    actionType: "write",
                    type: "btn",
                    category: "abc"
                },
                {
                    symbol: "&#8594;",
                    fontsize: "font-md",
                    laTexValue: "\\rightarrow",
                    actionType: "write",
                    type: "btn",
                    category: "abc"
                },
                {
                    symbol: "&#8592;",
                    fontsize: "font-md",
                    laTexValue: "\\leftarrow",
                    actionType: "write",
                    type: "btn",
                    category: "abc"
                },

                {
                    symbol: "&#952;",
                    fontsize: "font-md",
                    laTexValue: "\\theta",
                    actionType: "write",
                    type: "btn",
                    category: "trig"
                },
                {
                    symbol: "f(x)",
                    fontsize: "font-md",
                    laTexValue: "f \\left ( x \\right )",
                    actionType: "write",
                    type: "btn",
                    category: "math"
                },
                {
                    symbol: "d/dx",
                   // sup:"d",
                   // sub:"dx",
                    fontsize: "font-md",
                    laTexValue: "\\frac {d} {dx}",
                    actionType: "write",
                    type: "btn",
                    category: "math"
                },
                {
                    symbol: "sin",
                    laTexValue: "\\sin \\left ( \\right )",
                    type: "btn",
                    actionType: "write",
                    category:"trig"
                },
                {
                    symbol: "cos",
                    laTexValue: "\\cos \\left ( \\right )",
                    type: "btn",
                    actionType: "write",
                    category: "trig"
                },
                {
                    symbol: "tan",
                    laTexValue: "\\tan \\left ( \\right )",
                    type: "btn",
                    actionType: "write",
                    category: "trig"
                },
                {
                    symbol: "sec",
                    laTexValue: "\\sec \\left ( \\right )",
                    type: "btn",
                    actionType: "write",
                    category: "trig"
                },
                {
                    symbol: "csc",
                    laTexValue: "\\csc \\left ( \\right )",
                    type: "btn",
                    actionType: "write",
                    category: "trig"
                },
                {
                    symbol: "cot",
                    laTexValue: "\\cot \\left ( \\right )",
                    type: "btn",
                    actionType: "write",
                    category: "trig"
                },
                {
                    symbol: "sinh",
                    laTexValue: "\\sinh \\left ( \\right )",
                    type: "btn",
                    actionType: "write",
                    category: "trig"
                },
                {
                    symbol: "cosh",
                    laTexValue: "\\cosh \\left ( \\right )",
                    type: "btn",
                    actionType: "write",
                    category: "trig"
                },
                {
                    symbol: "tanh",
                    laTexValue: "\\tanh \\left ( \\right )",
                    type: "btn",
                    actionType: "write",
                    category: "trig"
                },
                {
                    symbol: "sech",
                    laTexValue: "\\sech \\left ( \\right )",
                    type: "btn",
                    actionType: "write",
                    category: "trig"
                },
                {
                    symbol: "csch",
                    laTexValue: "\\csch \\left ( \\right )",
                    type: "btn",
                    actionType: "write",
                    category: "trig"
                },
                {
                    symbol: "coth",
                    laTexValue: "\\coth \\left ( \\right )",
                    type: "btn",
                    actionType: "write",
                    category: "trig"
                },

            ]
        },
        {
            title: "Terms",
            items: [

            ]
        },
        {
            title: "Constants",
            items: [
                {
                    symbol: "&#928;",
                    laTexValue: "\\pi",
                    actionType: "write",
                    type: "btn",
                },

            ]
        }
    ];


    public get symbols() : any {
        return this._symbols;
    }

}
